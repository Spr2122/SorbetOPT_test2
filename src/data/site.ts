// Контакты сайта. Форм обратной связи нет — сайт не собирает персональные данные,
// все обращения идут напрямую в мессенджеры/по телефону/почте.
// TODO: замените плейсхолдеры на реальные контакты компании перед публикацией.
export const TELEGRAM_HANDLE = '@yourcompany';
export const TELEGRAM_URL = 'https://t.me/yourcompany';

export const WHATSAPP_NUMBER = '79991234567';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// MAX — мессенджер. Формат ссылки уточните после регистрации канала/аккаунта компании в MAX.
export const MAX_HANDLE = '@yourcompany';
export const MAX_URL = 'https://max.ru/u/yourcompany';

export const PHONE_DISPLAY = '+7 (999) 123-45-67';
export const PHONE_URL = 'tel:+79991234567';

export const EMAIL = 'info@sorbentopt.ru';
export const EMAIL_URL = `mailto:${EMAIL}`;

export const CONTACT_CHANNELS = [
  { id: 'phone', label: 'Позвонить', value: PHONE_DISPLAY, url: PHONE_URL },
  { id: 'telegram', label: 'Telegram', value: TELEGRAM_HANDLE, url: TELEGRAM_URL },
  { id: 'whatsapp', label: 'WhatsApp', value: PHONE_DISPLAY, url: WHATSAPP_URL },
  { id: 'max', label: 'MAX', value: MAX_HANDLE, url: MAX_URL },
  { id: 'email', label: 'Email', value: EMAIL, url: EMAIL_URL },
];

