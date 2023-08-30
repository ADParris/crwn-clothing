import {
  CategoriesActionTypes,
  CategoriesActions,
  CategoriesState,
} from "../../types/Category";

const initialCategoriesState: CategoriesState = {
  categories: [],
  error: null,
  isLoading: false,
};

export const categoriesReducer = (
  state = initialCategoriesState,
  action: CategoriesActions
) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
