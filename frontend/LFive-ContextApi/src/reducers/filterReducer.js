export const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return {
                ...state,
                ProductList: action.payload,
                filterProduct: action.payload,
            };
        case "SORT_BY":
            return {
                ...state,
                sortBy: action.payload,
            };
        case "FILTER_BY_STOCK":
            return {
                ...state,
                onlyInStock: action.payload,
            };
        case "FILTER_BY_BEST_SELLER":
            return {
                ...state,
                bestSellerOnly: action.payload,
            };
        case "FILTER_BY_RATINGS":
            return {
                ...state,
                ratings: action.payload,
            };
        case "CLEAR_FILTER":
            return {
                ...state,
                sortBy: "",
                onlyInStock: false,
                bestSellerOnly: false,
                ratings: [],
                filterProduct: state.ProductList,
            };
        default:
            return state;
    }
};