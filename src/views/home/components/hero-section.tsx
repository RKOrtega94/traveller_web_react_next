import HeroCard from "./hero-card";
import MountainImage from "@assets/hero/cotopaxi.jpg";

export default function HeroSection() {
  return (
    <div className="hero w-full flex justify-center mt-0 p-0 relative aspect-square md:aspect-auto items-center">
      <div
        className="absolute w-full md:w-1/2 right-0 bg-black h-full"
        style={{
          // Border bottom left radius
          borderBottomLeftRadius: "50%",
          background: `url(${MountainImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute bottom-0 top-0 left-0 right-0 m-auto px-10 flex justify-center items-center md:justify-start">
        <HeroCard />
      </div>
    </div>
  );
}
