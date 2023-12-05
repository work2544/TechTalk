import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type LevelType = {
  level: number;
  next: boolean;
};
const initialValue: LevelType = {
  level: 1,
  next: false,
};
const LevelReducer = createSlice({
  name: "level",
  initialState: initialValue,
  reducers: {},
});
export const {} = LevelReducer.actions;
export const LevelSelector = (store: RootState) => store.level;
export default LevelReducer.reducer;
