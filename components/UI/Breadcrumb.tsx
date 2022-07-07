import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IBreadcrumb } from "../../lib/types/breadcrumb";
import { useLanguage } from "../../hooks/useLanguage";
import { BsShop } from "react-icons/bs";

const convertBreadcrumb = (str: string) => {
  return str
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
};

const Breadcrumb = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[] | []>([]);
  useEffect(() => {
    if (router) {
      const paths = router.asPath.split("/");
      paths.shift();

      const pathsArray = paths.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + paths.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathsArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className="flex text-[11px] sm:text-sm text-palette-mute dark:text-slate-300 mt-4 md:-mt-4 mb-3 md:my-none overflow-auto whitespace-nowrap">
      <nav className="flex py-3 px-2 sm:px-5 leading-6">
        <ul className="flex items-center space-x-1 md:space-x-3">
          <li className="cursor-pointer">
            <Link href="/">
              <a className="flex ltr:pr-2 rtl:pl-2">
                <span>
                  <BsShop style={{ fontSize: "1.2rem" }} />
                </span>
                <span className="ltr:ml-1 rtl:mr-1">{t.mainPage}</span>
              </a>
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, i) => {
            return (
              <li className="flex items-center" key={breadcrumb.href}>
                <span>/</span>
                <Link href={breadcrumb.href}>
                  <a className="inline-block px-2">
                    {t[convertBreadcrumb(breadcrumb.breadcrumb)]
                      ? t[convertBreadcrumb(breadcrumb.breadcrumb)]
                      : convertBreadcrumb(breadcrumb.breadcrumb)}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
