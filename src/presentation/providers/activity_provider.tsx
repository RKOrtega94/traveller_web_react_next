"use client";

import { ActivityRepositoryImpl } from "@/data/repositories";
import { GetAll } from "@/data/use_cases/activity";
import { Activity } from "@/domain/entities";
import { createContext, useContext, useState } from "react";

const ActivityContext = createContext({
  activities: [] as Activity[],
  loadActivities: () => {},
});

export function useActivity() {
  return useContext(ActivityContext);
}

export const ActivityProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const loadActivities = async () => {
    const activities = await GetAll({
      repository: new ActivityRepositoryImpl(),
    }).execute();

    setActivities(activities);
  };

  return (
    <ActivityContext.Provider
      value={{
        activities,
        loadActivities,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
