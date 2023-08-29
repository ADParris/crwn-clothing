import {
  CategoriesActionTypes,
  CategoriesActions,
  CategoriesState,
} from "../../types/Category";

const initialCategoriesState: CategoriesState = {
  categories: [],
};

export const categoriesReducer = (
  state = initialCategoriesState,
  action: CategoriesActions
) => {
  switch (action.type) {
    case CategoriesActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
