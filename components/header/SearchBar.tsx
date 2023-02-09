import React from "react";

import { GoSearch } from "react-icons/go";
import { useLanguage } from "../../hooks/useLanguage";

//TODO: search by product name.
const SearchBar = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-[50rem] w-full md:w-[90%] px-4 md:ltr:ml-4 md:rtl:mr-4 rounded-lg bg-slate-600/10 dark:bg-slate-800 flex items-center flex-grow">
      <GoSearch style={{ color: "rgb(156 163 175)" }} />
      <input
        className="px-4 py-2 md:py-3 bg-transparent outline-none w-full "
        type="search"
        placeholder={`${t.search}`}
      />
    </div>
  );
};

export default SearchBar;
