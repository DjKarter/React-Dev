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
