import React from "react";

let initialType: string = "website";

const QTypeContext = React.createContext<{
  initialType: string;
  dispatch: React.Dispatch<any>;
}>({ initialType, dispatch: () => null });

// export const QTypeProvider = ({ children }: { children: any }) => {
//   return <QTypeContext.Provider value={}>{children}</QTypeContext.Provider>;
// };

export default QTypeContext;
