import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "~/components/ui/card";

import { type Category } from "~/types";
import { Skeleton } from "../ui/skeleton";

interface CategoryCard {
  data: Category | null;
}

const CategoryCard: React.FC<CategoryCard> = ({ data }) => {
  return (
    <Link href={`/categories/${data?.route}`} className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
            {data?.imageUrl ? <Image
              src={data.imageUrl}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
              : <Skeleton className="w-full h-full" />
            }
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <p className="font-semibold text-lg capitalize">{data?.name}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CategoryCard;
