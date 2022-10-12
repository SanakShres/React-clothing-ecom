import { createContext, useReducer, useEffect } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

const INITIAL_STATE = {
  currentUser: null,
};

const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SIGNIN": {
  //       return {
  //         currentUser: action.payload,
  //       };
  //     }
  //     case "SIGNOUT": {
  //       return {
  //         currentUser: null,
  //       };
  //     }
  //     default:
  //       return state;
  //   }
  return {
    currentUser: action.payload,
  };
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch({ payload: user });
    });
    return unsub;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
