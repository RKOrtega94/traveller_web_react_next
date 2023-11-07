import { Category } from "@entity/index";
import { CategoryRepository } from "@domain/repositories";

export default class CategoryRepositoryImpl extends CategoryRepository {
  getAll(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
}
