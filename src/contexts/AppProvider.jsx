import { useReducer } from "react";
import AppContext from "./AppContext";
import reducer from "./reducer";
import { CLEAR_CART } from "./actions";
import cartItems from "../data";

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
