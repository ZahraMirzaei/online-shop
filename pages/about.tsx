import type { NextPage } from "next";
import { useLanguage } from "../hooks/useLanguage";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const About: NextPage = () => {
  const { t, locale } = useLanguage();
  const StartQuot = locale === "en" ? RiDoubleQuotesL : RiDoubleQuotesR;
  const EndQuot = locale === "en" ? RiDoubleQuotesR : RiDoubleQuotesL;
  return (
    <div className="flex w-full xl:max-w-[2100px] mx-auto">
      <div className="w-full lg:w-1/2 mt-8 md:mt-0 px-4 sm:px-8 md:px-0">
        <p className="leading-8 md:text-justify">{t.aboutLongText}</p>
        <br />
        <p>
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
        </p>
        <p className="my-4">{t.aboutEnjoy}</p>
        <p>{t.myName}</p>
      </div>
      <div className="hidden md:block flex-grow text-center">
        <Image
          src="/images/about-me.svg"
          alt="about me"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default About;
