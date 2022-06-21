import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  const { t, locale } = useLanguage();
  return (
    <div>
      <div className="flex flex-wrap mt-12  py-8 px-4 border-t-[1px] border-slate-500/30">
        <FooterColumns />
        <SocialPart />
      </div>
      <div className="flex items-center justify-center border-t-[1px] border-slate-500/30 py-4 text-center">
        {t.copyRight}
        <BsFillSuitHeartFill
          style={{
            color: "red",
            margin: "0 0.3rem 0 0.3rem",
            fontSize: "1.3rem",
          }}
        />
        {locale === "en" ? "by Zahra Mirzaei" : "توسط زهرا میرزایی"}
      </div>
    </div>
  );
};

export default Footer;
