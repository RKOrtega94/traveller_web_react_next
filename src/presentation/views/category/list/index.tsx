import CategoryListActions from "./components/category-list-actions";
import CategoryListTable from "./components/category-list-table";
import CategoryListDetail from "./components/category-list-detail";

export default function CategoryList() {
  return (
    <main>
      <CategoryListActions />
      <section className="w-full flex space-x-2">
        <div className="w-full md:w-2/3 h-fit">
          <CategoryListTable />
        </div>
        <div className="hidden md:flex md:w-1/3">
          <CategoryListDetail />
        </div>
      </section>
    </main>
  );
}
