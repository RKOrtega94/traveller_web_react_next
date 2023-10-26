export default function Button({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <button className={`btn ${className}`}>{children}</button>;
}
