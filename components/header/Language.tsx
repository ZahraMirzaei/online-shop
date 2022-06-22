import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdLanguage } from "react-icons/md";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { useLanguage } from "../../hooks/useLanguage";
const Language = () => {
  const { t, locale } = useLanguage();
  const [lang, setLang] = useState(locale);
  const route = useRouter();

  const [openLang, setOpenLang] = useState(false);
  let ArrowDirection = !openLang ? HiChevronDown : HiChevronUp;

  useEffect(() => {
    document.documentElement.dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setLang(e.currentTarget.id);
  }

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setOpenLang((prevState) => !prevState)}
      >
        <div className="flex items-center  rounded-md py-1 px-2 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm">
          <MdLanguage
            style={{ fontSize: "1.4rem", margin: "0 0.1rem 0 0.1rem" }}
          />
          <p className="mx-[0.3rem] text-xs font-bold">
            {locale === "en" ? "English" : "فارسی"}
          </p>
          <div>
            <ArrowDirection />
          </div>
        </div>
      </div>
      {openLang ? (
        <>
          <div
            className="fixed inset-0 -z-1"
            onClick={() => setOpenLang(false)}
          ></div>
          <div
            className={`absolute top-9 ltr:right-0 rtl:left-0 bg-palette-card py-3 px-6 shadow-md rounded-md z-10`}
          >
            <Link href={`${route.asPath}`} locale="fa">
              <a className="whitespace-nowrap flex justify-between items-center">
                <div onClick={() => setOpenLang(false)}>
                  <input
                    type="radio"
                    id="fa"
                    name="language"
                    value={lang}
                    className="accent-rose-600"
                    checked={locale === "fa" ? true : false}
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="fa" className="font-farsi mx-3 grow">
                    {t.farsi}
                  </label>
                </div>
              </a>
            </Link>

            <Link href={`${route.asPath}`} locale="en">
              <a className="whitespace-nowrap flex justify-start items-center mt-3">
                <div onClick={() => setOpenLang(false)}>
                  <input
                    type="radio"
                    id="en"
                    name="language"
                    value={lang}
                    className="accent-rose-600"
                    checked={locale === "en" ? true : false}
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="en" className=" mx-3 grow">
                    {t.english}
                  </label>
                </div>
              </a>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Language;
