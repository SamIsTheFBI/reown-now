import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { Header, RootLayout } from "~/components";
import { type NextPageWithLayout } from "~/types";

import { api } from "~/utils/api";

const Home: NextPageWithLayout = () => {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create S3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default Home
