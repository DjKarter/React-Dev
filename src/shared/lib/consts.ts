export const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export const productsForTable = [
  {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Apple',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Dragonfruit',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Passionfruit',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Spinach',
  },
  {
    category: 'Vegetables',
    price: '$4',
    stocked: false,
    name: 'Pumpkin',
  },
  {
    category: 'Vegetables',
    price: '$1',
    stocked: true,
    name: 'Peas',
  },
];

export const quizQuestions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

export const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];
