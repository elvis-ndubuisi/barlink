import React from "react";
import Header from "./Header";
import Divider from "./Divider";
import Input from "./Input";
import InputWrapper, { Input50 } from "./InputWrapper";
import QRContext from "../../context/QRContext";

const InputGroup = () => {
  return (
    <section>
      <Header>Enter details (type)</Header>
      <Divider />
      {/* Website */}
      {/* <form>
        <Input type="text" placeholder="Enter your url" />
      </form> */}
      {/* Wifi */}
      {/* <section>
        <Input />
      </section> */}
      {/* Vcard */}
      <InputWrapper>
        <Input type="text" placeholder="First Name" />
        <Input50>
          <Input type="text" placeholder="Last Name" />
          <Input type="number" placeholder="Mobile number" />
        </Input50>
        <Input type="number" placeholder="Mobile number" />
      </InputWrapper>
    </section>
  );
};

export default InputGroup;
