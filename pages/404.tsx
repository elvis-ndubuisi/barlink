import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Wrapper from "../components/Wrapper";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <Wrapper>
        <section
          style={{
            height: "75vh",
            display: "grid",
            placeItems: "center",
            placeContent: "center",
          }}
        >
          <Image
            src="/assets/error-404.gif"
            height={200}
            width={200}
            alt="error 404"
          />
          <h3>Sorry! Request Page Not Found</h3>
          <Link href="/">Return to Home</Link>
        </section>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default NotFound;
