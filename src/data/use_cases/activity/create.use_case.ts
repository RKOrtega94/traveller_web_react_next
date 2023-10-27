import { Activity } from "@/domain/entities";
import { ActivityRepository } from "@domain/repositories";

export default function CreateActivityUseCase({
  repository,
}: {
  repository: ActivityRepository;
}) {
  const execute = async (activity: Activity) =>
    await repository.createActivity(activity);

  return {
    execute,
  };
}
