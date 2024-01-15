const routes = [
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/sell",
    label: "Sell",
  },
]

const products = [
  {
    id: 1,
    category: "Electronics",
    title: "Sony FX3",
    price: 3999.00,
    images: [""],
  },
  {
    id: 2,
    category: "Electronics",
    title: "Sony A7S III",
    price: 3499.00,
    images: [""],
  },
  {
    id: 3,
    category: "Electronics",
    title: "Sony A7C",
    price: 1599.00,
    images: [""],
  },
  {
    id: 4,
    category: "Electronics",
    title: "Sony A7 IV",
    price: 2399.00,
    images: [""],
  },
];

const categories = [
  {
    title: "electronics",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "electronics",
  },
  {
    title: "fashion",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-juan-mendez-1536619.jpg&fm=jpg&w=1280&h=853",
    route: "fashion",
  },
  {
    title: "home & decor",
    image: "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?cs=srgb&dl=pexels-terje-sollie-298842.jpg&fm=jpg&w=1280&h=853",
    route: "home",
  },
  {
    title: "books",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?cs=srgb&dl=pexels-pixabay-159711.jpg&fm=jpg&w=1280&h=851",
    route: "books",
  },
  {
    title: "automobiles",
    image: "https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?cs=srgb&dl=pexels-pixabay-159192.jpg&fm=jpg&w=1280&h=892",
    route: "automobile",
  },
]

export {
  routes,
  categories,
  products,
}
