import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const filterInitialState = {
    ProductList: [],
    filterProduct: [],
    sortBy: "",
    onlyInStock: false,
    bestSellerOnly: false,
    ratings: [],
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    const setProductList = (products) => {
        dispatch({
            type:"LOAD_PRODUCTS",
            payload : products
        });
    };

    const setSortBy = (sort)=> {
        dispatch ({
            type: "SORT_BY",
            payload:sort
        });
    };

    const setOnlyInStock = (value) =>{
        dispatch({
            type:"FILTER_BY_STOCK",
            payload:value
        });
    };

    const setBestSellerOnly= (value) => {
        dispatch ({
            type: "FILTER_BY_BEST_SELLER",
            payload:value
        });
    };

    const setRatings = (ratings) =>{
        dispatch({
            type:"FILTER_BY_RATINGS",
            payload:ratings
        })
    };

    const clearFilters = () => {
        dispatch({
            type:"CLEAR_FILTER"
        });
    };

    const value = {
        ProductList: state.ProductList,
        setProductList,
        filteredProducts: state.filterProduct,
        sortBy:state.sortBy,
        setSortBy,
        onlyInStock:state.onlyInStock,
        setOnlyInStock,
        bestSellerOnly:state.bestSellerOnly,
        setBestSellerOnly,
        ratings: state.ratings,
        setRatings,
        clearFilters
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter =()=> {
    const context = useContext(FilterContext);
    if(!context) {
        throw new Error ("useFilter must be use within FilterProvider")
    }
    return context
}