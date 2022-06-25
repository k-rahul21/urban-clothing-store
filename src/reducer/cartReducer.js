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
    case "GET_ORIGINAL_PRICE":
      const getOriginalPrice = (acc, curr) =>
        acc + curr.originalPrice * curr.qty;
      const originalPrice = cartState.itemsInCart.reduce(getOriginalPrice, 0);
      return { ...cartState, originalPrice: originalPrice };

    case "GET_DISCOUNTED_PRICE":
      const getDiscountedPrice = (acc, curr) =>
        acc + curr.discountedPrice * curr.qty;
      const discountedPrice = cartState.itemsInCart.reduce(
        getDiscountedPrice,
        0
      );
      return { ...cartState, totalDiscount: discountedPrice };
    case "PRICE_AFTER_DISCOUNT":
      const priceAfterDiscount =
        cartState.originalPrice - cartState.totalDiscount;
      return { ...cartState, priceAfterDiscount: priceAfterDiscount };
    case "TOTAL_PRICE":
      const totalPrice = cartState.priceAfterDiscount + 99;
      return { ...cartState, totalPrice: totalPrice };
    case "CLEAR_CART":
      return { ...cartState, itemsInCart: [] };
    default:
      return cartState;
  }
};

export { cartReducer };
