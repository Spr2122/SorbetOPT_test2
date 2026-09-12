# СорбентОпт — запуск на VPS

Проект состоит из:
- Astro — статический SEO-фронтенд;
- Node.js + Express — API заявок;
- SQLite — хранение заявок;
- Caddy — HTTPS и раздача сайта.

## 1. Перед публикацией

Обязательно замените:
- `sorbentopt.ru` в `astro.config.mjs`, `Caddyfile` и SEO-разметке на ваш реальный домен;
- телефон и email в `src/components/Header.astro`, `src/components/Footer.astro` и `src/pages/index.astro`;
- цены/условия в `src/data/products.ts` на актуальные;
- текст страницы `/privacy/` на фактические реквизиты оператора персональных данных.

## 2. Локальная проверка

Требуется Node.js 20+ (рекомендуется LTS).

```bash
npm install
npm run build
npm run dev
```

После сборки статический сайт находится в `dist/`.

API локально:

```bash
npm run api
```

Проверка:

```bash
curl http://127.0.0.1:3000/api/health
```

## 3. VPS

Установите Node.js LTS, Caddy и инструменты сборки для `better-sqlite3`.
Скопируйте проект, затем:

```bash
cd /var/www/sorbentopt
npm install
npm run build
mkdir -p server/data
```

Запуск API для проверки:

```bash
npm run api
```

## 4. systemd

Скопируйте `deploy/sorbentopt-api.service` в `/etc/systemd/system/`, проверьте пути и пользователя, затем:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now sorbentopt-api
sudo systemctl status sorbentopt-api
```

## 5. Caddy

Скопируйте `Caddyfile` в конфигурацию Caddy и замените домен.
DNS A-запись домена должна указывать на IP VPS.

После проверки:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

Caddy автоматически получает HTTPS-сертификат для публичного домена.

## 6. Где хранятся заявки

`server/data/sorbentopt.db` — SQLite-база. Делайте резервные копии этого файла.

API не открывается наружу: Node слушает `127.0.0.1:3000`, а внешний доступ к `/api/*` идёт через Caddy.

## 7. SEO после запуска

Проверьте:
- `/robots.txt`
- `/sitemap-index.xml`
- canonical в исходном HTML
- `title` и `description`
- один H1 на каждой странице
- JSON-LD
- изображения и alt
- 404

После подключения домена добавьте сайт в Яндекс Вебмастер и Google Search Console.
