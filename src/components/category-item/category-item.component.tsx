import { Category } from "../../types/Category";
import "./category-item.styles.scss";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category: { imageUrl, title } }: CategoryItemProps) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
