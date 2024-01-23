import { type ReactElement } from "react"
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { type AppPropsWithLayout } from "~/types";

const MyApp: AppType<NonNullable<unknown>> = ({
  Component,
  pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(
    <Component {...pageProps} />
  )
};

export default api.withTRPC(MyApp);
