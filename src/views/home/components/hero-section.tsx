import HeroCard from "./hero-card";
import HeroImage from "./hero-image";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center bg-black mt-0 p-0 relative aspect-square md:aspect-video">
      <HeroImage />
      <div className="absolute bottom-2 w-11/12 mt-24">
        <HeroCard />
      </div>
    </div>
  );
}
