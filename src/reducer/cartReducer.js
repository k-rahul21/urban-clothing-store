const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        itemsInCart: [...cartState.itemsInCart, cartAction.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        itemsInCart: cartState.itemsInCart.filter(
          (item) => item._id !== cartAction.payload
        ),
      };
    case "INCREASE_QTY":
      return {
        ...cartState,
        itemsInCart: cartState.itemsInCart.map((item) =>
          item._id === cartAction.payload
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    case "DECREASE_QTY":
      return {
        ...cartState,
        itemsInCart: cartState.itemsInCart.map((item) =>
          item._id === cartAction.payload
            ? item.qty > 1
              ? { ...item, qty: item.qty - 1 }
              : { ...item, qty: 1 }
            : item
        ),
      };
    case "CLEAR_CART":
      return { ...cartState, itemsInCart: [] };
    default:
      return cartState;
  }
};

export { cartReducer };
