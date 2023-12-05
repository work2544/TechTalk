import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
type LanguageType = {
  language: string;
  next: boolean;
};
const initialValue: LanguageType = {
  language: "th",
  next: false,
};
const LangOptionReducer = createSlice({
  name: "language",
  initialState: initialValue,
  reducers: {
    chooseLang:(state:LanguageType,action:PayloadAction<string>)=>{
      state.language = action.payload;
      
    },
    Ontoggle:(state:LanguageType,action:PayloadAction<void>)=>{
      state.next=!state.next;
    }
  },
});
export const {chooseLang,Ontoggle} = LangOptionReducer.actions;
export const LangOptionSelector = (store: RootState) => store.language;
export default LangOptionReducer.reducer;
