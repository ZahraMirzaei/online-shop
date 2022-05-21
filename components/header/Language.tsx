import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NavLink from "next/link";
import { MdLanguage } from "react-icons/md";
const Language = () => {
  const { locale, locales, pathname } = useRouter();
  useEffect(() => {
    document.documentElement.dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);
  return (
    <div className="text-palette-base relative">
      <MdLanguage style={{ fontSize: "1.5rem" }} />
      <div className="absolute bg-palette-primary">
        <ul>
          <li className="px-5 py-2">
            <Link href="/" locale="fa">
              <a>Farsi-fa</a>
            </Link>
          </li>
          <li>
            <Link href="/" locale="en">
              <a>English-en</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Language;
