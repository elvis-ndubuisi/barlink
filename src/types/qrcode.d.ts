export interface Qr_Colors {
  dark?: string;
  light?: string;
}

export interface Qr_Options {
  type?: string;
  quality?: number;
  errorCorrectionLevel?: string;
  margin?: number;
  scale?: number;
  width?: number;
  color?: Qr_Colors;
  enableCORS?: boolean;
}

export interface Qr_LogoOpt {
  width?: number;
  x?: number;
  y?: number;
}

export interface Qr_Logo {
  src: string;
  options?: Qr_LogoOpt;
}

// export interface QRCode {
//   text: string;
//   options?: Qr_Options;
//   logo?: Qr_Logo;
// }

export type Qr_EyeColor = string | EyeColor;
type EyeColor = { inner: string; outer: string };

export type Qr_CornerRadii =
  | number
  | [number, number, number, number]
  | CornerRadii;
interface CornerRadii {
  inner: number | [number, number, number, number];
  outer: number | [number, number, number, number];
}

export interface QRCode {
  text: string;
  options: Qr_Options;
  logo?: Qr_Logo;
  // ecLevel: "L" | "M" | "Q" | "H";
  // enableCORS?: boolean;
}
