import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find((i) => i.product == item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.product == product.product ? item : i
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      const id = action.payload;
      return {
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };
    default:
      return state;
  }
}

export { cartReducer };
