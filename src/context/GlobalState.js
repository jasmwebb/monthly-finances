import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, date: "Date", description: "Description", amount: 0 }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions that make calls to the reducer
  function inputHistory(transaction) {
    dispatch({
      type: "INPUT_HISTORY",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, inputHistory }}>
      {children}
    </GlobalContext.Provider>
  )
}
