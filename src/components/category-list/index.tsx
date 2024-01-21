import CategoryCard from "../category-card";
import { type Category } from "~/types";

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories?.map((cat) => (
          <CategoryCard key={cat.name} data={cat} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
