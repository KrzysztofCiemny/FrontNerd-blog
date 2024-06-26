import { categories } from "./ArticlesCategories";

type Props = {
  onCategoryClick: (category: string) => void
}

const styles = {
  container: 'flex flex-wrap gap-4 justify-center',
  item: 'text-slate-500 hover:text-black cursor-pointer'
}
const {container, item} = styles

const ArticlesNavigation = ({ onCategoryClick }: Props) => {
  return (
    <ul className={container}>
      {categories.map((category) => (
        <li key={category} className={item} onClick={() => onCategoryClick(category)}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default ArticlesNavigation;
