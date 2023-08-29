import { useNavigate } from "react-router-dom";
import { Category } from "../../types/Category";
import {
  BackgroundImage,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  DirectoryItemContainer,
} from "./directory-item.styles";

interface CategoryItemProps {
  category: Category;
}

const DirectoryItem = ({
  category: { imageUrl, route, title },
}: CategoryItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={handleClick}>
      <BackgroundImage imgurl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>Shop Now</ContentSubtitle>
      </ContentContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
