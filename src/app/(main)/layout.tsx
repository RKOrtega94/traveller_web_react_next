export const metadata = {
  title: "Traveller",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen dark:bg-gray-900 bg-gray-200">
      {children}
    </div>
  );
}
