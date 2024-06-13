import React from 'react';
import { FilterableProductTable } from '../../components/ProductTable/FilterableProductTable.tsx';
import { productsForTable } from '../../shared/lib/consts.ts';

export const ProductTablePage: React.FC = () => {
  return (
    <>
      <FilterableProductTable products={productsForTable} />
    </>
  );
};
