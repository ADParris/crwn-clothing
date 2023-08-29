import { UserActionTypes, UserState } from "../../types/User";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user: UserState["currentUser"]) =>
  createAction(UserActionTypes.SET_CURRENT_USER, user);
