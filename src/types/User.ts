export type User = {
  createdAt?: Date;
  displayName: string | null;
  email: string | null;
} | null;

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserState {
  currentUser: User | null;
}

export enum UserActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

interface SetCurrentUserAction {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: UserState["currentUser"];
}

export type UserActions = SetCurrentUserAction;
