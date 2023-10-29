"use client";

import InputTextField from "@components/fields/input-text-field";
import Button from "@components/fields/button";
import { useRouter } from "next/navigation";

export default function CategoryListActions() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/category/form");
  };

  return (
    <section className="w-full flex flex-col sm:flex-row sm:justify-between items-end space-y-2 sm:space-y-0">
      <div className="w-full sm:max-w-sm">
        <InputTextField name="search" placeholder="Buscar actividad" />
      </div>
      <div className="max-w-sm">
        <Button onClick={handleNavigate}>Agregar actividad</Button>
      </div>
    </section>
  );
}
