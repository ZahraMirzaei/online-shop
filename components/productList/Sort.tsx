import React, { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { BsFilterLeft, BsArrowDown } from "react-icons/bs";
import { radioBtnValue } from "../../mock/sortRadioInput";

const Sort = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("all");
  const { t } = useLanguage();

  const isRadioSelected = (value: string): boolean =>
    value === selectedRadioBtn ? true : false;

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedRadioBtn(e.currentTarget.id);
  }

  console.log(selectedRadioBtn);
  return (
    <div className="my-4 pb-2 flex flex-wrap border-b-2 border-slate-300">
      <div className="flex items-center">
        <div className="flex items-center">
          <BsFilterLeft style={{ fontSize: "1.5rem" }} />
          <BsArrowDown />
        </div>
        <h5 className="ltr:ml-1 rtl:mr-1">{t.sort}</h5>
      </div>

      <div className="flex flex-wrap items-center">
        {radioBtnValue.map((radioInput) => {
          return (
            <div key={radioInput} className="px-1 md:px-2 mx-2 my-1 sm:my-0">
              <label
                htmlFor={radioInput}
                className={`text-sm ${
                  radioInput === selectedRadioBtn
                    ? "text-palette-primary font-bold"
                    : "text-palette-mute/80 hover:text-palette-base transition-all "
                }`}
              >
                {t[radioInput]}
              </label>
              <input
                type="radio"
                className="hidden"
                id={radioInput}
                value={selectedRadioBtn}
                name="sortProduct"
                checked={isRadioSelected(radioInput)}
                onChange={onChangeHandler}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sort;
