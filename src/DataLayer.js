import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from './reducer';  // Ensure the path to reducer.js is correct

export const DataLayerContext = createContext();

export const DataLayer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataLayerContext.Provider value={[state, dispatch]}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
