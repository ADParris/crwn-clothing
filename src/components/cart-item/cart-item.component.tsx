import "./cart-item.styles.scss";

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
    <div className="cart-item-container">
      <img alt={name} src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
