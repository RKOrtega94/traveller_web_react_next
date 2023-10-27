import { ActivityRepository } from "@domain/repositories";

export default function GetAllActivitiesUseCase({
  repository,
}: {
  repository: ActivityRepository;
}) {
  const execute = async () => await repository.getActivities();

  return {
    execute,
  };
}
