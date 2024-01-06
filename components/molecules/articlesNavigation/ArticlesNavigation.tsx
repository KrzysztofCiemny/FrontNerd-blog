import { categories } from "./ArticlesCategories";

const ArticlesNavigation = ({ onCategoryClick }: { onCategoryClick: (category: string) => void }) => {
  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      {categories.map((category, index) => (
        <li key={index} className="text-slate-500 hover:text-black cursor-pointer" onClick={() => onCategoryClick(category)}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default ArticlesNavigation;
