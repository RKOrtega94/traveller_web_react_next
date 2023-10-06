export default function CardComponent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`card p-2 ${className}`}>{children}</div>;
}
