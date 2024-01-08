import { create } from "zustand"

type PreviewProductDetails = {
  title: string;
  description: string;
  category: string;
  images: string[];
  price: number;
}

type PreviewProductStore = {
  productDetails: PreviewProductDetails;
  setProductDetails: (productDetails: PreviewProductDetails) => void
}

export const usePreviewProductStore = create<PreviewProductStore>((set) => ({
  productDetails: {
    title: "",
    description: "",
    category: "",
    images: [],
    price: 0,
  },
  setProductDetails: (productDetails) => set({ productDetails: productDetails }),
}))
