import { useRouter } from "next/router";
import { Container, ProductList, RootLayout } from "~/components";
import { type NextPageWithLayout } from "~/types";
import { api } from "~/utils/api";

const CategoryRoute: NextPageWithLayout = () => {
  const router = useRouter()
  const category = router.query.route as string
  const products = api.product?.listByCategoryId.useQuery(category)
  return (
    <Container>
      <div className="space-y-4 pb-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl pt-6">Explore our <span className="capitalize font-bold">{category}</span> section</h1>
        <div className="flex flex-col gap-y-8 ">
          {
            products?.data?.length &&
            <ProductList items={products?.data} />
          }
        </div>
      </div>
    </Container>
  )
}

CategoryRoute.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default CategoryRoute
