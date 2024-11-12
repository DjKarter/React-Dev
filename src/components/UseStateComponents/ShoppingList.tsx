import React from 'react';

export interface ItemProps {
  title: string;
  isFruit: boolean;
  id: number;
}

export interface ProductsProps {
  products: ItemProps[];
}

export const ShoppingList: React.FC<ProductsProps> = ({
  products,
}: ProductsProps) => {
  const listItems = products.map((product: ItemProps) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'red' : 'green',
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
};
