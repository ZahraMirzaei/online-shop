import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Footer = () => {
  const { t, locale } = useLanguage();
  const StartQuot = locale === "en" ? RiDoubleQuotesL : RiDoubleQuotesR;
  const EndQuot = locale === "en" ? RiDoubleQuotesR : RiDoubleQuotesL;
  return (
    <footer className="mt-12">
      <div className="border-t-[1px] border-slate-500/30">
        <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div>
      </div>
      <div className="border-t-[1px] border-slate-500/30 text-center text-xs md:text-sm py-4">
        <div>
          {t.copyRight}
          <BsFillSuitHeartFill
            style={{
              color: "#ee384e",
              margin: "0 0.3rem 0 0.3rem",
              fontSize: "1rem",
              display: "inline",
            }}
          />
          {locale === "en" ? "by Zahra Mirzaei" : "توسط زهرا میرزایی"}
        </div>
        <div className="py-1">
          <StartQuot
            style={{
              display: "inline",
              verticalAlign: "top",
              fontSize: "0.8rem",
              color: "#A71B4A",
            }}
          />
          {t.cafeDX}
          <EndQuot
            style={{
              display: "inline",
              verticalAlign: "top",
              fontSize: "0.8rem",
              color: "#A71B4A",
            }}
          />
          &nbsp;
          <a
            href="https://cafedx.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-palette-side underline font-bold bg-palette-primary px-2"
          >
            CafeDX
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
