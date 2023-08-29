import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { Product } from "../../types/Product";
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardFooter,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice,
} from "./product-card.styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { imageUrl, name, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <ProductCardImage alt={name} src={imageUrl} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>${price}</ProductCardPrice>
      </ProductCardFooter>
      <ProductCardButton buttonType="inverted" onClick={handleClick}>
        Add to cart
      </ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
