import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserProfileType {
  firstname: string;
  lastname: string;
  age: number;
}
const initialValue: UserProfileType = {
  firstname: "",
  lastname: "",
  age: 0,
};

const UserProfileReducer = createSlice({
  name: "UserProfile",
  initialState: initialValue,
  reducers: {
    submit: (state, action: PayloadAction<UserProfileType>) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.age = action.payload.age;
    },
   
  },
});
export const { submit } = UserProfileReducer.actions;
export const UserProfileSelector = (store: RootState) => store.userprofile;
export default UserProfileReducer.reducer;
