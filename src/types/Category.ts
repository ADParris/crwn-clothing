import { Product } from "./Product";

export interface Category {
  id: number;
  imageUrl: string;
  route: string;
  title: string;
}

export type Categories =
  | {
      title: string;
      items: Product[];
    }[]
  | Record<string, never>;

export interface CategoriesState {
  categories: Categories;
}

export enum CategoriesActionTypes {
  SET_CATEGORIES = "SET_CATEGORIES",
}

export type CategoriesActions = {
  type: CategoriesActionTypes.SET_CATEGORIES;
  payload: CategoriesState["categories"];
};

export type CategoriesMap = {
  [categoryTitle: string]: Product[];
};
