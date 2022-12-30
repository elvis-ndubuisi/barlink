import ReactGA from "react-ga";

// Initialize Google Analytics
export const initGA = (trackingId: string) => {
  ReactGA.initialize(trackingId);
};

// Track pageview events
export const pageview = (path: string) => {
  ReactGA.pageview(path);
};

// Track custom events
export const event = (event: {
  category: string;
  action: string;
  label?: string;
  value?: number;
}) => {
  ReactGA.event(event);
};
