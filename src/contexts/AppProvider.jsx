import { useReducer } from "react";
import AppContext from "./AppContext";
import reducer from "./reducer";

const initialState = {
  loading: false,
  cart: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
