import { Category } from "@entity/index";

export default abstract class CategoryRepository {
  abstract getAll(): Promise<Category[]>;
}
