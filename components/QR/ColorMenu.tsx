import React from "react";
import Header, { HeaderBtn } from "./Header";
import Divider from "./Divider";
import Grid from "./Grid";
import { HiChevronDown, HiChevronUp, HiSwatch, HiXMark } from "react-icons/hi2";
import ColorIcon from "./ColorIcon";
import { ColorSwatch } from "./OptionButton";
import QRContext from "../../context/QRContext";
import Input from "./Input";

const ColorMenu = () => {
  const { state, dispatch } = React.useContext(QRContext);
  const [show, setShow] = React.useState<boolean>(false);
  const BgColor = React.useRef<HTMLInputElement>(null);
  const FgColor = React.useRef<HTMLInputElement>(null);
  const EyeColor = React.useRef<HTMLInputElement>(null);
  return (
    <section>
      <Header>
        <h4>Color</h4>
        <HeaderBtn onClick={() => setShow(!show)}>
          {show ? (
            <HiChevronUp fontSize={24} />
          ) : (
            <HiChevronDown fontSize={24} />
          )}
        </HeaderBtn>
      </Header>
      <Divider />
      {show && (
        <>
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
                    payload: { bgColor: "#ff7700" },
                  })
                }
              >
                <ColorIcon swatchColor="#ff7700" />
              </ColorSwatch>
              <ColorSwatch
                onClick={() =>
                  dispatch({
                    type: "MOD_BG_COLOR",
                    payload: { bgColor: "#FF0000" },
                  })
                }
              >
                <ColorIcon swatchColor="#FF0000" />
              </ColorSwatch>
              <ColorSwatch
                onClick={() =>
                  dispatch({
                    type: "MOD_BG_COLOR",
                    payload: { bgColor: "yellow" },
                  })
                }
              >
                <ColorIcon swatchColor="yellow" />
              </ColorSwatch>
              <ColorSwatch
                onClick={() =>
                  dispatch({
                    type: "MOD_BG_COLOR",
                    payload: { bgColor: "green" },
                  })
                }
              >
                <ColorIcon swatchColor="green" />
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
                    payload: { fgColor: "#FF0000" },
                  })
                }
              >
                <ColorIcon swatchColor="#FF0000" />
              </ColorSwatch>
              <ColorSwatch
                onClick={() =>
                  dispatch({
                    type: "MOD_FG_COLOR",
                    payload: { fgColor: "#3b5998" },
                  })
                }
              >
                <ColorIcon swatchColor="#3b5998" />
              </ColorSwatch>
              <ColorSwatch
                onClick={() =>
                  dispatch({
                    type: "MOD_FG_COLOR",
                    payload: { fgColor: "#34B7F1" },
                  })
                }
              >
                <ColorIcon swatchColor="#34B7F1" />
              </ColorSwatch>
              <ColorSwatch
                onClick={() =>
                  dispatch({
                    type: "MOD_FG_COLOR",
                    payload: { fgColor: "#8a3ab9" },
                  })
                }
              >
                <ColorIcon swatchColor="#8a3ab9" />
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
          </section>
        </>
      )}
    </section>
  );
};

export default ColorMenu;
