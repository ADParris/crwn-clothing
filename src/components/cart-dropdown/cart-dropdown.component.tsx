import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

interface CartDropdownProps {}

const CartDropdown = ({}: CartDropdownProps) => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
