import { FC } from "react";

type SearchBarProps = {};

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="flex justify-end mt-32 mr-28">
      <div className="flex flex-row relative w-1/4  items-center">
        <input
          // name="search"
          type="search"
          id="search"
          className="w-full p-2.5 text-sm text-gray-900 bg-orange-50 border border-orange-400"
          placeholder="Search a Juice"
          required
        />
        <button
          type="submit"
          className="absolute h-full  op-0 right-0 p-2.5 text-sm font-medium text-white bg-orange-600 border border-orange-600 hover:bg-orange-800 focus:ring-2 focus:outline-none focus:ring-orange-800 "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
