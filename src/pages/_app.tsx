import { type ReactElement } from "react"
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import NextProgress from "next-progress"

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { type AppPropsWithLayout } from "~/types";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(
    <SessionProvider session={session as Session}>
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </SessionProvider>
  )
};

export default api.withTRPC(MyApp);
