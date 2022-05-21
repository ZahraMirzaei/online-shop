import React from "react";

import { useRouter } from "next/router";
import Icon from "../UI/Icon";

import en from "../../locales/pages/home/en";
import fa from "../../locales/pages/home/fa";

const SearchBar = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  const IconName = "GoSearch";
  return (
    <div className="max-w-[40rem] w-[70%] md:w-[80%] px-5 rounded-lg bg-gray-200 flex items-center">
      <Icon iconName={IconName} className="text-gray-400" />
      <input
        className="px-3 py-3 bg-transparent outline-none w-full "
        type="search"
        placeholder={`${t.search}`}
      />
    </div>
  );
};

export default SearchBar;
