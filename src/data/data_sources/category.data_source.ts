import Api from "../api/api";

export default class CategoryDataSource {
  getAll = async (): Promise<any> => Api().get("categories");

  getById = async (id: number): Promise<any> =>
    await Api().get(`categories/${id}`);

  post = async (category: any): Promise<any> =>
    await Api().post("categories", category);

  put = async (category: any): Promise<any> =>
    await Api().post(`categories/${category.id}`, category);
}
