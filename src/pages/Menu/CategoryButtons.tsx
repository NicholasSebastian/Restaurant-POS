import type { FC, Dispatch, SetStateAction } from "react";

const CATEGORIES = [
  "Ayam", "Babi", "Sapi", "Warkop", "Gorengan", "Minuman", "Tambahan"
];

const CategoryButtons: FC<ICategoryProps> = props => {
  const { active, onChange } = props;
  const styles = "px-4 py-2 rounded-lg text-xs text-gray-700";
  return (
    <nav className="border border-gray-300 rounded-lg p-1 flex items-center w-min">
      {CATEGORIES.map(category => (
        <button
          onClick={() => onChange(category)}
          className={(category === active) ? `bg-gray-200 text-black ${styles}` : styles}>
          {category}
        </button>
      ))}
    </nav>
  );
}

export { CATEGORIES };
export default CategoryButtons;

interface ICategoryProps {
  active: string
  onChange: Dispatch<SetStateAction<string>>
}
