import React from 'react';
import { ProductType } from '../../shared/lib/types.ts';

export const ProductRow: React.FC<{ product: ProductType }> = ({
  product,
}: {
  product: ProductType;
}) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
