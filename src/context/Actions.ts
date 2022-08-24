import { ReplayModalSlice } from "./Slices/ReplayModal";
import { SignUpModalSlice } from "./Slices/SignUpModal";
import { store } from "./Store";

export const closeReplayModel = () =>
  store.dispatch(ReplayModalSlice.actions.close());

export const openReplayModel = () =>
  store.dispatch(ReplayModalSlice.actions.open());

export const closeSignUpModel = () =>
  store.dispatch(SignUpModalSlice.actions.close());

export const openSignUpModel = () =>
  store.dispatch(SignUpModalSlice.actions.open());
