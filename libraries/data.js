import { BsGear } from "react-icons/bs";
import { GoThumbsup, GoLinkExternal, GoShield } from "react-icons/go";

export let profile_links = {
  youtube: "https://www.youtube.com/@trickthevick",
  twitter: "https://www.twitter.com/trickthevick",
  portfolio: "https://elvis.js.cool",
  instagram: "",
  linkedin: "https://www.linkedin.com/in/elvisndubuisi/",
  productHunt: 'https://www.producthunt.com/@elvis_ndubuisi'
};

export let generate_qrcode = [
  {
    id: 1,
    title: "Select QR code type",
    desc: "What are your generating the QR code for? Some types provides additional fields which are neccessary.",
  },
  {
    id: 2,
    title: "Fill in the details",
    desc: "Fill in the details provided in &#8216;Enter details&#8216; section. You can always switch back to a different type if nedded.",
  },
  {
    id: 3,
    title: "Customise QR code",
    desc: "Barlink gives you total control with easy customisation options. Tweak your generated QR code to you preferece.",
  },
  {
    id: 4,
    title: "Download QR Code",
    desc: "QR lcode preview will always update in real-time. Once done, download your QR code in any selected format.",
  },
];

export let shortenUrl = [
  {
    id: <GoThumbsup size={34} />,
    title: "Simple",
    desc: "Generate your URLs easy and fast. Enter your long URLs and get your shortened link.",
  },
  {
    id: <GoLinkExternal size={34} />,
    title: "Shortened",
    desc: "Reduce long URLs of any length to short links. Remember easily or re-genrate same link.",
  },
  {
    id: <BsGear size={34} />,
    title: "Customise",
    desc: "Want a specific name your link insted? Customise your URl the way you want.",
  },
  {
    id: <GoShield size={34} />,
    title: "Secured",
    desc: "Barlink service have HTTPS protocol and data encryption. Short URLs are fase and secured.",
  },
];
