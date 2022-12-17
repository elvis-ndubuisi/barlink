import React from "react";
import Buttons from "./Buttons";
import OptionButton, { ColorSwatch } from "./OptionButton";
import { BiReset } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { HiQrCode, HiOutlineQrCode, HiSwatch, HiWifi } from "react-icons/hi2";
import { MdClose, MdQrCode, MdQrCode2 } from "react-icons/md";
import DropZone from "./DropZone";
import QRPreview from "./QRPreview";
import {
  GoCloudUpload,
  GoGlobe,
  GoMail,
  GoPlus,
  GoDash,
  GoTextSize,
  GoX,
  GoPlusSmall,
  GoPerson,
} from "react-icons/go";
import {
  StyledWrapper,
  Container,
  Header,
  HeaderBtn,
  Divider,
  DownloadSection,
  DownloadFormat,
  FileName,
  Color,
  Grid,
  Input,
  SliderGroup,
} from "./StyledEditor";
import QRContext from "../context/QRContext";

const QRCodeEditor = () => {
  const [qrType, setQrType] = React.useState("website");
  const [active, setActive] = React.useState(false);
  const [addImage, setAddImage] = React.useState(false);

  const { state, dispatch } = React.useContext(QRContext);

  function advancedSetting(): void {
    setActive(!active);
  }

  function handleLogo(): void {
    setAddImage(!addImage);
  }

  return (
    <StyledWrapper>
      <Container noJustify={true}>
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
        {/* Logo menu */}
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
                  // defaultValue={state?.removeQrCodeBehindLogo}
                />
              </SliderGroup>
            </section>
          )}
        </section>
      </Container>

      <Container>
        <section>
          <Header>Enter details ({qrType})</Header>
          <Divider />
          <form>
            <Input type="text" placeholder="Enter your url" />
          </form>
        </section>
        <section>
          <QRPreview />
        </section>
        <section>
          <Header
            onClick={() => setActive(!active)}
            style={{ cursor: "pointer" }}
          >
            <span>Advanced</span>
            {active ? <GoDash size={20} /> : <GoPlusSmall size={20} />}
          </Header>
          {active && (
            <>
              <section>
                <SliderGroup>
                  <p>style</p>
                  <select
                    value="checked value select"
                    onChange={(event) => console.log(event.target.value)}
                  >
                    <option value="option 1">Option 1</option>
                    <option value="option 2" selected>
                      Option 2
                    </option>
                  </select>
                </SliderGroup>
                <SliderGroup>
                  <p>error correction</p>
                </SliderGroup>
                <SliderGroup>
                  <label htmlFor="">enable CORS</label>
                  <Input
                    type="checkbox"
                    checked={true}
                    onChange={(event) => console.log(event.target.value)}
                  />
                </SliderGroup>
                <SliderGroup>
                  <p>size</p>
                  <Input
                    type="range"
                    defaultValue={state?.size}
                    min={100}
                    step={5}
                    max={250}
                    onChange={(event) =>
                      dispatch({
                        type: "MOD_SIZE",
                        payload: { size: event.target.value },
                      })
                    }
                  />
                  <span>{state?.size}</span>
                </SliderGroup>
                <SliderGroup>
                  <p>quiet zone</p>
                  <Input
                    type="range"
                    defaultValue={state?.quietZone}
                    min={5}
                    step={1}
                    max={30}
                    onChange={(event) =>
                      dispatch({
                        type: "MOD_QUIET_ZONE",
                        payload: { quietZone: event.target.value },
                      })
                    }
                  />
                  <span>{state?.quietZone}</span>
                </SliderGroup>
              </section>
            </>
          )}
          <form></form>
        </section>
      </Container>

      <Container noJustify={true}>
        {/* Pattern menu */}
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
        {/* Colors meny */}
        <section>
          <Header>
            <h4>Colors</h4>
            <HeaderBtn onClick={() => dispatch({ type: "RESET_FG_COLOR" })}>
              <span>Reset</span>
              <BiReset fontSize={20} />
            </HeaderBtn>
          </Header>
          <Divider />
          <section>
            <p style={{ marginBottom: "0.53em" }}>Background</p>
            <Grid colorGrid={true}>
              <ColorSwatch>
                <Color swatchColor="greenyellow" />
              </ColorSwatch>
              <ColorSwatch>
                <Color swatchColor="yellow" />
              </ColorSwatch>
              <ColorSwatch>
                <Color swatchColor="pink" />
              </ColorSwatch>
              <ColorSwatch>
                <Color swatchColor="orange" />
              </ColorSwatch>
              <ColorSwatch>
                <HiSwatch size={24} />
              </ColorSwatch>
            </Grid>
            <p style={{ marginBottom: "0.53em", marginTop: "0.53em" }}>
              Foreground
            </p>
            <Grid colorGrid={true}>
              <ColorSwatch>
                <Color swatchColor="greenyellow" />
              </ColorSwatch>
              <ColorSwatch>
                <Color swatchColor="yellow" />
              </ColorSwatch>
              <ColorSwatch>
                <Color swatchColor="pink" />
              </ColorSwatch>
              <ColorSwatch>
                <Color swatchColor="orange" />
              </ColorSwatch>
              <ColorSwatch>
                <HiSwatch size={24} />
              </ColorSwatch>
            </Grid>
          </section>
        </section>
        <DownloadSection>
          <FileName contentEditable={false}>name_of_file.jpg</FileName>
          <Buttons>Download SVG</Buttons>
          <span
            style={{
              display: "inline-flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <DownloadFormat selected={true}>jpeg</DownloadFormat>
            <DownloadFormat selected={false}>svg</DownloadFormat>
            <DownloadFormat selected={false}>utf-8</DownloadFormat>
          </span>
        </DownloadSection>
      </Container>
    </StyledWrapper>
  );
};

export default QRCodeEditor;

// const target = event.target;
// const value = target.type === "checkbox" ? target.checked : target.value;
// const name = target.name;
