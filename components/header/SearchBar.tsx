import React from "react";

import { GoSearch } from "react-icons/go";
import { useLanguage } from "../../hooks/useLanguage";

const SearchBar = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-[40rem] w-[70%] md:w-[90%] px-4 rounded-lg bg-gray-200 flex items-center flex-grow">
      <GoSearch style={{ color: "rgb(156 163 175)" }} />
      <input
        className="px-4 py-2 bg-transparent outline-none w-full "
        type="search"
        placeholder={`${t.search}`}
      />
    </div>
  );
};

export default SearchBar;
