import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../../locales/pages/home/en";
import fa from "../../locales/pages/home/fa";
import SearchBar from "./SearchBar";
import { GoGrabber } from "react-icons/go";
import Theme from "./Theme";
import Language from "./Language";
const Header = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  return (
    <div className=" pt-4">
      <div>
        <div className="flex justify-between">
          <GoGrabber style={{ fontSize: "2.5rem" }} />
          <Link href="/">
            <h1>
              <Image
                src="/images/logo.png"
                alt="zishop-logo"
                width={150}
                height={35}
              />
            </h1>
          </Link>
          <div className="flex justify-between items-center w-16  ">
            <Theme />
            <Language />
          </div>
        </div>
        <hr />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
