import { DonateButton } from "./Buttons";
import { HiOutlineHeart } from "react-icons/hi2";
import { event } from "nextjs-google-analytics";

const Donate = () => {
  return (
    <DonateButton
      href="https://www.buymeacoffee.com/simplyelvis"
      target="_blank"
      onClick={() =>
        event("Clicked Donate", {
          category: "donate",
          label: "Routed to donate page",
        })
      }
    >
      <HiOutlineHeart size={24} />
      <span>Donate</span>
    </DonateButton>
  );
};

export default Donate;
