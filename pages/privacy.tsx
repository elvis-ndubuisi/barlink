import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Container, {
  Heading,
  Dated,
  Paragraph,
  SubHeading,
} from "../components/Policy/Container";
import Link from "next/link";
import { pageview } from "../libraries/analytics";

export default function Privacy() {
  React.useEffect(() => {
    pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Navigation />
      <Container>
        <Wrapper>
          <Heading>Privacy Policy</Heading>
          <Dated>Effective November, 2022</Dated>

          <Paragraph>
            Barlink (&ldquo;I&ldquo;, &ldquo;we&ldquo;, or &ldquo;us&ldquo;)
            values your trust and a key part of earning your trust is being
            upfront and clear in how we gather and use your information. We
            created this Policy to inform you on what data we collect, how we
            collect your data, how we share your data, and your rights around
            the data. This Policy applies when you use our services available
            through <Link href="/">Barlink (&ldquo;Site&ldquo;)</Link>. For the
            purposes of this Policy, the Site, features, content, applications,
            and other services provided by Barlink will be referred to as the
            &ldquo;<b>Services</b>&ldquo;. This Policy works in conjunction with
            the <Link href="/terms-of-use">Site&apos;s Terms of Use</Link>. Any
            capitalized terms used, but not defined, in this Policy have the
            meanings provided in the{" "}
            <Link href="/terms-of-use">Terms of Use</Link>. If you do not agree
            with our policies and practices, please do not use our Services. By
            accessing or using our Services, you agree to this Policy.
          </Paragraph>

          <SubHeading>
            WHAT INFORMATION WE COLLECT AND HOW WE COLLECT IT
          </SubHeading>
          <Paragraph>
            We collect anonymous statistics about your visit, like which pages
            you viewed. Some 3rd parties like ad networks may know you visited
            this website. We never share your data with 3rd parties except to
            help us deliver our services. These are the key points, if you need
            detail, keep reading.
          </Paragraph>
          <Paragraph>
            <b>Google Analytics</b> : We measure visitors to our website using
            Google Analytics. This records what pages you view within our site,
            how you arrived at our site and some basic information about your
            computer. All of that information is anonymous. So we don&apos;t
            know who you are, just that somebody visited our site. The
            information we collect from analytics helps us understand what parts
            of our sites are doing well, how people arrive at our site and so
            on. Like most websites, we use this information to make our website
            better.
            <a href="https://policies.google.com/technologies/partner-sites">
              Please read here how Google uses data.
            </a>
          </Paragraph>
          <Paragraph>
            <b>Advertisement on our sites</b> : We never share any data with
            Advertisers. Third party vendors, including Google, use cookies to
            serve ads based on prior visits to our sites. Google uses a
            DoubleClick cookie that enables it and its partners to serve ads
            based on your visit to our sites and/or other sites on the Internet.
            <a href="https://adssettings.google.com/anonymous?hl=en">
              You can opt out of the use of the DoubleClick cookie for
              interest-based advertising by visiting Ads Settings
            </a>{" "}
            .Please read here
            <a href="https://policies.google.com/technologies/partner-sites">
              how Google uses data
            </a>{" "}
            . The cookies of other third-party vendors or ad networks may also
            be used to serve ads on our sites. Barlink is able to manage and
            maintain the platform through Ads displayed and clicked on via our
            website (and also donations).
          </Paragraph>

          <Paragraph>
            <b>Creating a short link with Barlink</b> : By using our Services,
            Users can create shortened URLs of websites. Users can create
            Shortened Links totally for free. When you create a Short Link using
            Barlink, Barlink collects and stores the original URL and the
            shortened URL and stores it in its database.
          </Paragraph>

          <Paragraph>
            <b>Scanning QR Codes</b> : We do not collect, transmit or store any
            data from QR Codes you scan using our Services. Scanning happens
            completely locally in your browser.
          </Paragraph>

          <Paragraph>
            <b>Generating QR Codes</b> : All QR codes you create with our
            service directly encode all content directly in the image itself. We
            do not collect, transmit or store any information you enter. The
            Code is generated directly in the browser without transmiting any
            information to a remote system (that&spos;s why it also works
            offline by the way).
          </Paragraph>

          <Paragraph>
            <b>Generating Barcodes</b> : Barcodes created with our service
            directly encode all content directly in the image itself. We do not
            collect, transmit or store any information you enter. The Code is
            generated directly in the browser without transmiting any
            information to a remote system (that&spos;s why it also works
            offline by the way).
          </Paragraph>

          <SubHeading>Children&apos;s Privacy</SubHeading>
          <Paragraph>
            Our Services are not intended for and may not be used by children
            under the age of 14. We do not knowingly collect information from
            children under the age of 14 and we do not target our Services to
            children under the age of 14.
          </Paragraph>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}
