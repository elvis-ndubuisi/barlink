/* QRcode  form input selector */

import React from "react";
import Header from "./Header";
import Divider from "./Divider";
import Input, { Label, Select, Textarea } from "./Input";
import InputWrapper, { Input50 } from "./InputWrapper";
import QTypeContext, { qrType } from "../../context/QTypeContext";
import QRContext from "../../context/QRContext";
import type { iEmail, iCard, iWifi } from "../../types/qrtype-value";
import * as flatten from "../../libraries/formatters";

const QRInput = () => {
  const { type, setType } = React.useContext<{
    type: qrType;
    setType: React.Dispatch<React.SetStateAction<qrType>>;
  }>(QTypeContext);
  const { state, dispatch } = React.useContext(QRContext);

  let Field;

  /* All Field's input state */
  // website
  const [web, setWeb] = React.useState("");
  // text
  const [text, setText] = React.useState("");
  // email
  const [mail, setMail] = React.useState<iEmail>({
    email: "",
    subject: "",
    message: "",
  });
  // vCard
  const [vCard, setvCard] = React.useState<iCard>({
    firstname: "",
    lastname: "",
    mobile: "",
    phone: "",
    fax: "",
    company: "",
    website: "",
    email: "",
    job: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  // wifi
  const [wifi, setWifi] = React.useState<iWifi>({
    ssid: "",
    hidden: true,
    password: "",
    encryption: "none",
  });

  React.useEffect(() => {
    switch (type) {
      case "website":
        // reset previews input field state values
        dispatch({ type: "RESET_VALUE" });
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.formatWeb(web) },
        });
        break;

      case "text":
        dispatch({ type: "MOD_VALUE", payload: { value: text } });
        break;

      case "wifi":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.formatWifi(wifi) },
        });
        break;

      case "email":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.formatEmail(mail) },
        });
        break;

      case "vCard":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: flatten.formatCard(vCard) },
        });
        break;

      case "phone":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: "format phone input" },
        });
        break;

      case "sms":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: "format sms input" },
        });
        break;

      case "geolocation":
        dispatch({
          type: "MOD_VALUE",
          payload: { value: "format geolocation input" },
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
    dispatch,
  ]);

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
            <Input
              type="text"
              placeholder="Your email"
              onChange={(event) =>
                setMail({ ...mail, email: event.target.value.trim() })
              }
            />
            <Input
              type="text"
              placeholder="Subject"
              onChange={(event) =>
                setMail({ ...mail, subject: event.target.value.trim() })
              }
            />
            <Textarea
              placeholder="Message..."
              onChange={(event) =>
                setMail({ ...mail, message: event.target.value.trim() })
              }
            />
          </InputWrapper>
        </>
      );
      break;

    case "upload":
      Field = (
        <>
          <InputWrapper>
            <Input type="url" placeholder="Upload URL" />
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
            <Input
              type="tel"
              placeholder="Mobile"
              onChange={(event) =>
                setvCard({
                  ...vCard,
                  mobile: event.target.value.trim(),
                })
              }
            />
            <Input50>
              <Input
                type="text"
                placeholder="Phone"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    phone: event.target.value.trim(),
                  })
                }
              />
              <Input
                type="text"
                placeholder="Fax"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    fax: event.target.value.trim(),
                  })
                }
              />
            </Input50>
            <Input50>
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
                placeholder="Job Title"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    job: event.target.value.trim(),
                  })
                }
              />
            </Input50>
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
            <Input50>
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
            </Input50>
            <Input50>
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
                placeholder="Country"
                onChange={(event) =>
                  setvCard({
                    ...vCard,
                    country: event.target.value.trim(),
                  })
                }
              />
            </Input50>
          </InputWrapper>
        </>
      );
      break;

    case "phone":
      break;

    case "facebook":
      break;

    case "twitter":
      break;

    case "crypto":
      break;

    case "sms":
      Field = (
        <>
          <InputWrapper>
            <Input50>
              <Input type="text" placeholder="Country Code" />
              <Input type="text" placeholder="Area Code" />
            </Input50>
            <Input type="number" placeholder="Phone number" />
            <Textarea placeholder="text" />
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

  return (
    <section>
      <Header>{`Enter details - ${type}`}</Header>
      <Divider />
      {Field}
    </section>
  );
};

export default QRInput;
