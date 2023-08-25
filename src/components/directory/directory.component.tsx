import { Category } from "../../types/Category";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

interface DirectoryProps {
  categories: Category[];
}

const Directory = ({ categories }: DirectoryProps) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
