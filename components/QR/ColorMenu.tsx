import React from "react";
import Header, { HeaderBtn } from "./Header";
import Divider from "./Divider";
import Grid from "./Grid";
import { BiReset } from "react-icons/bi";
import { HiCircleStack, HiSwatch, HiXMark } from "react-icons/hi2";
import ColorIcon from "./ColorIcon";
import { ColorSwatch } from "./OptionButton";
import QRContext from "../../context/QRContext";
import Input from "./Input";

const ColorMenu = () => {
  const { state, dispatch } = React.useContext(QRContext);
  const BgColor = React.useRef<HTMLInputElement>(null);
  const FgColor = React.useRef<HTMLInputElement>(null);
  const EyeColor = React.useRef<HTMLInputElement>(null);
  return (
    <section>
      <Header>
        <h4>Color</h4>
        <HeaderBtn onClick={() => dispatch({ type: "RESET_FG_Color" })}>
          <span>Reset</span>
          <BiReset fontSize={20} />
        </HeaderBtn>
      </Header>
      <Divider />
      <section>
        <p style={{ marginBottom: "0.53em" }}>Background</p>
        <Grid colorGrid={true}>
          <ColorSwatch onClick={() => dispatch({ type: "RESET_BG_COLOR" })}>
            <HiXMark size={24} />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_BG_COLOR",
                payload: { bgColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="greenyellow" />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_BG_COLOR",
                payload: { bgColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="yellow" />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_BG_COLOR",
                payload: { bgColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="pink" />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_BG_COLOR",
                payload: { bgColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="orange" />
          </ColorSwatch>
          <ColorSwatch onClick={() => BgColor.current?.click()}>
            <Input
              type="color"
              hidden
              ref={BgColor}
              onChange={(event) =>
                dispatch({
                  type: "MOD_BG_COLOR",
                  payload: { bgColor: event.target.value },
                })
              }
            />
            <HiSwatch size={24} />
          </ColorSwatch>
        </Grid>
        <p style={{ marginBottom: "0.53em", marginTop: "0.53em" }}>
          Foreground
        </p>
        <Grid colorGrid={true}>
          <ColorSwatch onClick={() => dispatch({ type: "RESET_FG_COLOR" })}>
            <HiXMark size={24} />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_FG_COLOR",
                payload: { fgColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="greenyellow" />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_FG_COLOR",
                payload: { fgColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="yellow" />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_FG_COLOR",
                payload: { fgColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="pink" />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_FG_COLOR",
                payload: { fgColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="orange" />
          </ColorSwatch>
          <ColorSwatch onClick={() => FgColor.current?.click()}>
            <Input
              type="color"
              hidden
              ref={FgColor}
              onChange={(event) =>
                dispatch({
                  type: "MOD_FG_COLOR",
                  payload: { fgColor: event.target.value },
                })
              }
            />
            <HiSwatch size={24} />
          </ColorSwatch>
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
                payload: { eyeColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="greenyellow" />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_EYE_COLOR",
                payload: { eyeColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="yellow" />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_EYE_COLOR",
                payload: { eyeColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="pink" />
          </ColorSwatch>
          <ColorSwatch
            onClick={() =>
              dispatch({
                type: "MOD_EYE_COLOR",
                payload: { eyeColor: "greenyellow" },
              })
            }
          >
            <ColorIcon swatchColor="orange" />
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
    </section>
  );
};

export default ColorMenu;
