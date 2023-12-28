import { ReactElement, ReactNode } from "react"
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppType, type AppProps } from "next/app";
import { type NextPage } from 'next';

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { AppPropsWithLayout } from "~/types";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
};

export default api.withTRPC(MyApp);
