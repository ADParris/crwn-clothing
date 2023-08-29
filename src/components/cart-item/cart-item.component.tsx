import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  NameContainer,
} from "./cart-item.styles";

interface CartItemProps {
  cartItem: {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItem = ({
  cartItem: { imageUrl, name, price, quantity },
}: CartItemProps) => {
  return (
    <CartItemContainer>
      <CartItemImage alt={name} src={imageUrl} />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
