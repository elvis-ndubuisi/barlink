import React from "react";
import Header, { HeaderBtn } from "./Header";
import Divider from "./Divider";
import OptionButton from "./OptionButton";
import Grid from "./Grid";
import { BsGrid } from "react-icons/bs";
import { MdClose, MdQrCode2, MdQrCode } from "react-icons/md";
import { HiQrCode, HiOutlineQrCode } from "react-icons/hi2";
import QRContext from "../../context/QRContext";

const EyeRadius = () => {
  const { state, dispatch } = React.useContext(QRContext);
  return (
    <section>
      <Header>
        <h4>Eye Radius</h4>
        <HeaderBtn>
          <span>Advanced</span>
          <BsGrid fontSize={20}>icon</BsGrid>
        </HeaderBtn>
      </Header>
      <Divider />
      <Grid>
        <OptionButton handlePreset={() => dispatch({ type: "PRESET_00" })}>
          <MdClose fontSize={30} />
        </OptionButton>
        <OptionButton>
          <HiQrCode fontSize={30} />
        </OptionButton>
        <OptionButton>
          <MdQrCode2 fontSize={30} />
        </OptionButton>
        <OptionButton>
          <HiOutlineQrCode fontSize={30} />
        </OptionButton>
        <OptionButton>
          <MdQrCode fontSize={30} />
        </OptionButton>
      </Grid>
    </section>
  );
};

export default EyeRadius;
