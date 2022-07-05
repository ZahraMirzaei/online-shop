import { createSlice } from "@reduxjs/toolkit";
import { ISettingBox } from "../lib/types/settingBox";

const initialState: ISettingBox = {
  isOpen: false,
};

const settingBoxSlice = createSlice({
  name: "settingBox",
  initialState,
  reducers: {
    openSettingBox(state) {
      state.isOpen = true;
    },
    closeSettingBox(state) {
      state.isOpen = false;
    },
    toggleSettingBox(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const settingBoxActions = settingBoxSlice.actions;

export default settingBoxSlice.reducer;
