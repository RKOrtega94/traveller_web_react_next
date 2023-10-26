import Image, { StaticImageData } from "next/image";

export default function SidebarParentMenu({
  icon,
  label,
  children,
}: {
  icon: StaticImageData;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <details open={false}>
        <summary className="flex space-x-2 justify-start items-center font-bold">
          <Image src={icon} alt="icon" height={24} />
          {label}
        </summary>
        <ul>{children}</ul>
      </details>
    </li>
  );
}
