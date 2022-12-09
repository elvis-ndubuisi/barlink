import React, { useState } from "react";

export const GlobalContext = React.createContext({});

export const GlobalProvider = ({ children }: any) => {
  const [isModalActive, setIsModalActive] = useState(false);
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
