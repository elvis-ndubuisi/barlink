import React from "react";

export type qrType =
  | "website"
  | "vCard"
  | "text"
  | "wifi"
  | "email"
  | "upload"
  | "facebook"
  | "twitter"
  | "crypto"
  | "phone"
  | "sms"
  | "geolocation";

let initialType: qrType = "website";

const QTypeContext = React.createContext<{
  type: qrType;
  setType: React.Dispatch<React.SetStateAction<qrType>>;
}>({
  type: initialType,
  setType: () => null,
});

export const QTypeProvider = ({ children }: { children: any }) => {
  const [type, setType] = React.useState<qrType>(initialType);
  return (
    <QTypeContext.Provider value={{ type, setType }}>
      {children}
    </QTypeContext.Provider>
  );
};

export default QTypeContext;
