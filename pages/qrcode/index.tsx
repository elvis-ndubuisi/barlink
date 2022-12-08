import BarcodeEditor from "../../components/BarcodeEditor";
import Footer from "../../components/Footer";
import Head from "next/head";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navigation";
import StepCard from "../../components/StepCard";
import styled from "styled-components";
import LandingTitle from "../../components/LandingTitle";
import LandiingCaption from "../../components/LandiingCaption";
import Wrapper from "../../components/Wrapper";
import FaqWrapper from "../../components/FaqWrapper";
import StepWrapper from "../../components/StepWrapper";
import { Parag } from "../shortenurl";
import { generate_qrcode } from "../../libraries/data.js";

const Landing = styled.section`
  min-height: calc(var(--landing-height) / 2);
  // background-color: var(--clr-white);
  // color: var(--clr-dark);

  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1.5em;
    min-height: inherit;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Barlink - Free URL shortener | Barcode and QR code generator
        </title>
      </Head>
      <Navbar />
      <>
        <Landing>
          <Wrapper>
            <LandingTitle>
              Generate <span>Dynamic QR Codes</span> in Seconds
            </LandingTitle>
            <LandiingCaption>
              Customize QR code looks, add your company or brand logo, change
              colors, download in different printable formats
            </LandiingCaption>
          </Wrapper>
        </Landing>

        <Wrapper>
          <BarcodeEditor />
        </Wrapper>

        <section style={{ marginBottom: "2em" }}>
          <Wrapper>
            <Heading style={{ textAlign: "center" }}>
              How Do I Generate A Free QR Code
            </Heading>
            <Parag>
              Generating your free QR codes is as easy as following these steps
            </Parag>
            <StepWrapper>
              {generate_qrcode.map((step, idx) => (
                <StepCard key={idx} lst={step.id} title={step.title}>
                  {step.desc}
                </StepCard>
              ))}
            </StepWrapper>
          </Wrapper>
        </section>
        <FaqWrapper />
      </>
      <Footer />
    </>
  );
}
