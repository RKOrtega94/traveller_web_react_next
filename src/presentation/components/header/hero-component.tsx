import ecIcon from "@assets/icons/ec.svg";
import Image from "next/image";
import CategoriesSlider from "../sliders/categories-slider";

export default function HeroComponent() {
  return (
    <div className="w-full relative">
      <Image className="w-full" src={ecIcon} alt="ec" objectFit="contain" />
      <div className="absolute bottom-10">
        <CategoriesSlider />
      </div>
    </div>
  );
}
