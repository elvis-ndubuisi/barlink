import React from "react";
import Divider from "./Divider";
import Header from "./Header";
import Grid from "./Grid";
import OptionButton from "./OptionButton";
import QTypeContext, { qrType } from "../../context/QTypeContext";
import { GoTypography, GoMail } from "react-icons/go";
import {
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaTwitter,
  FaIdCard,
  FaWifi,
  FaGlobe,
  FaSms,
  FaApple,
  FaGooglePlay,
  FaSoundcloud,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFacebookF,
} from "react-icons/fa";

const SelectType = () => {
  const { type, setType } = React.useContext<{
    type: qrType;
    setType: React.Dispatch<React.SetStateAction<qrType>>;
  }>(QTypeContext);

  return (
    <section>
      <Header>Select Type</Header>
      <Divider />
      <Grid>
        <OptionButton type="website" handlePreset={() => setType("website")}>
          <FaGlobe fontSize={30} />
        </OptionButton>
        <OptionButton type="text" handlePreset={() => setType("text")}>
          <GoTypography fontSize={30} />
        </OptionButton>
        <OptionButton type="email" handlePreset={() => setType("email")}>
          <GoMail fontSize={30} />
        </OptionButton>
        <OptionButton type="sms" handlePreset={() => setType("sms")}>
          <FaSms fontSize={30} />
        </OptionButton>
        <OptionButton type="vCard" handlePreset={() => setType("vCard")}>
          <FaIdCard fontSize={30} />
        </OptionButton>
        <OptionButton type="wifi" handlePreset={() => setType("wifi")}>
          <FaWifi fontSize={30} />
        </OptionButton>
        <OptionButton
          type="location"
          handlePreset={() => setType("geolocation")}
        >
          <FaMapMarkerAlt fontSize={30} />
        </OptionButton>
        <OptionButton type="calender" handlePreset={() => setType("calender")}>
          <FaCalendarAlt fontSize={30} />
        </OptionButton>
        <OptionButton type="apple" handlePreset={() => setType("apple")}>
          <FaApple fontSize={30} />
        </OptionButton>
        <OptionButton type="store" handlePreset={() => setType("playstore")}>
          <FaGooglePlay fontSize={30} />
        </OptionButton>
        {/* <OptionButton type="Youtube" handlePreset={() => setType("youtube")}>
          <FaYoutube fontSize={30} />
        </OptionButton>
        <OptionButton type="spotify" handlePreset={() => setType("spotify")}>
          <FaSpotify fontSize={30} />
        </OptionButton>
        <OptionButton type="twitter" handlePreset={() => setType("twitter")}>
          <FaTwitter fontSize={30} />
        </OptionButton>
        <OptionButton
          type="instagram"
          handlePreset={() => setType("instagram")}
        >
          <FaInstagram fontSize={30} />
        </OptionButton>
        <OptionButton
          type="soundcloud"
          handlePreset={() => setType("soundcloud")}
        >
          <FaSoundcloud fontSize={30} />
        </OptionButton>
        <OptionButton type="facebook" handlePreset={() => setType("facebook")}>
          <FaFacebookF fontSize={30} />
        </OptionButton> */}
      </Grid>
    </section>
  );
};

export default SelectType;
