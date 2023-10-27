export default class Activity {
  id: string;
  name: string;
  description: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    name: string,
    description: string,
    images: string[],
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // from Json to Activity
  static fromJson(json: any): Activity {
    return new Activity(
      json.id,
      json.name,
      json.description,
      json.images,
      json.createdAt,
      json.updatedAt
    );
  }

  // from Activity to Json
  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      images: this.images,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
