import ecIcon from "@assets/icons/ec.svg";
import Image from "next/image";
import HeroCategoriesSection from "./hero-categories";

import { GetAllCategoriesUseCase } from "@/data/use_cases/category";
import { CategoryDataSource } from "@data/data_sources";

async function getCategories() {
  const useCase = new GetAllCategoriesUseCase(new CategoryDataSource());
  return await useCase.execute();
}

export default async function HeroComponent() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="w-full relative">
      <Image className="w-full" src={ecIcon} alt="ec" objectFit="contain" />
      <HeroCategoriesSection items={categories} />
    </div>
  );
}
