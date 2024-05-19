import React, {useState} from "react";
import {SearchBar} from "./SearchBar.tsx";
import {ProductTable} from "./ProductTable.tsx";
import {ProductType} from "../../shared/lib/types.ts";
import './ProductTable.css';


export const FilterableProductTable: React.FC<{products: ProductType[]}> = ({products} : {products: ProductType[]}) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);






    return (
        <div style={{border:'2px dashed white'}}>
            <SearchBar filterText={filterText}
                       inStockOnly={inStockOnly}
                       onFilterTextChange={setFilterText}
                       onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>

    )
};
