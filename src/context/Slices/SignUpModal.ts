import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SignUpModalOpen: false,
};

export const SignUpModalSlice = createSlice({
  name: "SignUpModal",
  initialState: initialState,
  reducers: {
    open: (state: typeof initialState) => {
      state.SignUpModalOpen = true;
    },
    close: (state: typeof initialState) => {
      state.SignUpModalOpen = false;
    },
  },
});
