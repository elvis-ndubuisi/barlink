export interface iEmail {
  email: string;
  subject?: string;
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
  mobile: string;
  phone?: string;
  fax?: string;
  email: string;
  website: string;
  company: string;
  job: string;
  street: string;
  city: string;
  zip?: string;
  state: string;
  country: string;
}

export interface iSms {
  country: string;
  area: string;
  phone: number;
  message: string;
}

export interface iPhone {
  mobile: number;
}

export interface iAppleStore {
  url: string;
}
