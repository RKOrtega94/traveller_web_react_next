"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ActivityProvider } from "@/presentation/providers/activity_provider";
import { useRouter } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
