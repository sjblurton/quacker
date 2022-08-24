import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ReplayModalOpen: false,
};

export const ReplayModalSlice = createSlice({
  name: "ReplayModal",
  initialState: initialState,
  reducers: {
    open: (state: typeof initialState) => {
      state.ReplayModalOpen = true;
    },
    close: (state: typeof initialState) => {
      state.ReplayModalOpen = false;
    },
  },
});
