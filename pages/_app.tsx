import type { AppProps, NextWebVitalsMetric } from "next/app";
import GlobalStyle from "../components/GlobalStyle";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import React from "react";
import { closeDb } from "../libraries/mongodb";
import { GoogleAnalytics, event } from "nextjs-google-analytics";

export function reportWebVitals({ id, name, label, value }:NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default function App({ Component, pageProps }: AppProps) {
  // React.useEffect(() => {
  //   // Initialize the Google Analytics library

  //   // Send a pageview event to Google Analytics
  //   return () => {
  //     // Close the connection to the MongoDB database when the component unmounts
  //     // closeDb();
  //   };
  // }, []);

  return (
    <>
      <GoogleAnalytics trackPageViews />
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
