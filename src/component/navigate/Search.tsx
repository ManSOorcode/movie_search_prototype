import { IoIosSearch } from "react-icons/io";
import { SearchProps } from "../../types/types";

const Search: React.FC<SearchProps> = ({ searchvalue, searchhandler }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchhandler((e.target as HTMLInputElement).value);
    }
  };
  return (
    <div className="flex items-center justify-center w-full mt-8">
      <div className="flex items-center w-full text-white bg-gray-900 border border-transparent rounded-md focus-within:border-blue-200 group">
        <input
          type="text"
          value={searchvalue || ""}
          placeholder="Search for a movie"
          className="w-full py-2 pl-2 bg-gray-900 border-none outline-none font-inter rounded-tl-md rounded-bl-md"
          onChange={(e) => searchhandler(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IoIosSearch className="w-6 h-6 pr-2 bg-transparent cursor-pointer md:w-8 md:h-8" />
      </div>
    </div>
  );
};

export default Search;
