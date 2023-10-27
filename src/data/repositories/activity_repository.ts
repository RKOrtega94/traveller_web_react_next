import { ActivityRepository } from "@domain/repositories";
import { Activity } from "@domain/entities";
import Api from "./../api/api";

export default class ActivityRepositoryImpl extends ActivityRepository {
  _api = new Api();

  async getActivities(): Promise<Activity> {
    try {
      const response = await this._api.get("/activities");
      return response;
    } catch (error) {
      throw error;
    }
  }
}
