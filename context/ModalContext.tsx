import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }: any) => {
  const [inView, setInView] = useState(false);
  return (
    <ModalContext.Provider value={{ inView, setInView }}>
      {children}
    </ModalContext.Provider>
  );
};
