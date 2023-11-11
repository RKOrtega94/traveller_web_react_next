"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { Category } from "@/domain/entities";
import { useEffect, useState } from "react";
import { GetAllCategoriesUseCase } from "@/data/use_cases/category";
import { CategoryDataSource } from "@/data/data_sources";
import CategoryCard from "@/presentation/components/cards/category-card";

export default function HeroCategoriesSection() {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = new GetAllCategoriesUseCase(new CategoryDataSource());

  useEffect(() => {
    getCategories.execute().then((data) => setCategories(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    fixedWidth: "10rem",
    pagination: false,
    padding: "0.5rem",
    transition: "ease-in-out 0.5s",
    waitForTransition: false,
  };
  return (
    <Splide
      aria-label="Categories"
      options={options}
      hasTrack={false}
      className="absolute bottom-full z-10 w-full"
    >
      <div className="relative">
        <SplideTrack>
          {categories.map((category) => (
            <SplideSlide key={category.id}>
              <CategoryCard category={category} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </div>
    </Splide>
  );
}
