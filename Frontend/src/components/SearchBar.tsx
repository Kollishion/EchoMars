import { FiSearch } from 'react-icons/fi';
import { useProductStore } from '../store/useProduct';

const SearchBar = () => {
  const { searchText, setSearchText } = useProductStore();
  return (
    <div className="mb-3 md:w-96">
      <div className="relative flex w-full items-center">
        <input
          type="search"
          className="block w-full rounded-l border border-neutral-300 bg-transparent px-3 py-2 text-base text-neutral-700 outline-none transition duration-200 focus:border-blue-500 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-400"
          placeholder="Search"
          value={searchText}
          onInput={(e) => setSearchText((e.target as HTMLInputElement).value)}
        />

        <button className="flex items-center justify-center rounded-r bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 active:bg-blue-800">
          <FiSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
