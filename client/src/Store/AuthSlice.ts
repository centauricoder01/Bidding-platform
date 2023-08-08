import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  Name: "",
  email: "",
  userID: "",
  Token: "",
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    add(state, action) {
      state.Token = action.payload.token;
      state.Name = action.payload.user.name;
      state.userID = action.payload.user._id;
      state.email = action.payload.user.email;
    },
  },
});

export const { add } = AuthSlice.actions;
export default AuthSlice.reducer;
