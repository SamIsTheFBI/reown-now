import Link from "next/link";
import { Container, RootLayout } from "~/components";
import CategoryList from "~/components/category-list";
import { categories } from "~/const";
import { NextPageWithLayout } from "~/types";

const Categories: NextPageWithLayout = () => {
  return (
    <>
      <Container>
        <div className="space-y-4 pb-10">
          <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
            <div
              style={{ backgroundImage: `url(/images/categories-banner.png)` }}
              className="rounded-lg relative md:aspect-[2.4/1] overflow-hidden bg-cover aspect-square bg-center"
            >
              <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/75 p-4 rounded-lg">
                  Explore a wide variety of categories
                  <div className="text-sm my-4">A lot of good stuff available for use again!</div>
                  <Link href="/sell">
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 text-xl font-bold ">Available Categories</div>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <CategoryList categories={categories} />
          </div>
        </div>
      </Container>
    </>
  )
}

Categories.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default Categories
