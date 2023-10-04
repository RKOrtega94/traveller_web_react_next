export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen">
      <h1>Layout</h1>
      {children}
    </div>
  );
}
