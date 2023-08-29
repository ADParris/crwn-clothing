import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
    title: "hats",
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
    title: "jackets",
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
    title: "sneakers",
  },
  {
    id: 4,
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
    title: "womens",
  },
  {
    id: 5,
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
    title: "mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
