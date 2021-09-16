import { createContext, useReducer } from "react";
import { initialState, ToDoCrudReducer } from "../reducers/ToDoCrudReducer";

const Store = createContext(initialState)

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToDoCrudReducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>
}

export { StoreProvider }
export default Store