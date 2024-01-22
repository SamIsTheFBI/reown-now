import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "~/components/ui/card";

import { type Product } from "~/types";
import { Skeleton } from "../ui/skeleton";
import { api } from "~/utils/api";

interface ProductCard {
  data: Product | null;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const categories = api.category.list.useQuery()
  const category = categories?.data?.find((cat) => cat.id === data?.id)

  return (
    <Link href="/" className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
            {data?.images?.[0] ? <Image
              src={data.images?.[0]}
              alt=""
              fill
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
              : <Skeleton className="w-full h-full" />
            }
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <div>
            <p className="font-semibold text-lg">{data?.name}</p>
            <p className="text-sm text-primary/80 capitalize">{category?.name}</p>
          </div>
          <div className="flex items-center justify-between">₹ {data?.price}</div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
