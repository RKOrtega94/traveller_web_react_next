import Activity from "@entity/activity.entity";

export default abstract class ActivityRepository {
  abstract getActivities(): Promise<Activity[]>;
  abstract createActivity(activity: Activity): Promise<Activity>;
}
