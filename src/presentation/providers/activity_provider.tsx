"use client";

import { ActivityRepositoryImpl } from "@/data/repositories";
import { GetAll, Create } from "@/data/use_cases/activity";
import { Activity } from "@/domain/entities";
import { createContext, useContext, useState } from "react";

const ActivityContext = createContext({
  activities: [] as Activity[],
  loadActivities: () => {},
  createActivity: (data: Activity): Promise<Activity> => {
    return new Promise((resolve) => resolve({} as Activity));
  },
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

  const createActivity = async (data: Activity): Promise<Activity> => {
    const activity = await Create({
      repository: new ActivityRepositoryImpl(),
    }).execute(data);

    setActivities([...activities, activity]);

    return activity;
  };

  return (
    <ActivityContext.Provider
      value={{
        activities,
        loadActivities,
        createActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
