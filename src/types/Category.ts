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
  error: string | null;
  isLoading: boolean;
}

export enum CategoriesActionTypes {
  FETCH_CATEGORIES_FAILED = "categories/FETCH_CATEGORIES_FAILED",
  FETCH_CATEGORIES_START = "categories/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "categories/FETCH_CATEGORIES_SUCCESS",
}

type FetchCategoriesFailedAction = {
  type: CategoriesActionTypes.FETCH_CATEGORIES_FAILED;
  payload: CategoriesState["error"];
};
type FetchCategoriesStartAction = {
  type: CategoriesActionTypes.FETCH_CATEGORIES_START;
};
type FetchCategoriesSuccessAction = {
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS;
  payload: CategoriesState["categories"];
};

export type CategoriesActionsWithPayload =
  | FetchCategoriesFailedAction
  | FetchCategoriesSuccessAction;

export type CategoriesActionsWithoutPayload = FetchCategoriesStartAction;

export type CategoriesActions =
  | CategoriesActionsWithPayload
  | CategoriesActionsWithoutPayload;

export type CategoriesMap = {
  [categoryTitle: string]: Product[];
};
