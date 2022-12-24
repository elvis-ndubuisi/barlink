import React from "react";
import Header, { HeaderBtn } from "./Header";
import Divider from "./Divider";
import OptionButton, { ColorSwatch } from "./OptionButton";
import Grid from "./Grid";
import { BsGrid } from "react-icons/bs";
import { MdClose, MdQrCode2, MdQrCode } from "react-icons/md";
import { HiQrCode, HiOutlineQrCode, HiXMark, HiSwatch } from "react-icons/hi2";
import QRContext from "../../context/QRContext";
import ColorIcon from "./ColorIcon";
import Input from "./Input";

const EyeRadius = () => {
  const { state, dispatch } = React.useContext(QRContext);
  const EyeColor = React.useRef<HTMLInputElement>(null);

  return (
    <section>
      <Header>
        <h4>Eye Styles</h4>
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
        <OptionButton handlePreset={() => dispatch({ type: "PRESET_01" })}>
          <HiQrCode fontSize={30} />
        </OptionButton>
        <OptionButton handlePreset={() => dispatch({ type: "PRESET_02" })}>
          <MdQrCode2 fontSize={30} />
        </OptionButton>
        <OptionButton handlePreset={() => dispatch({ type: "PRESET_03" })}>
          <HiOutlineQrCode fontSize={30} />
        </OptionButton>
        <OptionButton handlePreset={() => dispatch({ type: "PRESET_04" })}>
          <MdQrCode fontSize={30} />
        </OptionButton>
        <OptionButton handlePreset={() => dispatch({ type: "PRESET_05" })}>
          <MdQrCode fontSize={30} />
        </OptionButton>
      </Grid>
      <p style={{ marginBottom: "0.53em", marginTop: "0.53em" }}>Eye Color</p>
      <Grid colorGrid={true}>
        <ColorSwatch onClick={() => dispatch({ type: "RESET_EYE_COLOR" })}>
          <HiXMark size={24} />
        </ColorSwatch>
        <ColorSwatch
          onClick={() =>
            dispatch({
              type: "MOD_EYE_COLOR",
              payload: { eyeColor: "#ff7700" },
            })
          }
        >
          <ColorIcon swatchColor="#ff7700" />
        </ColorSwatch>
        <ColorSwatch
          onClick={() =>
            dispatch({
              type: "MOD_EYE_COLOR",
              payload: { eyeColor: "#34B7F1" },
            })
          }
        >
          <ColorIcon swatchColor="#34B7F1" />
        </ColorSwatch>
        <ColorSwatch
          onClick={() =>
            dispatch({
              type: "MOD_EYE_COLOR",
              payload: { eyeColor: "#FF0000" },
            })
          }
        >
          <ColorIcon swatchColor="#FF0000" />
        </ColorSwatch>
        <ColorSwatch
          onClick={() =>
            dispatch({
              type: "MOD_EYE_COLOR",
              payload: { eyeColor: "yellow" },
            })
          }
        >
          <ColorIcon swatchColor="yellow" />
        </ColorSwatch>
        <ColorSwatch onClick={() => EyeColor.current?.click()}>
          <Input
            type="color"
            hidden
            ref={EyeColor}
            onChange={(event) =>
              dispatch({
                type: "MOD_EYE_COLOR",
                payload: { eyeColor: event.target.value },
              })
            }
          />
          <HiSwatch size={24} />
        </ColorSwatch>
      </Grid>
    </section>
  );
};

export default EyeRadius;
