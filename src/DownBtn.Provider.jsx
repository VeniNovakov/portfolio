import { createContext, useContext, useState } from "react";
import React from "react";

const DownContext = createContext({
  Down: false,
  setDown: (isDown) => {},
});

export const useDown = () => {
  return useContext(DownContext);
};

export const DownBtnProivder = ({ children }) => {
  const [down, setDown] = useState();

  return (
    <DownContext.Provider value={{ down, setDown }}>
      {children}
    </DownContext.Provider>
  );
};
