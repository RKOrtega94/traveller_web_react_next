import CardComponent from "@components/card-component";

import LogoImage from "@assets/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroCard() {
  return (
    <CardComponent className="bg-glass w-full">
      {/* <div className="w-full flex flex-col items-center space-y-2">
        <div className="flex flex-col items-center md:flex-row md:justify-start space-x-2 md:w-full">
          <Image src={LogoImage} alt="Logo" width={200} height={200} />
          <div className="flex flex-col">
            <h1 className="text-4xl text-center text-gray-900 font-bold">
              Descubre Tu Próxima Aventura
            </h1>
            <h6 className="text-center text-gray-900 font-bold">
              Explora Destinos Inolvidables a Tu Alcance
            </h6>
          </div>
        </div>
        <p className="text-center text-gray-900">
          Bienvenido a nuestra aplicación turística, tu compañero de viaje
          perfecto para descubrir destinos emocionantes y experiencias únicas
          cerca de ti o según tus preferencias.
          <span className="font-bold">¿Listo para explorar?</span>
        </p>
        <div className="w-full text-end">
          <span className="text-gray-900 cursor-pointer font-bold hover:underline flex justify-end items-center space-x-2">
            Explorar destinos{" "}
            <FontAwesomeIcon icon={faChevronRight} height={14} />
          </span>
        </div>
      </div> */}
    </CardComponent>
  );
}
