import React, { FormEvent } from "react";
import Divider from "./Divider";
import Header, { HeaderBtn } from "./Header";
import SliderGroup from "./SliderGroup";
import DropZone from "./DropZone";
import Input from "./Input";
import { GoX, GoPlus } from "react-icons/go";
import QRContext from "../../context/QRContext";

const QRLogo = () => {
  const [addImage, setAddImage] = React.useState(false);
  const [addedLogo, setAddedLogo] = React.useState(false);
  const { state, dispatch } = React.useContext(QRContext);

  function handleLogo(): void {
    setAddImage(!addImage);
    addImage === false && dispatch({ type: "REMOVE_LOGO" });
  }

  return (
    <section>
      <Header>
        <h4>Logo</h4>
        <HeaderBtn onClick={() => handleLogo()}>
          {addImage ? (
            <>
              <span>Remove</span>
              <GoX fontSize={20} />
            </>
          ) : (
            <>
              <span>Add</span>
              <GoPlus fontSize={20} />
            </>
          )}
        </HeaderBtn>
      </Header>
      <Divider />
      {addImage && (
        <section>
          <DropZone />
          {/* other settings */}
          <SliderGroup>
            <p>opacity</p>
            <Input
              type="range"
              defaultValue={state?.logoOpacity}
              min={0}
              step={0.1}
              max={1}
              onChange={(event) =>
                dispatch({
                  type: "MOD_LOGO_OPACITY",
                  payload: { logoOpacity: event.target.value },
                })
              }
            />
            <span>{state?.logoOpacity}</span>
          </SliderGroup>
          <SliderGroup>
            <p>width</p>
            <Input
              type="range"
              defaultValue={state?.logoWidth}
              min={30}
              step={5}
              max={200}
              onChange={(event) =>
                dispatch({
                  type: "MOD_LOGO_WIDTH",
                  payload: { logoWidth: event.target.value },
                })
              }
            />
            <span>{state?.logoWidth}</span>
          </SliderGroup>
          <SliderGroup>
            <p>height</p>
            <Input
              type="range"
              defaultValue={state?.logoHeight}
              min={30}
              step={5}
              max={200}
              onChange={(event) =>
                dispatch({
                  type: "MOD_LOGO_HEIGHT",
                  payload: { logoHeight: event.target.value },
                })
              }
            />
            <span>{state?.logoHeight}</span>
          </SliderGroup>
          <SliderGroup>
            <p>remove code behind logo ?</p>
            <Input
              type="checkbox"
              checked={state.removeQrCodeBehindLogo}
              onChange={(event) =>
                dispatch({
                  type: "MOD_LOGO_BG",
                  payload: { removeQrCodeBehindLogo: event.target.checked },
                })
              }
            />
          </SliderGroup>
        </section>
      )}
    </section>
  );
};

export default QRLogo;
