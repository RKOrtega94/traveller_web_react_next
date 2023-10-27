import { ActivityRepository } from "@domain/repositories";
import { Activity } from "@domain/entities";
import { ActivityDataSource } from "@data/data_sources";

export default class ActivityRepositoryImpl extends ActivityRepository {
  async getActivities(): Promise<Activity[]> {
    try {
      const response = await ActivityDataSource().get();
      if (response) {
        const activities: Activity[] = response.map((activity: any) =>
          Activity.fromJson(activity)
        );
        return activities;
      }
      return [];
    } catch (error) {
      throw error;
    }
  }
}
