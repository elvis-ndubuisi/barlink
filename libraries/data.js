import { BsGear } from "react-icons/bs";
import { GoThumbsup, GoLinkExternal, GoShield } from "react-icons/go";

export let profile_links = {
  youtube: "https://www.youtube.com/@trickthevick",
  twitter: "https://www.twitter.com/trickthevick",
  portfolio: "https://elvis.js.cool",
  instagram: "",
  linkedin: "https://www.linkedin.com/in/elvisndubuisi/",
  productHunt: "https://www.producthunt.com/@elvis_ndubuisi",
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
    desc: "Want a specific name for your link insted? Customise your URl the way you want.",
  },
  {
    id: <GoShield size={34} />,
    title: "Secured",
    desc: "Barlink service have HTTPS protocol and data encryption. Short URLs are fase and secured.",
  },
];

export let faqHome = [
  {
    question: "What's Barlink?",
    answer:
      "Barlink is a free multi-purpose tool. Barlinks provides URL shortening and unshortening services, barcode and QRcode generation services.",
  },
  {
    question: "Is Barlink Secured?",
    answer:
      "Barlink takes security and privacy seriously. We take security measures to ensure that your shortened links always points to the destination set by you. Although, Barlink doesn't provide any means of modifying your shortened links afterward but your shortened links never changes and can be deleted upon request.\nDetails provided when generating QR code are never sent to our server. Hence, all information is discarded when - you exit or refresh the page.",
  },
  {
    question: "What info do we track?",
    answer:
      "Barlink takes security and privacy seriously. We take security measures to ensure that your shortened links always points to the destination set by you. Although, Barlink doesn't provide any means of modifying your shortened links afterward but your shortened links never changes and can be deleted upon request.",
  },
  {
    question: "What is a URL Shortener",
    answer:
      "URL shorteners, also known as link shorteners, may seem like simple tools, but they can have a dramatic impact on your marketing efforts.\nThe link shortener turns long URLs into short, readable links. When users click the shortened version, they are automatically redirected to the destination URL.\nThink of short URLs as more descriptive and easy-to-remember nicknames for long website addresses. For example, you can use short URLs like barlink/ShortenedBit to help users know where the link is before clicking it.\nIf you are providing content to the online world, you need a URL shortening service.\nMake your URL stand out with the easy-to-use, free link shortener above.",
  },
  {
    question: "Benefits of Shortened URLs",
    answer:
      "How many of us remember long web addresses, especially those with lots of letters and symbols? Using short URLs can make links easier to remember. Not only does it make it easier for people to remember your link and share it with others, it can also dramatically improve traffic to your content. Whether you interact with your customers offline or online, you can easily incorporate them into your promotional materials.",
  },
  {
    question: "What's a QR Code",
    answer:
      "A quick response or QR is a type of barcode that can store a variety of information. The obvious difference between QR codes and barcodes is their appearance. QR codes are always square and contain smaller, evenly spaced blocks. Barcodes, on the other hand, have vertical bars of varying thickness, often numbered consecutively.",
  },
  {
    question: "What can you do with barcodes",
    answer:
      "Due to its versatility, QR codes can be programmed to do many different things. It can be split into two forms: dynamic and static. Dynamic QR Codes are useful in marketing strategies for businesses and non-profits due to their advantages. Barlink offers this features for FREE.The dynamic QR code solution is editable i.e If you make a mistake and don't realize it until the QR code is printed, you can always regenerate another barcode with Barlink.",
  },
];

export let faqShorten = [
  {
    question: "How long does a Shortened link last?",
    answer:
      "Your shortened links created using Barlink never expires. It stays as long as Barlink lives.\nAlthough, Barlinks doesn't provide any means of managing links YET, you can always contact Barlink to remove your links.",
  },
  {
    question: "Can i customize my links?",
    answer:
      "Yes. You can use the customization button to set a custom link name before generating a short link.",
  },
  {
    question: "Can i customize a link after generating it?",
    answer:
      "No. Currently, Barlink being a free tool doesn't support link management YET.\nLinks are only customized before generating a shortened version.",
  },
  {
    question: "Is Barlink URL shortening service secured?",
    answer:
      "Barlink takes security and privacy seriously. We take security measures to ensure that your shortened links always points to the destination set by you. Although, Barlink doesn't provide any means of modifying your shortened links afterward but your shortened links never changes and can be deleted upon request.",
  },
  {
    question: "Can i delete my shortened links?",
    answer:
      "Yes. Links can always be deleted upon request. Please reach out via email or social media handles.",
  },
];

export let faqQrcode = [
  {
    question: "Can I use the QR code for commercial purpose?",
    answer:
      "Yes, all QR codes generated with Barlink are free and can be used for whatever you want.",
  },
  {
    question: "Do Barlink save any of my data?",
    answer:
      "No. Barlink doesn't send any of your data to its server. All input generates your QR code and gets lost when you close your tab or refresh the page.",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];
