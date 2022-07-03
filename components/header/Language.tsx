import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdLanguage } from "react-icons/md";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { useLanguage } from "../../hooks/useLanguage";
import { IoLanguage } from "react-icons/io5";
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
    <div className="relative rtl:ml-2 rtl:pl-2 ltr:mr-2 ltr:pr-2">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setOpenLang((prevState) => !prevState)}
      >
        <div className="flex items-center ">
          <p className="mx-[0.3rem] text-sm font-bold font-english">
            {locale === "en" ? "En" : "Fa"}
          </p>

          <MdLanguage style={{ fontSize: "1.2rem" }} />
        </div>
      </div>
      {openLang ? (
        <>
          <div
            className="fixed inset-0 -z-1"
            onClick={() => setOpenLang(false)}
          ></div>
          <div
            className={`absolute top-6 ltr:right-0 rtl:left-0 bg-palette-card py-3 px-6 shadow-md rounded-md z-10`}
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
