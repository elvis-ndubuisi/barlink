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

export interface QRCode {
  text: string;
  options?: Qr_Options;
  logo?: Qr_Logo;
}
