import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  const { t, locale } = useLanguage();
  return (
    <footer className="mt-12">
      <div className="border-t-[1px] border-slate-500/30">
        <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap border-t-[1px] border-slate-500/30 py-4 text-center text-sm md:text-base">
        {t.copyRight}
        <BsFillSuitHeartFill
          style={{
            color: "#ee384e",
            margin: "0 0.3rem 0 0.3rem",
            fontSize: "1.3rem",
          }}
        />
        {locale === "en" ? "by Zahra Mirzaei" : "توسط زهرا میرزایی"}
      </div>
    </footer>
  );
};

export default Footer;
