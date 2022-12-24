export interface iEmail {
  email: string;
  cc: string;
  subject: string;
  message: string;
}

export interface iWifi {
  ssid: string;
  hidden: boolean;
  password: string;
  encryption: "none" | "WEP" | "WAP/WPA2";
}

export interface iCard {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  street: string; // address
  country: string;
  state: string;
  city: string;
  zip: string;
  website: string;
  company: string;
  job: string;
  birthday: string;
  nickname: string;
  note: string;
}

export interface iSms {
  phone: number;
  message: string;
}

export interface iPhone {
  mobile: number;
}

export interface iAppleStore {
  type?: string;
  id?: number;
  name?: string;
}

export interface iYoutube {}

export interface iGeo {}

export interface iFacebook {}

export interface iInstagram {}

export interface iSportify {}

export interface iTwitter {}

export interface iWhatsapp {}

export interface iCalender {
  summary: string;
  sDate: unknown;
  eDate: unknown;
}
