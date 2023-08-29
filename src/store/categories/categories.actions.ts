import { DocumentData } from "firebase/firestore";
import { CategoriesActionTypes, CategoriesState } from "../../types/Category";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (categories: DocumentData[]) =>
  createAction(CategoriesActionTypes.SET_CATEGORIES, categories);
