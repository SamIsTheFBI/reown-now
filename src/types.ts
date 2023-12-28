import { type NextPage } from "next";
import { type AppProps } from "next/app";
import { type ReactElement, type ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
  images: string[];
};

export type {
  NextPageWithLayout,
  AppPropsWithLayout,
  Product,
}
