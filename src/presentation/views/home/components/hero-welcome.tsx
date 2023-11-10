"use client";

import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";

import SearchIcon from "@assets/icons/ubicacion.png";
import Image from "next/image";

import { GetAllCategoriesUseCase } from "@/data/use_cases/category";
import { CategoryDataSource } from "@/data/data_sources";
import { Category } from "@/domain/entities";

export default function HeroWelcomeSection() {
  const getCategories = new GetAllCategoriesUseCase(new CategoryDataSource());

  const el = useRef(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories.execute().then((categories) => {
      setCategories(categories);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: categories.map((category) => category.name),
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [categories]);

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
        <div className="w-full p-2 flex justify-start h-10 rounded-md shadow-md bg-white items-center bg-opacity-80 text-gray-500">
          <Image src={SearchIcon} alt="search icon" className="h-8 w-8" />
          <span>
            Vamos a buscar <span ref={el}></span>
          </span>
        </div>
      </div>
    </section>
  );
}
