/* QRcode  form input selector */

import React from "react";
import Header from "./Header";
import Divider from "./Divider";
import Input, { Label, Textarea } from "./Input";
import InputWrapper, { Input50 } from "./InputWrapper";
import QRContext from "../../context/QRContext";
import QTypeContext, {
  QTypeProvider,
  qrType,
} from "../../context/QTypeContext";

const InputGroup = () => {
  const { type, setType } = React.useContext<{
    type: qrType;
    setType: React.Dispatch<React.SetStateAction<qrType>>;
  }>(QTypeContext);

  let Field;

  switch (type) {
    case "website":
      Field = (
        <>
          <InputWrapper>
            <Input type="text" placeholder="Enter your url" />
          </InputWrapper>
        </>
      );
      break;

    case "text":
      Field = (
        <>
          <Textarea placeholder="Text..." />
        </>
      );
      break;

    case "email":
      Field = (
        <>
          <InputWrapper>
            <Input type="text" placeholder="Your email" />
            <Input type="text" placeholder="Subject" />
            <Textarea placeholder="Message..." />
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
              <Input type="text" placeholder="Network Name: SSID" />
              <Label>
                <Input type="checkbox" placeholder="hidden" />
                Hidden
              </Label>
            </Input50>
            <Input type="password" placeholder="Password" />
            <Label>
              Encryption:
              <select>
                <option value="none">None</option>
                <option value="WEP">WEP</option>
                <option value="WAP/WPA2">WAP/WPA2</option>
              </select>
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
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
            </Input50>
            <Input type="tel" placeholder="Mobile" />
            <Input50>
              <Input type="text" placeholder="Phone" />
              <Input type="text" placeholder="Fax" />
            </Input50>
            <Input50>
              <Input type="email" placeholder="Email - your@email.com" />
              <Input type="url" placeholder="Website - www.yourwebsite.com" />
            </Input50>
            <Input50>
              <Input type="text" placeholder="Company" />
              <Input type="text" placeholder="Job Title" />
            </Input50>
            <Input type="text" placeholder="Street" />
            <Input50>
              <Input type="text" placeholder="City" />
              <Input type="text" placeholder="ZIP/Postal Code" />
            </Input50>
            <Input50>
              <Input type="text" placeholder="State" />
              <Input type="text" placeholder="Country" />
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

export default InputGroup;
