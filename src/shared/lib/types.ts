export type ProductType = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

export type CategoryType = string;

export type SearchType = {
  filterText: string;
  inStockOnly: boolean;
};

export type SearchInputType = {
  onFilterTextChange(elem: string): void;
  onInStockOnlyChange(elem: boolean): void;
};

export type QuestionType = {
  title: string;
  variants: Array<string>;
  correct: number;
};

export type UserDataType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type RatesType = {
  RUB: number;
  USD: number;
  EUR: number;
  GBP: number;
};
