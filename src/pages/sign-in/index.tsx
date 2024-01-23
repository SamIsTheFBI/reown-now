import { Container, RootLayout, SignInCard } from "~/components";
import { type NextPageWithLayout } from "~/types";

const CustomSignIn: NextPageWithLayout = () => {
  return (
    <Container>
      <div className="flex pt-6">
        <div className="m-auto max-w-sm">
          <SignInCard />
        </div>
      </div>
    </Container>
  )
}

CustomSignIn.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default CustomSignIn
