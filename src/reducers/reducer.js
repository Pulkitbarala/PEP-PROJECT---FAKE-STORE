const handleCart = (state = [], action) => {
    switch (action.type) {
      case "ADD_ITEM":
        const exist = state.find((item) => item.id === action.payload.id);
        if (exist) {
          return state.map((item) =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
          );
        } else {
          return [...state, { ...action.payload, qty: 1 }];
        }
  
      case "REMOVE_ITEM":
        const itemToRemove = state.find((item) => item.id === action.payload.id);
        if (itemToRemove.qty === 1) {
          return state.filter((item) => item.id !== action.payload.id);
        } else {
          return state.map((item) =>
            item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
          );
        }
  
      case "EMPTY_CART":
        return [];
  
      default:
        return state;
    }
  };
  
  export default handleCart;
