import React from "react";
import Divider from "./Divider";
import Header from "./Header";
import Grid from "./Grid";
import OptionButton from "./OptionButton";
import { HiWifi } from "react-icons/hi2";
import QTypeContext, { qrType } from "../../context/QTypeContext";
import {
  GoGlobe,
  GoTextSize,
  GoMail,
  GoCloudUpload,
  GoPerson,
} from "react-icons/go";

const SelectType = () => {
  const { type, setType } = React.useContext<{
    type: qrType;
    setType: React.Dispatch<React.SetStateAction<qrType>>;
  }>(QTypeContext);

  function handleState(state: qrType): void {
    setType(state);
    console.log(type);
  }

  return (
    <section>
      <Header>Select Type</Header>
      <Divider />
      <Grid>
        <OptionButton type="website" handlePreset={() => setType("website")}>
          <GoGlobe fontSize={30} />
        </OptionButton>
        <OptionButton type="text" handlePreset={() => setType("text")}>
          <GoTextSize fontSize={30} />
        </OptionButton>
        <OptionButton type="email" handlePreset={() => setType("email")}>
          <GoMail fontSize={30} />
        </OptionButton>
        <OptionButton type="upload file" handlePreset={() => setType("upload")}>
          <GoCloudUpload fontSize={30} />
        </OptionButton>
        <OptionButton type="vCard" handlePreset={() => setType("vCard")}>
          <GoPerson fontSize={30} />
        </OptionButton>
        <OptionButton type="wifi" handlePreset={() => setType("wifi")}>
          <HiWifi fontSize={30} />
        </OptionButton>
      </Grid>
    </section>
  );
};

export default SelectType;
