import { createContext, useEffect, useReducer } from "react";

import * as actionTypes from "./userActionsType";

import { loadState } from "../../localStorage";

import {
  authStateChangeListner,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = loadState() || {
  currentUser: null,
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch({
      type: actionTypes.SET_CURRENT_USER,
      payload: user,
    });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = authStateChangeListner((user) => {
      console.log("auth listner callback firing");
      if (user) {
        createUserDocFromAuth(user);
      }
      const data = user.providerData[0];
      setCurrentUser(data);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
