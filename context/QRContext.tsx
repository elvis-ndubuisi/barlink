import React from "react";

interface iInitial {
  value: string;
  bgColor: string;
  fgColor: string;
  qrStyle: "squares" | "dots";
  quietZone: number;
  size: number;
  ecLevel: "L" | "M" | "Q" | "H";
  enableCORs: boolean;
  logoImage?: string;
  logoOpacity?: number;
  logoHeight?: number;
  logoWidth?: number;
  removeQrCodeBehindLogo?: boolean;
  eyeColor?: string | [string];
  eyeRadius?: number | number[];
  id?: string;
}

let initialState: iInitial = {
  value: "https://barlink.vercel.app",
  bgColor: "blue",
  fgColor: "black",
  qrStyle: "squares",
  quietZone: 5,
  size: 150,
  ecLevel: "M",
  enableCORs: true,
  logoImage: "",
  logoOpacity: 1,
  logoHeight: 5,
  logoWidth: 5,
  removeQrCodeBehindLogo: false,
  eyeColor: "black",
  eyeRadius: 0,
  id: "",
};

let qrDefaults: iInitial = {
  value: "https://barlink.vercel.app",
  bgColor: "white",
  fgColor: "black",
  qrStyle: "squares",
  quietZone: 5,
  size: 150,
  ecLevel: "M",
  enableCORs: true,
  logoImage: "",
  logoOpacity: 1,
  logoHeight: 5,
  logoWidth: 5,
  removeQrCodeBehindLogo: false,
  eyeColor: "black",
  eyeRadius: 0,
  id: "",
};

function reducer(state: any, action: any) {
  const { type, payload } = action;

  switch (type) {
    case "MOD_VALUE":
      return { ...state, value: payload?.value };

    case "MOD_BG_COLOR":
      return { ...state, bgColor: payload?.bgColor };

    case "MOD_FG_COLOR":
      return { ...state, fgColor: payload?.fgColor };

    case "MOD_STYLE":
      return { ...state, qrStyle: payload?.qrStyle };

    case "MOD_QUIET_ZONE":
      return { ...state, quietZone: payload?.quietZone };

    case "MOD_SIZE":
      return { ...state, size: payload?.size };

    case "MOD_EC_LEVEL":
      return { ...state, ecLevel: payload?.ecLevel };

    case "MOD_CORS":
      return { ...state, enableCors: payload?.enableCors };

    case "MOD_LOGO_IMAGE":
      return { ...state, size: payload?.logoImage };

    case "MOD_LOGO_OPACITY":
      return { ...state, logoOpacity: payload?.logoOpacity };

    case "MOD_LOGO_WIDTH":
      return { ...state, logoWidth: payload?.logoWidth };

    case "MOD_LOGO_HEIGHT":
      return { ...state, logoHeight: payload?.logoHeight };

    case "MOD_LOGO_BG":
      return {
        ...state,
        removeQrCodeBehindLogo: payload?.removeQrCodeBehindLogo,
      };

    case "MOD_EYE_COLOR":
      return { ...state, eyeColor: payload?.eyeColor };

    case "MOD_EYE_RADIUS":
      return { ...state, eyeRadius: payload?.eyeRadius };

    /* Presets */
    case "PRESET_00":
      return { ...state, eyeRadius: qrDefaults.eyeRadius };

    case "PRESET_01":
      return {};
    case "PRESET_02":
      return {};
    case "PRESET_03":
      return {};
    case "PRESET_04":
      return {};
    case "PRESET_05":
      return {};

    /* Colors */
    case "RESET_FG_COLOR":
      return { ...state, fgColor: qrDefaults.fgColor };

    case "RESET_BG_COLOR":
      return { ...state, bgColor: qrDefaults.bgColor };

    case "RESET_EYE_COLOR":
      return { ...state, eyeColor: qrDefaults.eyeColor };

    default:
      throw new Error(`no case implemented for type ${type} yet`);
  }
}

const QRContext = React.createContext<{
  state: iInitial;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const QRProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <QRContext.Provider value={{ state, dispatch }}>
      {children}
    </QRContext.Provider>
  );
};

export default QRContext;
