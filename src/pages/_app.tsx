import { type ReactElement } from "react"
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

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
      <Component {...pageProps} />
    </SessionProvider>
  )
};

export default api.withTRPC(MyApp);
