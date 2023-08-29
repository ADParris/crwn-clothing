import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.actions";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selectors";
import {
  CartIconContainer,
  StyledItemCount,
  StyledShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <StyledShoppingIcon />
      <StyledItemCount>{cartCount}</StyledItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
