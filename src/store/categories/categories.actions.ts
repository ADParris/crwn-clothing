import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  Categories,
  CategoriesActionTypes,
  CategoriesActions,
  CategoriesActionsWithPayload,
  CategoriesActionsWithoutPayload,
  CategoriesState,
} from "../../types/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesFailed = (error: CategoriesState["error"]) =>
  createAction(CategoriesActionTypes.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesStart = () =>
  createAction(CategoriesActionTypes.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray: Categories) =>
  createAction(CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export type FetchCategoriesAsyncAction = ThunkAction<
  void,
  CategoriesState,
  null,
  AnyAction
>;

export type FetchCategoriesAsyncDispatch = ThunkDispatch<
  CategoriesState,
  null,
  CategoriesActions
>;

export const fetchCategoriesAsync =
  (): FetchCategoriesAsyncAction =>
  async (dispatch: FetchCategoriesAsyncDispatch) => {
    try {
      dispatch(fetchCategoriesStart() as CategoriesActionsWithoutPayload);
      const categoriesArray = (await getCategoriesAndDocuments()) as Categories;
      dispatch(
        fetchCategoriesSuccess(categoriesArray) as CategoriesActionsWithPayload
      );
    } catch (error: Error | unknown) {
      dispatch(
        fetchCategoriesFailed(
          (error as Error).message
        ) as CategoriesActionsWithPayload
      );
    }
  };
