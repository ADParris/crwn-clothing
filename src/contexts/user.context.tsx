import { User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

interface UserContextState {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const initialUserContextState: UserContextState = {
  currentUser: null,
  setCurrentUser: () => null,
};

type UserContextType = typeof initialUserContextState;

export const UserContext = createContext<UserContextType>(
  initialUserContextState
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
