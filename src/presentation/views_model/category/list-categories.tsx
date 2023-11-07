import { GetAllCategoriesUseCase } from "@/data/use_cases/category";
import { CategoryDataSource } from "@data/data_sources";

async function getCategories() {
  const useCase = new GetAllCategoriesUseCase(new CategoryDataSource());
  const categories = await useCase.execute();
  return categories;
}

export default async function ListCategoriesViewModel() {
  const categories = await getCategories();

  return {
    categories,
  };
}
