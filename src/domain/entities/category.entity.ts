export default class CategoryEntity {
  id: number;
  name: string;
  description: string;
  image: any;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    name: string,
    description: string,
    image: any,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromJson(json: any): CategoryEntity {
    return new CategoryEntity(
      json.id,
      json.name,
      json.description,
      json.image,
      json.createdAt,
      json.updatedAt
    );
  }

  static toJson(category: CategoryEntity): any {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
      image: category.image,
    };
  }
}
