import ActivityListActions from "./components/activity-list-actions";
import ActivityListTable from "./components/activity-list-table";

export default function ActivityList() {
  return (
    <div className="p-4 md:px-10 w-full">
      <ActivityListActions />
      <ActivityListTable />
    </div>
  );
}
