import { useReducer } from "react";
import AppContext from "./AppContext";
import reducer from "./reducer";
import cartItems from "../data";
import { CLEAR_CART, REMOVE_ITEM } from "./actions";

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
