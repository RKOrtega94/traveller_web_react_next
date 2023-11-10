export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="cursor-pointer rounded-lg bg-white shadow-md shadow-black border border-black border-b-2 border-r-2 hover:border-b-4 hover:border-r-4 my-2">
      {children}
    </div>
  );
}
