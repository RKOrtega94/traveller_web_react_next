import ecIcon from "@assets/icons/ec.svg";
import Image from "next/image";
import HeroCategoriesSection from "./hero-categories";
import HeroWelcomeSection from "./hero-welcome";

export default function HeroComponent() {
  return (
    <div className="w-full relative">
      <Image
        className="w-full"
        src={ecIcon}
        alt="mapa de ecuador"
        objectFit="contain"
      />
      <HeroWelcomeSection />
      <HeroCategoriesSection />
    </div>
  );
}
