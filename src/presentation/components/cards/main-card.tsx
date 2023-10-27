export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <div className="card-body">{children}</div>
    </div>
  );
}
