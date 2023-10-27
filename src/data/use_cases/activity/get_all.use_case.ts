import { ActivityRepository } from "@domain/repositories";

export default function GetAllActivitiesUseCase({
  dataSource,
}: {
  dataSource: ActivityRepository;
}) {
  const execute = async () => {
    const activities = await dataSource.getActivities();
  };

  return {
    execute,
  };
}
