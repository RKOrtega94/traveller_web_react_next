import { Category } from "@entity/index";
import Image from "next/image";
import Card from "./main-card";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Card>
      <div className="flex items-end space-x-2 px-2">
        <Image
          src={category.image}
          alt={category.name}
          width={70}
          height={70}
        />
        <span className="font-bold">{category.name}</span>
      </div>
    </Card>
  );
}
