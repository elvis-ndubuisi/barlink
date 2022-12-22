import type { iWifi, iCard, iEmail, iSms } from "../types/qrtype-value";

function formatWeb(data: string): string {
  if (data.trim().startsWith("https://") || data.trim().startsWith("http://")) {
    return data.trim();
  } else {
    return `https://${data.trim()}`;
  }
}

function formatWifi(data: iWifi): string {
  let format: string = `WIFI:S:${data.ssid};T:${data.encryption};P:=${data.password};H:${data.hidden};`;
  return format;
}

function formatCard(data: iCard): string {
  let format: string = `
        BEGIN:VCARD
        VERSION:4.0
        FN: ${data.firstname} ${data.lastname}
        N:${data.firstname};${data.lastname}
        ORG:${data.company}
        ROLE:${data.job}
        EMAIL;TYPE=work:${data.email}
        EMAIL;TYPE=HOME:${data.email}
        TEL;TYPE=mobile,voice:${data.mobile}
        URL:${data.website}
        ADR; TYPE=home: ${data.street}
        TZ:
        GENDER:M
        END:VCARD
    `;
  return format;
}

function formatEmail(data: iEmail): string {
  return "";
}

function formatPhone(): string {
  return "";
}

function formatSms(data: iSms): string {
  return "";
}

export { formatWeb, formatWifi, formatCard, formatEmail };
