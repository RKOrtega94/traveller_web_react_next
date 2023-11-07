import CategoryCard from "../cards/category-card";
import { GetAllCategoriesUseCase } from "@/data/use_cases/category";
import { CategoryDataSource } from "@data/data_sources";
import Slider from "./main-slider";

async function getCategories() {
  const useCase = new GetAllCategoriesUseCase(new CategoryDataSource());
  const categories = await useCase.execute();
  return categories;
}

export default async function CategoriesSlider() {
  const items = await getCategories();

  return <div className="w-full"></div>;
}
