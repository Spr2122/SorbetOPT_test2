export type Product = {
  slug: string;
  name: string;
  shortName: string;
  fraction: string;
  packaging: string;
  price: string;
  minimum: string;
  image: string;
  description: string;
  applications: string[];
};

export const products: Product[] = [
  {
    slug: 'glaukonit-sorbent-1-5-mm',
    name: 'Глауконитовый сорбент 1–5 мм',
    shortName: 'Глауконит сорбент 1–5 мм',
    fraction: '1–5 мм',
    packaging: 'Биг-бэг 750 кг',
    price: '10 200 ₽/т',
    minimum: 'От 10 тонн',
    image: '/images/product-1.webp',
    description: 'Природный глауконитовый сорбент крупной фракции для оптовых поставок и задач, где требуется работа с гранулированным минеральным материалом.',
    applications: ['Нефтегазовая и промышленная отрасль', 'Экология и рекультивация', 'Водоподготовка']
  },
  {
    slug: 'glaukonit-obogashchennyj-0-1-0-9-mm',
    name: 'Глауконит обогащённый 0,1–0,9 мм',
    shortName: 'Глауконит обогащённый 0,1–0,9 мм',
    fraction: '0,1–0,9 мм',
    packaging: 'Мешок 50 кг',
    price: '13 725 ₽/т',
    minimum: 'От 10 тонн',
    image: '/images/product-2.webp',
    description: 'Обогащённый глауконит с мелкой фракцией для промышленных, экологических и агротехнических задач.',
    applications: ['Экология и рекультивация', 'Сельское хозяйство', 'Водоподготовка']
  },
  {
    slug: 'glaukonit-sorbent-0-01-0-1-mm',
    name: 'Глауконитовый сорбент 0,01–0,1 мм',
    shortName: 'Глауконит сорбент 0,01–0,1 мм',
    fraction: '0,01–0,1 мм',
    packaging: 'Мешок п/п',
    price: '22 000 ₽/т',
    minimum: 'От 10 тонн',
    image: '/images/product-3.webp',
    description: 'Тонкодисперсная фракция природного глауконита для задач, где требуется материал с малым размером частиц.',
    applications: ['Промышленная очистка', 'Экология', 'Сельское хозяйство']
  },
  {
    slug: 'glaukonitovyj-koncentrat-85',
    name: 'Глауконитовый концентрат 85%',
    shortName: 'Глауконитовый концентрат 85%',
    fraction: 'Тонкий помол',
    packaging: 'Промышленная упаковка',
    price: '75 000 ₽/т',
    minimum: 'От 10 тонн',
    image: '/images/product-4.webp',
    description: 'Глауконитовый концентрат высокой концентрации для специализированных промышленных и технологических задач.',
    applications: ['Промышленность', 'Экология', 'Специализированные минеральные смеси']
  },
  {
    slug: 'granulirovannyj-glaukonit-gp-gr-1',
    name: 'Гранулированный глауконит Гп-гр-1',
    shortName: 'Гранулированный глауконит Гп-гр-1',
    fraction: '1,5 × 2 – 4 × 7 мм',
    packaging: 'По согласованию',
    price: 'По запросу',
    minimum: 'От 10 тонн',
    image: '/images/product-5.webp',
    description: 'Гранулированная продукция с заданным диапазоном размеров частиц для оптовых поставок.',
    applications: ['Сельское хозяйство', 'Экология', 'Промышленные задачи']
  },
  {
    slug: 'glaukonit-gr',
    name: 'Глауконит ГР',
    shortName: 'Глауконит ГР',
    fraction: 'По спецификации',
    packaging: 'Биг-бэг 700 кг',
    price: 'По запросу',
    minimum: 'От 10 тонн',
    image: '/images/product-6.webp',
    description: 'Глауконитовая продукция для оптовых поставок. Конкретные параметры и стоимость уточняются по техническому заданию.',
    applications: ['Промышленность', 'Сельское хозяйство', 'Экология']
  }
];
