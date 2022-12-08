import styled from "styled-components";
import Buttons from "./Buttons";
import OptionButton, { ColorSwatch } from "./OptionButton";
import {
  GoChevronDown,
  GoChevronLeft,
  GoChevronRight,
  GoCloudUpload,
  GoGlobe,
  GoMail,
  GoPlus,
  GoTextSize,
} from "react-icons/go";
import { BiReset } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { HiQrCode, HiOutlineQrCode, HiSwatch } from "react-icons/hi2";
import { MdClose, MdQrCode, MdQrCode2 } from "react-icons/md";
import { useState, useRef } from "react";

interface iColorSwatch {
  swatchColor: string;
  isCustomize?: boolean;
}

interface iGrid {
  colorGrid?: boolean;
}

const BarcodeEditor = () => {
  const browseFile = useRef<HTMLInputElement>(null);
  const [qrType, setQrType] = useState("website");
  const [active, setActive] = useState(false);

  function fileDrayOver(): void {}

  function fileDragLeave(): void {}

  function fileDragDrop(): void {}

  function advancedSetting(): void {
    setActive(!active);
  }

  return (
    <StyledWrapper>
      <Container>
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
            <OptionButton type="email">
              <GoCloudUpload fontSize={30} />
            </OptionButton>
          </Grid>
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
            <span>JPEG</span>
            <span>SVG</span>
            <span>Png</span>
          </span>
        </DownloadSection>
      </Container>

      <Container>
        <section>
          <Header>Enter details ({qrType})</Header>
          <Divider />
          <form>
            <Input type="text" placeholder="Enter your url" />
          </form>
          <div>preview</div>
        </section>
        <section>
          {/* <Preview>
            <h3>Live Preview</h3>
            <div></div>
          </Preview> */}
        </section>
        <section>
          <Header
            onClick={() => setActive(!active)}
            style={{ cursor: "pointer" }}
          >
            <span>Advanced</span>
            {active ? (
              <GoChevronDown size={20} />
            ) : (
              <GoChevronRight size={20} />
            )}
          </Header>
          {active && (
            <>
              <section>
                <SliderGroup>
                  <p>styled</p>
                </SliderGroup>
                <SliderGroup>
                  <p>error correction</p>
                </SliderGroup>
                <SliderGroup>
                  <p>enable CORs</p>
                </SliderGroup>
                <SliderGroup>
                  <p>size</p>
                  <Input type="range" />
                  <span>200</span>
                </SliderGroup>
                <SliderGroup>
                  <p>quiet zone</p>
                  <Input type="range" />
                  <span>200</span>
                </SliderGroup>
              </section>
            </>
          )}
          <form></form>
        </section>
      </Container>
      <Container>
        {/* Pattern menu */}
        <section>
          <Header>
            <h4>Pattern</h4>
            <HeaderBtn>
              <span>Advanced</span>
              <BsGrid fontSize={20}>icon</BsGrid>
            </HeaderBtn>
          </Header>
          <Divider />
          <Grid>
            <OptionButton>
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
            <HeaderBtn>
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
        {/* Logo menu */}
        <section>
          <Header>
            <h4>Logo</h4>
            <HeaderBtn>
              <span>Add</span>
              <GoPlus fontSize={20} />
            </HeaderBtn>
          </Header>
          <Divider />
          <section>
            <DropZone
              onDragOver={() => console.log(this)}
              onDragLeave={() => console.log(this)}
              onDrag={() => console.log(this)}
            >
              <header>Drop file or</header>
              <button onClick={() => browseFile.current?.click()}>
                Browse File
              </button>
              <input type="file" hidden ref={browseFile} />
            </DropZone>
            {/* other settings */}
            <SliderGroup>
              <p>opacity</p>
              <Input type="range" />
              <span>200</span>
            </SliderGroup>
            <SliderGroup>
              <p>width</p>
              <Input type="range" />
              <span>200</span>
            </SliderGroup>
            <SliderGroup>
              <p>height</p>
              <Input type="range" />
              <span>200</span>
            </SliderGroup>
            <SliderGroup>
              <p>remove code behind logo ?</p>
              <span>yes</span>
            </SliderGroup>
          </section>
        </section>
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  border-radius: var(--url-radius);
  max-width: 966px;
  min-height: 600px;
  margin: 3em auto;
  background-color: var(--clr-dark);
  color: var(--clr-white);
  padding: 1em;
  display: grid;
  grid-template-columns: minmax(200px, 250px) 1fr minmax(200px, 250px);
  gap: 0.8em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.875em;
  min-height: inherit;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--fw-smbold);
`;

const HeaderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: var(--fw-regular);
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;

  :hover,
  :focus {
    color: var(--clr-main);
  }
`;

const Divider = styled.div`
  height: 2px;
  background-color: var(--clr-gray);
  width: 100%;
  margin: 0.3em 0 1em;
`;

const DownloadSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.875em;
  align-items: stretch;
`;

const FileName = styled.div`
  border: solid 2px var(--clr-white);
  outline: 0;
  padding: 5px 0.8125em;
  border-radius: 5px;

  :focus {
    border-color: var(--clr-main);
  }
`;

const Preview = styled.div`
  border-radius: 5px;
  max-width: 80%;
  aspect-ratio: 1;
  background-color: var(--clr-white);
  font-weight: var(--fw-exbold);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875em;
  margin: auto;

  h3 {
    font-size: 1.1rem;
  }

  > div {
    width; 100%;
    height: inherit;
  }
`;

const Grid = styled.div<iGrid>`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: ${(props) =>
    props.colorGrid
      ? "repeat(5, 1fr)"
      : "repeat(auto-fill, minmax(auto, 50px))"};
  gap: 8px;
`;

const Input = styled.input`
  font-size: 0.875rem;
  background-color: var(--clr-dark-gray);
  color: var(--clr-white);
  outline: 0;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  padding: 0.875em;

  :placeholder {
    text-transform: uppercase;
    font-weight: var(--fw-smbold);
  }

  :focus,
  :hover {
    border-color: var(--clr-main);
  }
`;

const DropZone = styled.div`
  width: inherit;
  font-size: 0.8125rem;
  border: 2px dashed var(--clr-main);
  padding: 1em 0.5em;
  background-color: var(--clr-gray);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .active {
    border: 2px solid #fff;
  }
  button {
    background-color: transparent;
    color: var(--clr-main);
    outline: 0;
    border: none;
  }
`;

const Color = styled.div<iColorSwatch>`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${(props) => props.swatchColor};
`;

const SliderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  margin: 0.5em 0;

  span {
    font-size: 1rem;
    color: var(--clr-white);
    padding: 0.3em 0.5em;
    background-color: var(--clr-main);
    border-radius: 5px;
  }

  input[type="range"] {
  }
`;

export default BarcodeEditor;
