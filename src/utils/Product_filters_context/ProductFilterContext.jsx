import { createContext } from "react";

export const FilterContext = createContext();

const ProductFilterContext = ({ children, value }) => {
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};

export default ProductFilterContext;
