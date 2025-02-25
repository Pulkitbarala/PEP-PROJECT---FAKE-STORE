const handleCart = (state = [], action) => {
    switch (action.type) {
        case "ADDITEM":
            return [...state, action.payload];
        case "DELITEM":
            return state.filter(item => item.id !== action.payload.id);
        case "EMPTY_CART":
            return [];
        default:
            return state;
    }
};

export default handleCart;
