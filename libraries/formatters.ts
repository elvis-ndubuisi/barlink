import type { iWifi, iCard } from "../types/qrtype-value";

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

function formatEmail(): string {
  return "";
}

export { formatWifi, formatCard, formatEmail };
