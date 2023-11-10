"use client";

import { Category } from "@/domain/entities";

export default function HeroCategoriesSection() {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    interval: 500,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    fixedWidth: "10rem",
  };
  return (
    <div className="absolute bottom-0 left-0 w-full bg-black">
      <div className="carousel-track">Contenido</div>
    </div>
  );
}
