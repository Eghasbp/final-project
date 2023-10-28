import Slider from "../Slider";
import gray from "../../assets/gray.jpg";
import ButtonBanner from "./ButtonBanner";
import LoggedUser from "../LoggedUser";

const ContentLeft = () => {
  return (
    <>
      <Slider />
      <ButtonBanner />
      <LoggedUser />
    </>
  );
};

export default ContentLeft;
