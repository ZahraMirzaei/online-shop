import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { settingBoxActions } from "../../../store/settingBox-slice";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "../../../hooks/useLanguage";
import LanguageItem from "./LanguageItem";

const Language = () => {
  const { t, locale } = useLanguage();
  const dispatch = useDispatch();
  const [openLang, setOpenLang] = useState(false);

  useEffect(() => {
    document.documentElement.dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);

  function onCloseLangBox(isOpen: boolean) {
    setOpenLang(isOpen);
  }

  return (
    <div className="relative rtl:ml-2 rtl:pl-2 ltr:mr-2 ltr:pr-2">
      <div className="md:hidden">
        <h3>{t.language}</h3>
        <div className={`ltr:ml-2 rtl:mr-2 mt-2 z-10`}>
          <LanguageItem
            language="en"
            onCloseBox={() => dispatch(settingBoxActions.closeSettingBox())}
          />
          <LanguageItem
            language="fa"
            onCloseBox={() => dispatch(settingBoxActions.closeSettingBox())}
          />
        </div>
      </div>
      <div
        className="hidden md:flex items-center cursor-pointer"
        onClick={() => setOpenLang((prevState) => !prevState)}
      >
        <p className="mx-[0.3rem] text-sm font-bold font-english">
          {locale === "en" ? "En" : "Fa"}
        </p>

        <MdLanguage style={{ fontSize: "1.4rem" }} />
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
            <LanguageItem language="fa" onCloseBox={onCloseLangBox} />
            <LanguageItem language="en" onCloseBox={onCloseLangBox} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Language;
