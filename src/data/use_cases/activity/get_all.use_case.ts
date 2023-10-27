import { ActivityRepositoryImpl } from "@data/repositories";

export default function GetAllActivitiesUseCase() {
  const _repository = new ActivityRepositoryImpl();

  const execute = async () => {
    return await _repository.getActivities();
  };

  return {
    execute,
  };
}
