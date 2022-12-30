import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Wrapper from "../components/Wrapper";
import Link from "next/link";
import Container, {
  Heading,
  Dated,
  Paragraph,
  SubHeading,
} from "../components/Policy/Container";

export default function Terms() {
  return (
    <>
      <Navigation />
      <Container>
        <Wrapper>
          <Heading>Terms of Use</Heading>
          <Dated>Effective December, 2022</Dated>

          <Paragraph>
            Thank you for using Barlink. These terms of service (Terms) cover
            your use and access of our website, our mobile app and/or related
            software (Services). By using our Services you agree these Terms and
            to review our <Link href="/privacy">Privacy Policy</Link>. If you do
            not agree to these Terms or our Privacy Policy, you should not use
            our Services.
          </Paragraph>

          <SubHeading>Software</SubHeading>
          <Paragraph>
            The Barlink services may include web-based or downloadable mobile
            software, which may update automatically on your device to newer
            versions. We grant you a worldwide, non-exclusive and
            non-transferable to use the software solely to use the services.
            Components of the software may be offered under an open source
            license, in this case we will make that license available to you.
            Provisions of the open source license may expressly override some of
            these Terms.
          </Paragraph>
          <SubHeading>Changes to Services</SubHeading>
          <Paragraph>
            We may change the features of our Services, withdraw or add new
            features form time to time.
          </Paragraph>
          <SubHeading>Pricing</SubHeading>
          <Paragraph>
            The QR Code, Barcode generation and link shortening services are
            completely free. Price tags maybe added to later features
          </Paragraph>
          <SubHeading>Limitation of Liability</SubHeading>
          <Paragraph>
            To the fullest extend permitted by law, in no event shall Barlink be
            liable for any damages or loss of data, business, profits, computer
            hardware or software.
          </Paragraph>
          <SubHeading>Warranties</SubHeading>
          <Paragraph>
            We strive to provide good Services and hope you enjoy using them.
            But there are things we cannot guarantee. We provide our Services
            &ldquo;As is&ldquo;. To the fullest extend permitted by law, we make
            no warranties either implied or expressed about the Services. We do
            not make any promise about the specific functions of the services,
            their reliability or availability.
          </Paragraph>
          <SubHeading>Changes of Terms</SubHeading>
          <Paragraph>
            We reserve the rights to change these Terms at any time. We will
            always post the most current version on our website. By continuing
            to use the Services after the changes become effective, you agree to
            the revised Terms.
          </Paragraph>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}
