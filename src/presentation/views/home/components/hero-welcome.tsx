"use client";

import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";

import SearchIcon from "@assets/icons/ubicacion.png";
import Image from "next/image";

import { GetAllCategoriesUseCase } from "@/data/use_cases/category";
import { CategoryDataSource } from "@/data/data_sources";

export default function HeroWelcomeSection() {
  const getCategories = new GetAllCategoriesUseCase(new CategoryDataSource());

  const el = useRef(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    categories.current = getCategories.execute();

    const typed = new Typed(el.current, {
      strings: categories.map((item) => item.name), // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="absolute bottom-1/2 w-full z-10 flex justify-center">
      <div className="w-full self-center mx-4 md:mx-16 flex flex-col sm:flex-row gap-2">
        <div className="w-full">
          <h4 className="text-md font-bold">
            Bienvenido a <span>Travellers Ec</span> <br />
            <span className="hidden md:flex">
              Encontremos juntos los mejores lugares de Ecuador para visitar.
            </span>
          </h4>
        </div>
        <div className="w-full p-2 flex justify-start h-10 rounded-md shadow-md bg-white items-center bg-opacity-80">
          <Image src={SearchIcon} alt="search icon" className="h-8 w-8" />
          <span>
            Vamos a buscar <span ref={el}></span>
          </span>
        </div>
      </div>
    </section>
  );
}
