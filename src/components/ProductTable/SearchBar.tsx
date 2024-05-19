import './ProductTable.css';
import React from "react";
import {SearchInputType, SearchType} from "../../shared/lib/types.ts";
export const SearchBar:React.FC<SearchType & SearchInputType> = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}: SearchType & SearchInputType) => {
    return (
        <form>
            <input type="text" placeholder="Search..." value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e)=> onInStockOnlyChange(e.target.checked)}/>
                Only show products in stock
            </label>
        </form>
    );
}
