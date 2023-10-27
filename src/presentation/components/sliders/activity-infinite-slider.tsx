import ActivityService from "@/services/activity.service";

const service = ActivityService();

async function getActivities() {
  const { res, err } = await service.getAll();

  if (err) {
    console.log(err);
    return;
  }

  return res;
}

export default async function ActivityInfinityScroll() {
  const activitiesData = getActivities();

  const [activities] = await Promise.all([activitiesData]);

  return <div>Infinite scroll</div>;
}
