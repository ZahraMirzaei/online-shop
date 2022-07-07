import type { NextPage } from "next";
import { useLanguage } from "../hooks/useLanguage";

const About: NextPage = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full lg:w-1/2 mt-8 md:mt-0 px-4 sm:px-8 md:px-0">
      <p className="leading-8 text-justify">{t.aboutLongText}</p>
      <p className="my-4">{t.aboutEnjoy}</p>
      <p>{t.myName}</p>
    </div>
  );
};

export default About;
