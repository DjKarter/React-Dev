import React from "react";
import {CategoryType} from "../../shared/lib/types.ts";
import './ProductTable.css';



export const ProductCategoryRow:React.FC<{ category: CategoryType }> = ( {category } : { category: CategoryType }) => {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    );
}
