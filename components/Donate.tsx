import { DonateButton } from "./Buttons";
import { HiOutlineHeart } from "react-icons/hi2";

const Donate = () => {
  return (
    <DonateButton
      href="https://www.buymeacoffee.com/simplyelvis"
      target="_blank"
    >
      <HiOutlineHeart size={24} />
      <span>Donate</span>
    </DonateButton>
  );
};

export default DonateButton;
