import Link from "next/link";

export default function DrawerButton() {
  return (
    <Link className="w-full" href="/">
      <span className="w-full rounded shadow p-2 hover:shadow-md">
        Drawer button
      </span>
    </Link>
  );
}
