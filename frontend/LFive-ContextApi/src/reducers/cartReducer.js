export const cartReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_CART":
            return {
                ...state,
                CartList: action.payload.CartList,
                total: action.payload.total,
            };
        case "ADD_TO_CART":
            return {
                ...state,
                CartList: action.payload.products,
                total: action.payload.total,
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                CartList: action.payload.products,
                total: action.payload.total,
            };
        case "CLEAR_CART":
            return {
                ...state,
                CartList: [],
                total: 0,
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};