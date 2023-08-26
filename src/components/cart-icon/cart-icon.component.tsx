import { useContext } from "react";
import "./cart-icon.styles.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
