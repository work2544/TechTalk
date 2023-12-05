import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
type StateType = {
  state: number;
};
const initialValue: StateType = {
  state: 0,
};
const StateReducer = createSlice({
  name: "state",
  initialState: initialValue,
  reducers: {
    nextState:(state:StateType,action:PayloadAction<void>)=>{
      state.state = state.state + 1
    }
  },
});
export const {nextState} = StateReducer.actions;
export const StateSelector = (store: RootState) => store.state;
export default StateReducer.reducer;
