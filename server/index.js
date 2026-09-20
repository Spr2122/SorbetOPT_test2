import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import Database from 'better-sqlite3';
import { z } from 'zod';
import fs from 'node:fs';
import path from 'node:path';

const app = express();
const port = Number(process.env.PORT || 3000);
const dbPath = path.resolve(process.env.DB_PATH || './server/data/sorbentopt.db');
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    volume TEXT NOT NULL,
    city TEXT NOT NULL,
    product TEXT,
    contact TEXT,
    comment TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    ip TEXT
  );
`);

app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '32kb' }));

const RATE_WINDOW_MS = 10 * 60 * 1000;
const limits = new Map();

// Periodically drop stale entries so the Map doesn't grow forever on a long-running process.
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of limits) {
    if (now - record.start > RATE_WINDOW_MS) limits.delete(key);
  }
}, RATE_WINDOW_MS).unref();

function rateLimit(req, res, next) {
  const key = req.ip || 'unknown';
  const now = Date.now();
  const record = limits.get(key) || { start: now, count: 0 };
  if (now - record.start > RATE_WINDOW_MS) { record.start = now; record.count = 0; }
  record.count += 1;
  limits.set(key, record);
  if (record.count > 8) return res.status(429).json({ message: 'Слишком много запросов. Попробуйте позже.' });
  next();
}

const requestSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(40),
  volume: z.string().trim().min(1).max(40),
  city: z.string().trim().min(2).max(120),
  product: z.string().trim().max(200).optional().or(z.literal('')),
  contact: z.string().trim().max(160).optional().or(z.literal('')),
  comment: z.string().trim().max(2000).optional().or(z.literal('')),
  consent: z.union([z.literal('on'), z.literal('true')]),
  website: z.string().max(0).optional().or(z.literal(''))
});

const insert = db.prepare(`INSERT INTO requests (name, phone, volume, city, product, contact, comment, ip) VALUES (@name, @phone, @volume, @city, @product, @contact, @comment, @ip)`);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/requests', rateLimit, (req, res) => {
  const parsed = requestSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: 'Проверьте заполнение формы.' });
  if (parsed.data.website) return res.status(400).json({ message: 'Некорректный запрос.' });
  try {
    insert.run({ ...parsed.data, ip: req.ip || null });
    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Не удалось сохранить заявку.' });
  }
});

app.listen(port, '127.0.0.1', () => console.log(`SorbentOpt API listening on 127.0.0.1:${port}`));
