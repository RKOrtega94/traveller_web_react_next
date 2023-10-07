import Image from "next/image";

import MountainIcon from "@assets/icons/mountain.png";

import CardComponent from "./card-component";

export default function CardCategory() {
    return <CardComponent className="flex justify-start space-x-2">
    <Image src={MountainIcon} alt="Mountain Icon" className="w-1/3" />
  </CardComponent>;
}
