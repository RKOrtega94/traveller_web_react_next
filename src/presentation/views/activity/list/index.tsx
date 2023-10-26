import ActivityListActions from "./components/activity-list-actions";
import ActivityListTable from "./components/activity-list-table";
import ActivityListDetail from "./components/activity-list-detail";

export default function ActivityList() {
  return (
    <div className="p-4 md:px-10 w-full space-y-2">
      <ActivityListActions />
      <div className="flex justify-start w-full space-x-0 md:space-x-2">
        <div className="w-full md:w-2/3">
          <ActivityListTable />
        </div>
        <div className="hidden md:block md:w-1/3">
          <ActivityListDetail />
        </div>
      </div>
    </div>
  );
}
