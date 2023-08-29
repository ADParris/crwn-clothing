import { Product } from "../../types/Product";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./category-preview.styles";

interface CategoryPreviewProps {
  products: Product[];
  title: string;
}

const CategoryPreview = ({ products, title }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleContainer to={title}>{title.toUpperCase()}</TitleContainer>
      </h2>
      <PreviewContainer>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
