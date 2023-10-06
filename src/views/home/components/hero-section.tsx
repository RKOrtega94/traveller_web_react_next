import HeroCard from "./hero-card";
import HeroVideo from "./hero-video";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center bg-black mt-0 p-0 relative aspect-square md:aspect-video">
      <HeroVideo />
      <div className="absolute bottom-0">
        <HeroCard />
      </div>
    </div>
  );
}
