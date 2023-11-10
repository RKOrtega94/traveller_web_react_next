import ecIcon from "@assets/icons/ec.svg";
import Image from "next/image";
import HeroCategoriesSection from "./hero-categories";

export default function HeroComponent() {
  return (
    <div className="w-full relative">
      <Image className="w-full" src={ecIcon} alt="ec" objectFit="contain" />
      <HeroCategoriesSection />
    </div>
  );
}
