import ecIcon from "@assets/icons/ec.svg";
import Image from "next/image";
import ActivityInfinityScroll from "./../sliders/activity-infinite-slider";

export default function HeroComponent() {
  return (
    <div className="w-full relative">
      <Image className="w-full" src={ecIcon} alt="ec" objectFit="contain" />
      <div className="absolute bottom-10 p-4">
        <ActivityInfinityScroll />
      </div>
    </div>
  );
}
