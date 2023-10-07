import CardComponent from "@components/card-component";

import LogoImage from "@assets/images/logo.png";
import Image from "next/image";
import PlayaIcon from "@assets/icons/playa.png";
import MountainIcon from "@assets/icons/mountain.png";
import ForestIcon from "@assets/icons/forest.png";

export default function HeroCard() {
  const icons = [PlayaIcon, MountainIcon, ForestIcon];
  const buildCardFooter = () => {
    return (
      <div className="w-full flex justify-between">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex space-x-2 p-2 bg-glass rounded-3xl shadow"
          >
            <Image src={icon} alt="icon" width={50} height={50} />
          </div>
        ))}
        <div
            className="flex items-center space-x-2 p-2 bg-glass rounded-3xl shadow"
        >
            <span className="font-bold text-lg">Y más...</span>
          </div>
      </div>
    );
  };
  return (
    <CardComponent className="bg-white bg-opacity-70 w-full  md:w-7/12 shadow-lg">
      <div className="w-full flex flex-col items-center lg:flex-row">
        <Image src={LogoImage} alt="Logo" width={150} height={150} />
        <div className="w-full text-center">
          <h1 className="text-2xl text-gray-900 font-bold">
            Descubre Tu Próxima Aventura
          </h1>
          <h6 className="font-bold">
            Explora Destinos Inolvidables a Tu Alcance
          </h6>
        </div>
      </div>
      {buildCardFooter()}
    </CardComponent>
  );
}
