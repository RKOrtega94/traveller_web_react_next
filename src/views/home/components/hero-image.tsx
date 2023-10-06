"use client";

import { useEffect, useState } from "react";
import YouTube from "react-youtube";

import Image from "next/image";

import GalapagosImage from "@assets/hero/galapagos.jpg";
import CotopaxiImage from "@assets/hero/cotopaxi.jpg";
import LagunaImage from "@assets/hero/laguna.jpg";
import PlayaImage from "@assets/hero/playa.webp";

export default function HeroImage() {
  const [image, setImage] = useState(GalapagosImage);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = [GalapagosImage, CotopaxiImage, LagunaImage, PlayaImage];

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setImage(images[randomIndex]);
    }, 5000);// Muestra la imagen después de 3 segundos (3000 milisegundos)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const videoId = "l9Ol9s-lbAY";

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1, // Reproducir automáticamente al cargar
      loop: 1, // Reproducir en bucle
      controls: 0, // Ocultar los controles del reproductor
      mute: 1, // Silenciar el video
    },
  };

  return (
    <div className="w-full h-full bg-white md:aspect-video">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}
