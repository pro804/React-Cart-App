import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const test = "hello";
  return <AppContext.Provider value={{ test }}>{children}</AppContext.Provider>;
};

export default AppProvider;
