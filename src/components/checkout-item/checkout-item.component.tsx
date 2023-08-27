import { useContext } from "react";
import { CartContext, CartItem } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const handleAddItem = () => addItemToCart(cartItem);

  const handleClearItem = () => clearItemFromCart(cartItem);

  const handleRemoveItem = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img alt={name} src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
