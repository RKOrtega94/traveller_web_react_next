"use client";

import { useRouter } from "next/navigation";

import BackIcon from "@assets/icons/back.svg";
import Image from "next/image";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="btn btn-ghost flex justify-center items-center"
      onClick={() => router.back()}
    >
      <Image src={BackIcon} alt="Back" width={24} height={24} />
    </button>
  );
}
