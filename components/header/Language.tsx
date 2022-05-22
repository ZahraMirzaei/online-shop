import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdLanguage } from "react-icons/md";
import en from "../../locales/en";
import fa from "../../locales/fa";
const Language = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  const [lang, setLang] = useState(locale);

  useEffect(() => {
    document.documentElement.dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setLang(e.currentTarget.id);
  }

  return (
    <div className=" relative">
      <MdLanguage style={{ fontSize: "1.5rem" }} />
      <div
        className={`absolute top-8 ltr:right-0 rtl:left-0 bg-palette-card py-3 px-6 shadow-md `}
      >
        <Link href="/" locale="fa">
          <a className="whitespace-nowrap flex justify-between items-center">
            <input
              type="radio"
              id="fa"
              name="language"
              value={lang}
              checked={locale === "fa" ? true : false}
              onChange={onChangeHandler}
            />
            <label htmlFor="fa" className="font-farsi mx-3 grow">
              {t.farsi}
            </label>
          </a>
        </Link>

        <Link href="/" locale="en">
          <a className="whitespace-nowrap flex justify-start items-center mt-3">
            <input
              type="radio"
              id="en"
              name="language"
              value={lang}
              checked={locale === "en" ? true : false}
              onChange={onChangeHandler}
            />
            <label htmlFor="en" className=" mx-3 grow">
              {t.english}
            </label>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Language;
