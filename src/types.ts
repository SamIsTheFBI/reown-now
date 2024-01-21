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
  name: string;
  description: string;
  price: number;
  categoryId: number;
  createdAt?: Date;
  updatedAt?: Date;
  images?: string[];
};

interface Category {
  id: number;
  name: string;
  imageUrl: string | null;
  route: string;
  products?: Product[];
};

export type {
  NextPageWithLayout,
  AppPropsWithLayout,
  Product,
  Category,
}
