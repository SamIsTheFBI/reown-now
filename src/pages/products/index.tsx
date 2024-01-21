import { Container, ProductList, RootLayout } from "~/components"
import { type NextPageWithLayout } from "~/types"
import { api } from "~/utils/api"

const Products: NextPageWithLayout = () => {
  const products = api.product.listAll.useQuery()
  return (
    <Container>
      <div className="space-y-4 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">

        </div>
        <div className="px-4 sm:px-6 lg:px-8 text-xl font-bold ">Available for Sale Near You</div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {
            products.data &&
            <ProductList items={products?.data} />
          }
        </div>
      </div>
    </Container>
  )
}

Products.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default Products
