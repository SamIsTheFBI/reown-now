import { useRouter } from "next/router";
import { Container, RootLayout } from "~/components";
import { NextPageWithLayout } from "~/types";

const CategoryRoute: NextPageWithLayout = () => {
  const router = useRouter()
  return (
    <Container>
      <div className="space-y-4 pb-10">
        <h1 className="text-3xl pt-6">Explore our <span className="capitalize font-bold">{router.query.route}</span> section</h1>
      </div>
    </Container>
  )
}

CategoryRoute.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default CategoryRoute
