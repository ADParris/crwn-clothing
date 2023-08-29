import { CartActions, CartActionTypes, CartState } from "../../types/Cart";

const initialCartState: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (
  state = initialCartState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case CartActions.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    case CartActions.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
