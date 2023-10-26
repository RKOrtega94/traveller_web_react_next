import Image from "next/image";
import CardComponent from "../card-component";
import "./place-card.css";

import CotopaxiImage from "@assets/hero/cotopaxi.jpg";

export default function PaceCard() {
  return (
    <CardComponent className="flex-none w-screen sm:w-40 md:w-1/2 lg:w-1/3 p-10 bg-white shadow m-4">
      <div className="w-full flex space-x-2">
        <div className="w-1/4">
          <Image
            src={CotopaxiImage}
            className="h-full rounded-md"
            alt="Cotopaxi"
          />
        </div>
        <div className="w-full flex flex-col justify-start">
          <h3 className="text-lg font-bold uppercase">Nombre del sitio</h3>
          <span className="text-sm">Ubicación, calles</span>
          <div></div>
          <span className="line-clamp-2">
            Descripción breve o reseña corta del sitio con información relevante
            y mas texto de prueba para ver si cuando se pase de las lineas se
            muestra puntos suspensivos
          </span>
          <div className="flex justify-between">
            <div>categorías</div>
            <div>reseñas y comentarios</div>
          </div>
        </div>
      </div>
    </CardComponent>
  );
}
