/* QRcode  form input selector */

import React from "react";
import Header from "./Header";
import Divider from "./Divider";
import Input, { Label, Select, Textarea } from "./Input";
import InputWrapper, { Input50 } from "./InputWrapper";
import QTypeContext, { qrType } from "../../context/QTypeContext";
import QRContext from "../../context/QRContext";
import {
  iEmail,
  iCard,
  iWifi,
  iSms,
  iAppleStore,
  iCalender,
} from "../../types/qrtype-value";
import * as flatten from "../../libraries/formatters";

const QRInput = () => {
  // QRcode and Input Type Context
  const { type, setType } = React.useContext<{
    type: qrType;
    setType: React.Dispatch<React.SetStateAction<qrType>>;
  }>(QTypeContext);
  const { state, dispatch } = React.useContext(QRContext);

  const [iosHolder, setIosHolder] = React.useState("Album-name");

  // Input Type state value.
  /* WEBSITE */
  const [web, setWeb] = React.useState("");
  /* TEXT */
  const [text, setText] = React.useState("");
  /* MAIL */
  const [mail, setMail] = React.useState<iEmail>({
    email: "",
    subject: "",
    message: "",
    cc: "",
  });
  /* V-CARD */
  const [vCard, setvCard] = React.useState<iCard>({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    street: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    website: "",
    company: "",
    job: "",
    birthday: "",
    nickname: "",
    note: "",
  });
  /* WIFI */
  const [wifi, setWifi] = React.useState<iWifi>({
    ssid: "",
    hidden: true,
    password: "",
    encryption: "none",
  });
  /* SMS */
  const [sms, setSms] = React.useState<iSms>({ message: "", phone: 0 });
  /* Apple */
  const [apple, setApple] = React.useState<iAppleStore>({
    id: 0,
    name: "",
    type: "book",
  });
  /* Playstore */
  const [playstore, setPlaystore] = React.useState<string>("");
  /* Geolocation */
  const [geo, setGeo] = React.useState<{ latitude: number; longitude: number }>(
    { latitude: 0, longitude: 0 }
  );
  /* Calender */
  const [date, setDate] = React.useState<iCalender>({
    eDate: "",
    sDate: "",
    summary: "",
  });

  // selects -- Field (Input) Component Content
  let Field;
  switch (type) {
    case "website":
      Field = (
        <>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Enter your url"
              onChange={(event) => setWeb(event.target.value.trim())}
            />
          </InputWrapper>
        </>
      );
      break;

    case "text":
      Field = (
        <>
          <Textarea
            placeholder="Text..."
            onChange={(event) => setText(event.target.value.trim())}
          />
        </>
      );
      break;

    case "email":
      Field = (
        <>
          <InputWrapper>
            {/* email */}
            <Input
              type="text"
              placeholder="Your email"
              onChange={(event) =>
                setMail({ ...mail, email: event.target.value.trim() })
              }
            />
            {/* cc */}
            <Input
              type="text"
              placeholder="cc (seperated by commas)"
              onChange={(event) =>
                setMail({ ...mail, cc: event.target.value.trim() })
              }
            />
            {/* subject */}
            <Input
              type="text"
              placeholder="Subject"
              onChange={(event) =>
                setMail({ ...mail, subject: event.target.value.trim() })
              }
            />
            {/* body */}
            <Textarea
              placeholder="Body..."
              onChange={(event) =>
                setMail({ ...mail, message: event.target.value.trim() })
              }
            />
          </InputWrapper>
        </>
      );
      break;

    case "wifi":
      Field = (
        <>
          <InputWrapper>
            <Input50>
              <Input
                type="text"
                placeholder="Network Name: SSID"
                onChange={(event) =>
                  setWifi({ ...wifi, ssid: event.target.value.trim() })
                }
              />
              <Label>
                <Input
                  type="checkbox"
                  placeholder="hidden"
                  checked={wifi.hidden}
                  onChange={(event) =>
                    setWifi({ ...wifi, hidden: event.target.checked })
                  }
                />
                Hidden
              </Label>
            </Input50>
            <Input
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setWifi({ ...wifi, password: event.target.value.trim() })
              }
            />
            <Label>
              Encryption:
              <Select
                value={wifi.encryption}
                onChange={(event) =>
                  setWifi({
                    ...wifi,
                    encryption: event.target.value.trim() as
                      | "none"
                      | "WEP"
                      | "WAP/WPA2",
                  })
                }
              >
                <option value="none">None</option>
                <option value="WEP">WEP</option>
                <option value="WAP/WPA2">WAP/WPA2</option>
              </Select>
            </Label>
          </InputWrapper>
        </>
      );
      break;

    case "vCard":
      Field = (
        <>
          {" "}
          <InputWrapper>
            {/* firstname & lastname */}
            <Input50>
              <Input
                type="text"
                placeholder="First Name"
                onChange={(event) =>
                  setvCard({ ...vCard, firstname: event.target.value.trim() })
                }
              />
              <Input
                type="text"
                placeholder="Last Name"
                onChange={(event) =>
                  setvCard({ ...vCard, lastname: event.target.value.trim() })
                }
              />
            </Input50>
            {/* phone & email */}
            <Input50>
              <Input
                type="tel"
                placeholder="Phone"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    phone: event.target.value.trim(),
                  })
                }
              />
              <Input
                type="email"
                placeholder="Email - your@email.com"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    email: event.target.value.trim(),
                  })
                }
              />
            </Input50>
            {/* contry, state, & city */}
            <Input50>
              <Input
                type="text"
                placeholder="Country"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    country: event.target.value.trim(),
                  })
                }
              />
              <Input
                type="text"
                placeholder="State"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    state: event.target.value.trim(),
                  })
                }
              />
              <Input
                type="text"
                placeholder="City"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    city: event.target.value.trim(),
                  })
                }
              />
            </Input50>
            {/* company & role */}
            <Input50>
              <Input
                type="text"
                placeholder="Company"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    company: event.target.value.trim(),
                  })
                }
              />
              <Input
                type="text"
                placeholder="Role"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    job: event.target.value.trim(),
                  })
                }
              />
            </Input50>
            {/* street */}
            <Input
              type="text"
              placeholder="Street"
              onChange={(event) =>
                setvCard({
                  ...vCard,
                  street: event.target.value.trim(),
                })
              }
            />
            {/* zipcode & website */}
            <Input50>
              <Input
                type="text"
                placeholder="ZIP/Postal Code"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    zip: event.target.value.trim(),
                  })
                }
              />
              <Input
                type="url"
                placeholder="Website - www.yourwebsite.com"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    website: event.target.value.trim(),
                  })
                }
              />
            </Input50>
            {/* birthday & nickname */}
            <Input50>
              <Input
                type="month"
                placeholder="birthday"
                onChange={(event) =>
                  setvCard({ ...vCard, birthday: event.target.value.trim() })
                }
              />
              <Input
                type="text"
                placeholder="Nickname"
                onChange={(event) =>
                  setvCard({ ...vCard, nickname: event.target.value.trim() })
                }
              />
            </Input50>
            {/* notes */}
            <Textarea
              placeholder="Notes...(200 characters)"
              maxLength={200}
              onChange={(event) =>
                setvCard({ ...vCard, note: event.target.value.trim() })
              }
            />
          </InputWrapper>
        </>
      );
      break;

    case "facebook":
      Field = (
        <>
          <InputWrapper>
            <input />
          </InputWrapper>
        </>
      );
      break;

    case "twitter":
      Field = (
        <>
          <InputWrapper>
            <input />
          </InputWrapper>
        </>
      );
      break;

    case "sms":
      Field = (
        <>
          <InputWrapper>
            <Input
              type="number"
              placeholder="Phone number"
              onChange={(event) =>
                setSms({ ...sms, phone: event.target.valueAsNumber })
              }
            />
            <Textarea
              placeholder="text"
              onChange={(event) =>
                setSms({ ...sms, message: event.target.value.trim() })
              }
            />
          </InputWrapper>
        </>
      );
      break;

    case "apple":
      Field = (
        <>
          <InputWrapper>
            <Input50>
              <Input
                type="number"
                placeholder="ID number"
                onChange={(event) =>
                  setApple({ ...apple, id: event.target.valueAsNumber })
                }
              />
              <Select
                value={apple.type}
                onChange={(event) => {
                  setApple({ ...apple, type: event.target.value });
                  switch (event.target.value) {
                    case "book":
                      setIosHolder("Book title");
                      break;
                    case "itune":
                      setIosHolder("ITune album name");
                      break;
                    case "app":
                      setIosHolder("App name");
                      break;
                    case "album":
                      setIosHolder("Apple Music album name");
                      break;

                    default:
                      break;
                  }
                }}
              >
                <option value="itune">iTunes</option>
                <option value="book">iBooks</option>
                <option value="app">App Store</option>
                <option value="album">Apple Music</option>
              </Select>
            </Input50>
            <Input
              type="text"
              placeholder={iosHolder}
              onChange={(event) =>
                setApple({ ...apple, name: event.target.value.trim() })
              }
            />
          </InputWrapper>
        </>
      );
      break;

    case "playstore":
      Field = (
        <>
          <Input
            type="text"
            placeholder="Package name -  foo.google.com"
            onChange={(event) => setPlaystore(event.target.value.trim())}
          />
        </>
      );
      break;

    case "geolocation":
      Field = (
        <>
          <InputWrapper>
            <Input50>
              <Input
                type="number"
                placeholder="Latitude"
                onChange={(event) =>
                  setGeo({ ...geo, latitude: event.target.valueAsNumber })
                }
              />
              <Input
                type="number"
                placeholder="Longitude"
                onChange={(event) =>
                  setGeo({ ...geo, longitude: event.target.valueAsNumber })
                }
              />
            </Input50>
          </InputWrapper>
        </>
      );
      break;

    case "calender":
      Field = (
        <>
          <InputWrapper>
            <Textarea
              placeholder="Summary..."
              onChange={(event) =>
                setDate({ ...date, summary: event.target.value.trim() })
              }
              maxLength={200}
            />
            <Input50>
              <Input
                type="date"
                onChange={(event) =>
                  setDate({ ...date, sDate: event.target.valueAsDate })
                }
              />
              <Input
                type="date"
                onChange={(event) =>
                  setDate({ ...date, eDate: event.target.valueAsDate })
                }
              />
            </Input50>
          </InputWrapper>
        </>
      );
      break;

    case "youtube":
      Field = (
        <>
          <InputWrapper>
            <input />
          </InputWrapper>
        </>
      );
      break;

    default:
      Field = (
        <>
          <InputWrapper>
            <Input type="text" placeholder="Enter your url" />
          </InputWrapper>
        </>
      );
      break;
  }

  React.useEffect(() => {
    switch (type) {
      case "website":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.web(web) },
        });
        break;

      case "text":
        dispatch({ type: "MOD_VALUE", payload: { value: text } });
        break;

      case "wifi":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.wifi(wifi) },
        });
        break;

      case "email":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.email(mail) },
        });
        break;

      case "vCard":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.card(vCard) },
        });
        break;

      case "calender":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.calender(date) },
        });
        break;

      case "sms":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.sms(sms) },
        });
        break;

      case "apple":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.appleStore(apple) },
        });
        break;

      case "playstore":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.playstore(playstore) },
        });
        break;

      case "geolocation":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.geolocation(geo) },
        });
        break;

      case "crypto":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: "format crypto input" },
        });
        break;

      case "upload":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: "format upload input" },
        });
        break;

      case "facebook":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: "format facebook input" },
        });
        break;

      case "twitter":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: "format twitter input" },
        });
        break;

      default:
        break;
    }
  }, [
    web,
    setWeb,
    text,
    setText,
    wifi,
    setWifi,
    mail,
    setMail,
    vCard,
    setvCard,
    sms,
    setSms,
    apple,
    setApple,
    playstore,
    setPlaystore,
    geo,
    setGeo,
    date,
    setDate,
    dispatch,
  ]);

  return (
    <section>
      <Header>{`Enter details - ${
        type.charAt(0).toUpperCase() + type.slice(1)
      }`}</Header>
      <Divider />
      {Field}
    </section>
  );
};

export default QRInput;
