import type {
  iWifi,
  iCard,
  iEmail,
  iSms,
  iCalender,
  iAppleStore,
} from "../types/qrtype-value";

function web(data: string): string {
  if (data.trim().startsWith("https://") || data.trim().startsWith("http://")) {
    return data.trim();
  } else {
    return `https://${data.trim()}`;
  }
}

function wifi(data: iWifi): string {
  let format: string;
  // TODO: confirm escape character for backward slash \

  if (['"', ";", ",", ":", "\\"].includes(data.ssid)) {
    format = `WIFI:S:\"${data.ssid}\";T:${data.encryption};P:${data.password};H:${data.hidden};`;
  } else {
    format = `WIFI:S:${data.ssid};T:${data.encryption};P:${data.password};H:${data.hidden};`;
  }
  return format;
}

function card(data: iCard): string {
  let format = `
  BEGIN:VCARD
  VERSION:3.0
  N:${data.lastname};${data.firstname};;;
  FN:${data.firstname} ${data.lastname}
  EMAIL;TYPE=INTERNET;TYPE=WORK;TYPE=PREF:${data.email}
  ORG:${data.company}
  ROLE:${data.job}
  TEL;TYPE=MOBILE${data.phone}
  URL;TYPE=Homepage:${data.website}
  END:VCARD`;
  return format;
}

function email(data: iEmail): string {
  return `mailto:${data.email.trim()}?cc=${encodeURI(
    data.cc
  )}&subject=${encodeURI(data.subject)}&body=${encodeURI(data.message)}`;
}

function phone(): string {
  return "";
}

function sms(data: iSms): string {
  return `sms:${data.phone}:${encodeURI(data.message)}`;
}

function calender(data: iCalender): string {
  return `
  BEGIN:VEVENT
  SUMMARY:${data.summary}
  DTSTART:${data.sDate}
  DTEND:${data.eDate}
  END:VEVENT
  `;
}

function playstore(packageId: string): string {
  return `market://details?id=${packageId.trim()}`;
}

function appleStore(data: iAppleStore): string {
  // TODO: format books name string;
  // let appleMusic = `https://geo.itunes.apple.com/us/album/<album-name>/<id-maybe>?mt=1&app=music`;
  // let iTunes = `https://geo.itunes.apple.com/us/album/<album-name>/<id-maybe>?mt=1&app=itunes`;
  // // iBooks store
  // let iBooks = `https://geo.itunes.apple.com/us/book/<book-name-here>/id${data.id}?mt=11`;
  // Apple music, iTunes music store
  let appleMusic = `https://geo.itunes.apple.com/us/album/${data.name}/${data.id}?mt=1&app=music`;
  let iTunes = `https://geo.itunes.apple.com/us/album/${data.name}/${data.id}?mt=1&app=itunes`;
  // iBooks store
  let iBooks = `https://geo.itunes.apple.com/us/book/<book-name-here>/id${data.id}?mt=11`;
  // App store
  let store = `https://itunes.apple.com/us/app/${data.name}/id${data.id}?mt=8`;
  switch (data.type) {
    case "book":
      return iBooks;

    case "itune":
      return iTunes;

    case "app":
      return store;

    case "album":
      return appleMusic;
  }

  return "";
}

function geolocation(data: { latitude: number; longitude: number }): string {
  return `geo:${data.latitude},${data.longitude}`;
}

function soundclould(channelName: string): string {
  return `https://soundclould.com/${channelName}`;
}

export {
  web,
  wifi,
  card,
  email,
  sms,
  calender,
  appleStore,
  playstore,
  geolocation,
};
