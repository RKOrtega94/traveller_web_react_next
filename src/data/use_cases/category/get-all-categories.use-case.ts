import { Category } from "@entity/index";
import { CategoryDataSource } from "@data/data_sources";

export default class GetAllCategoriesUseCase {
  constructor(private readonly dataSource: CategoryDataSource) {}

  execute = async (): Promise<Category[]> => {
    const res = await this.dataSource.getAll();
    return res.map((category: any) => Category.fromJson(category));
  };
}
