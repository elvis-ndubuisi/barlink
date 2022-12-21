import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "../../libraries/barcodeOptions";
import styled from "styled-components";
import SelectType from "./SelectType";
import InputGroup from "./InputGroup";
import QRLogo from "./QRLogo";
import QRPreview from "./QRPreview";
import QRAdvSettings from "./QRAdvSettings";
import EyeRadius from "./EyeRadius";
import ColorMenu from "./ColorMenu";
import DownloadSection from "./DownloadSection";

const MobileBarcodeEditor = () => {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  const TabContent = (label: string) => {
    if (label === "Details") {
      return (
        <>
          <SelectType />
          <InputGroup />
        </>
      );
    } else if (label === "Customize") {
      return (
        <>
          <QRLogo />
          <ColorMenu />
        </>
      );
    } else if (label === "Advanced") {
      return (
        <>
          <EyeRadius />
          <QRAdvSettings />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <StyledWrapper>
      <Nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </Nav>
      <Main>
        <AnimatePresence mode="wait">
          <Div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? TabContent(selectedTab.label) : "😋"}
          </Div>
        </AnimatePresence>
        <DownloadSection />
      </Main>
    </StyledWrapper>
  );
};

/* Styled Component */
const StyledWrapper = styled(motion.div)`
  width: 100%;
  max-width: 480px;
  min-height: 360px;
  border-radius: 10px;
  background: var(--clr-dark);
  overflow: hidden;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: flex;
  flex-direction: column;
  margin: 3em auto;

  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--clr-main);
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: yellow;
  }

  .add-item {
    width: 30px;
    height: 30px;
    background: yellow;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    align-self: center;
  }

  .add-item:disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }
`;

const Nav = styled(motion.nav)`
  background: var(--clr-white);
  padding: 5px 5px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid var(--clr-main);
  height: 44px;

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
  }

  ul {
    display: flex;
    width: 100%;
  }

  li {
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    padding: 10px 15px;
    position: relative;
    background: var(--clr-white);
    color: var(--clr-dark);
    cursor: pointer;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    min-width: 0;
    position: relative;
    user-select: none;
  }

  li.selected {
    background: #eee;
  }

  li button {
    width: 20px;
    height: 20px;
    border: 0;
    background: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: #000;
    margin-left: 10px;
    cursor: pointer;
    flex-shrink: 0;
  }
`;

const Main = styled(motion.main)`
  user-select: none;
  padding: 0.5em 0.3em;
`;

const Div = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1em;
  margin-bottom: 1em;
`;

export default MobileBarcodeEditor;
