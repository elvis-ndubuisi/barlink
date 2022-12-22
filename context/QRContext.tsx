import React from "react";
import type iInitial from "../types/qrcontext";

let initialState: iInitial = {
  value: "https://barlink.vercel.app",
  bgColor: "white",
  fgColor: "black",
  qrStyle: "squares",
  quietZone: 5,
  size: 150,
  ecLevel: "M",
  enableCORs: false,
  logoImage: "",
  logoOpacity: 1,
  logoHeight: 150 * 0.2,
  logoWidth: 150 * 0.2,
  removeQrCodeBehindLogo: false,
  eyeColor: "black",
  eyeRadius: 0,
  id: "qrcode",
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
  logoHeight: 150 * 0.2,
  logoWidth: 150 * 0.2,
  removeQrCodeBehindLogo: false,
  eyeColor: "black",
  eyeRadius: 0,
  id: "qrcode",
};

function reducer(state: any, action: any) {
  const { type, payload } = action;

  switch (type) {
    case "MOD_VALUE":
      return { ...state, value: payload?.value };

    case "RESET_VALUE":
      return { ...state, value: "" };

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
      return { ...state, enableCORs: payload?.enableCORs };

    /* Logo Image Setting */
    case "MOD_LOGO_IMAGE":
      return { ...state, logoImage: payload?.logoImage };

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
    case "REMOVE_LOGO":
      return {
        ...state,
        logoImage: qrDefaults.logoImage,
        logoHeight: qrDefaults.logoHeight,
        logoWidth: qrDefaults.logoWidth,
        logoOpacity: qrDefaults.logoOpacity,
        removeQrCodeBehindLogo: qrDefaults.removeQrCodeBehindLogo,
      };

    case "MOD_EYE_RADIUS":
      return { ...state, eyeRadius: payload?.eyeRadius };

    /* Presets */
    case "PRESET_00":
      return { ...state, eyeRadius: qrDefaults.eyeRadius };

    case "PRESET_01":
      return {
        ...state,
        eyeRadius: [5, 10, 5] /* top/left top/right bottom/left */,
      };
    case "PRESET_02":
      return {
        ...state,
        eyeRadius: [
          [10, 10, 0, 10], // top/left eye
          [10, 10, 10, 0], // top/right eye
          [10, 0, 10, 10], // bottom/left eye
        ],
      };
    case "PRESET_03":
      return {
        ...state,
        eyeRadius: [
          {
            // top/left eye
            outer: [10, 10, 0, 10],
            inner: [0, 10, 10, 10],
          },
          [10, 10, 10, 0], // top/right eye
          [10, 0, 10, 10], // bottom/left
        ],
      };
    case "PRESET_04":
      return {
        ...state,
        eyeRadius: [
          {
            // top/left eye
            outer: [0, 0, 10, 10],
            inner: [0, 0, 10, 10],
          },
          {
            // top/right eye
            inner: [0, 0, 10, 10],
            outer: [0, 0, 10, 10],
          },
          {
            // bottom/left eye
            outer: [0, 0, 10, 10],
            inner: [0, 0, 10, 10],
          },
        ],
      };
    case "PRESET_05":
      return {
        ...state,
        eyeRadius: [
          {
            // top/let eye
            outer: [5, 5, 5, 5],
            innter: [0, 0, 10, 10],
          },
          // top/right eye
          {
            // top/let eye
            outer: [10, 10, 10, 10],
            inner: [10, 10, 10, 10],
          },
          {
            outer: [0, 0, 10, 10],
            inner: [0, 0, 10, 10],
          },
        ],
      };

    /* Colors */
    case "RESET_FG_COLOR":
      return { ...state, fgColor: qrDefaults.fgColor };

    case "RESET_BG_COLOR":
      return { ...state, bgColor: qrDefaults.bgColor };

    case "RESET_EYE_COLOR":
      return { ...state, eyeColor: qrDefaults.eyeColor };

    case "MOD_BG_COLOR":
      return { ...state, bgColor: payload?.bgColor };

    case "MOD_FG_COLOR":
      return { ...state, fgColor: payload?.bgColor };

    case "MOD_EYE_COLOR":
      return { ...state, eyeColor: payload?.eyeColor };

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
