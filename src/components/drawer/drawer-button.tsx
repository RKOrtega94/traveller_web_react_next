import Link from "next/link";

export default function DrawerButton() {
  return (
    <div className="w-full rounded shadow p-2 hover:shadow-md">
      <Link className="w-full" href="/">
        <span className="">Drawer button</span>
      </Link>
    </div>
  );
}
