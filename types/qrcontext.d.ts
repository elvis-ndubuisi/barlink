type EyeColor = string;
type EyeRadi = number;

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
  eyeColor?: EyeColor | [EyeColor, EyeColor, EyeColor];
  eyeRadius?: EyeRadi | [EyeRadi, EyeRadi, EyeRadi];
  id?: string;
}

export default iInitial;
