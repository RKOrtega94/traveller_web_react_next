import ActivityListActions from "./components/activity-list-actions";
import ActivityListTable from "./components/activity-list-table";
import ActivityListDetail from "./components/activity-list-detail";

export default function ActivityList() {
  return (
    <main className="p-4 md:px-10 w-full">
      <ActivityListActions />
      <section className="w-full flex space-x-2">
        <div className="w-full md:w-2/3 h-fit">
          <ActivityListTable />
        </div>
        <div className="hidden md:flex md:w-1/3">
          <ActivityListDetail />
        </div>
      </section>
    </main>
  );
}
