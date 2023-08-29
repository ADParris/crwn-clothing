import { UserActionTypes, UserActions, UserState } from "../../types/User";

const initialUserState: UserState = {
  currentUser: null,
};

export const userReducer = (state = initialUserState, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
