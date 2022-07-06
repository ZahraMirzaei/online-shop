import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { settingBoxActions } from "../../store/settingBox-slice";
import Theme from "./theme/Theme";
import Language from "./language/Language";
import { ISettingBoxRootState } from "../../lib/types/settingBox";

const Settings = () => {
  const dispatch = useDispatch();

  const isSettingBoxOpen = useSelector(
    (state: ISettingBoxRootState) => state.settingBox.isOpen
  );

  function toggleShowSettingBox() {
    dispatch(settingBoxActions.toggleSettingBox());
  }

  function onCloseSettingBox() {
    dispatch(settingBoxActions.closeSettingBox());
  }

  return (
    <div className="relative md:hidden flex justify-between items-center z-[150]">
      <div onClick={toggleShowSettingBox}>
        <AiOutlineSetting style={{ fontSize: "1.5rem" }} />
      </div>
      {isSettingBoxOpen ? (
        <>
          <div
            className="fixed inset-0 -z-1 bg-black/20"
            onClick={onCloseSettingBox}
          ></div>
          <div className="absolute top-8 ltr:right-0 rtl:left-0 bg-palette-card shadow-md rounded-lg px-6 py-3 ">
            <Language />
            <hr className="my-1" />
            <Theme />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Settings;
