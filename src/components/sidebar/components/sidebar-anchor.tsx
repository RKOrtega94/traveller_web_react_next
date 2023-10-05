import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function SidebarAnchor({
  icon,
  label,
  route,
}: {
  icon: StaticImageData;
  label: string;
  route: string;
}) {
  return (
    <li className="my-2">
      <Link
        href="/users"
        className="flex space-x-2 justify-start items-center font-bold"
      >
        <Image src={icon} alt="icon" height={24} />
        {label}
      </Link>
    </li>
  );
}
