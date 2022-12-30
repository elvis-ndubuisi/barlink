import type { AppProps } from "next/app";
import GlobalStyle from "../components/GlobalStyle";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import React from "react";
import { closeDb } from "../libraries/mongodb";
import { initGA, pageview } from "../libraries/analytics";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Initialize the Google Analytics library
    initGA("G-9MQ25W06EQ");
    // Send a pageview event to Google Analytics
    pageview(window.location.pathname + window.location.search);
    return () => {
      // Close the connection to the MongoDB database when the component unmounts
      // closeDb();
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer
        className="impct-toast"
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
}
