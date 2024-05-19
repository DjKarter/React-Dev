import React, {ReactNode} from "react";
import {ProductCategoryRow} from "./ProductCategoryRow.tsx";
import {ProductRow} from "./ProductRow.tsx";
import {ProductType, SearchType} from "../../shared/lib/types.ts";
import './ProductTable.css';

export const ProductTable:React.FC<{products: ProductType[] } & SearchType> =( {products , filterText, inStockOnly}: {products: ProductType[] } & SearchType ) => {
    const rows: ReactNode[] = [];
    let lastCategory = 'basic state';

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 || inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
