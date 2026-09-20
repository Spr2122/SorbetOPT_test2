// На GitHub Pages сайт часто живёт не в корне домена, а по под-пути вида
// https://username.github.io/repo-name/ — это задаётся опцией `base` в astro.config.mjs.
// Обычные абсолютные пути вида "/images/foo.webp" или "/catalog/" при этом ЛОМАЮТСЯ,
// потому что браузер ищет их от корня домена, а не от под-пути сайта.
// withBase() добавляет актуальный base ко всем внутренним ссылкам и путям к файлам.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
