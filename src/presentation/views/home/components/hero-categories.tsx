"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
    console.log(categories);
  }, []);

  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    interval: 1000,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    fixedWidth: "10rem",
    pagination: false,
    padding: "0.5rem",
  };
  return (
    <Splide aria-label="My Favorite Images" options={options}>
      {/* <SplideSlide>content 1</SplideSlide>
      <SplideSlide>content 2</SplideSlide> */}
      {categories.map((category) => (
        <SplideSlide key={category.id}>
          <CategoryCard category={category} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
