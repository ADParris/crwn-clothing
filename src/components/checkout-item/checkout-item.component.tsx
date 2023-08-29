import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { CartItem } from "../../types/Cart";
import {
  ArrowContainer,
  CheckoutItemContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
  QuantityContainer,
  RemoveButtonContainer,
  StyledImage,
  ValueContainer,
} from "./checkout-item.styles";

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));

  const handleClearItem = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const handleRemoveItem = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <StyledImage alt={name} src={imageUrl} />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={handleRemoveItem}>&#10094;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={handleAddItem}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <PriceContainer>${price}</PriceContainer>
      <RemoveButtonContainer onClick={handleClearItem}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
