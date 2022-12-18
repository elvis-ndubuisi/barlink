import React from "react";
import Divider from "./Divider";
import Header from "./Header";
import Grid from "./Grid";
import OptionButton from "./OptionButton";
import { HiWifi } from "react-icons/hi2";
import {
  GoGlobe,
  GoTextSize,
  GoMail,
  GoCloudUpload,
  GoPerson,
} from "react-icons/go";

const SelectType = () => {
  return (
    <section>
      <Header>Select Type</Header>
      <Divider />
      <Grid>
        <OptionButton type="website">
          <GoGlobe fontSize={30} />
        </OptionButton>
        <OptionButton type="text">
          <GoTextSize fontSize={30} />
        </OptionButton>
        <OptionButton type="email">
          <GoMail fontSize={30} />
        </OptionButton>
        <OptionButton type="upload file">
          <GoCloudUpload fontSize={30} />
        </OptionButton>
        <OptionButton type="vCard">
          <GoPerson fontSize={30} />
        </OptionButton>
        <OptionButton type="wifi">
          <HiWifi fontSize={30} />
        </OptionButton>
      </Grid>
    </section>
  );
};

export default SelectType;
