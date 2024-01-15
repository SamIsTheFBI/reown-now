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
  id: number;
  category: string;
  title: string;
  price: number;
  images: string[];
};

interface Category {
  title: string;
  image: string;
  route: string;
};

export type {
  NextPageWithLayout,
  AppPropsWithLayout,
  Product,
  Category,
}
