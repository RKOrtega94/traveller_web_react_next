export default function CategoryCard({ name }: { name: string }) {
  return (
    <div className="cursor-pointer rounded-lg bg-white shadow-md shadow-black border border-black border-b-2 border-r-2 p-4 hover:border-b-4 hover:border-r-4">
      {name}
    </div>
  );
}