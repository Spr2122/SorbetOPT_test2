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

// Производитель, по договору с которым осуществляются поставки.
// Важно: сайт представляет продукцию как официальный представитель/поставщик,
// а НЕ как завод-изготовитель — формулировки ниже подобраны с учётом этого.
export const MANUFACTURER_NAME = 'ООО «Глауконит»';
export const MANUFACTURER_CITY = 'г. Челябинск';
export const REPRESENTATIVE_LINE = `Официальный представитель завода-изготовителя ${MANUFACTURER_NAME} (${MANUFACTURER_CITY})`;

// Метаданные актуального прайс-листа — при обновлении цен поменяйте только это.
export const PRICE_LIST_DATE = '1 февраля 2026 года';
export const PRICE_VAT_NOTE = 'Цены указаны с учётом НДС 22%, для объёма поставки от 10 до 1000 тонн. Действуют до выпуска очередной редакции прайс-листа.';


