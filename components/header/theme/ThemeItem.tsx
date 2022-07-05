import { useTheme } from "next-themes";
import React from "react";
import { IconType } from "react-icons";
import { useLanguage } from "../../../hooks/useLanguage";
import { useDispatch, useSelector } from "react-redux";
import { settingBoxActions } from "../../../store/settingBox-slice";
import { ISettingBoxRootState } from "../../../lib/types/settingBox";

interface Props {
  theme: string;
  currentTheme?: string;
  Icon: IconType;
}
const ThemeItem: React.FC<Props> = ({ theme, Icon, currentTheme }) => {
  const { t } = useLanguage();
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const isSettingBoxOpen = useSelector(
    (state: ISettingBoxRootState) => state.settingBox.isOpen
  );

  function onThemeClickHandler() {
    setTheme(theme);
    isSettingBoxOpen && dispatch(settingBoxActions.closeSettingBox());
  }

  return (
    <div
      className={`flex items-center justify-start py-1 ${
        currentTheme && currentTheme === theme ? "font-bold" : ""
      }`}
      onClick={onThemeClickHandler}
    >
      <div role="button">
        <Icon
          style={{
            fontSize: "1.3rem",
            filter: "drop-shadow(0px 0px 5px rgb(0 0 0 / 0.3))",
          }}
        />
      </div>
      <h4 className="md:hidden rtl:mr-3 ltr:ml-3">{t[`${theme}`]}</h4>
    </div>
  );
};

export default ThemeItem;
