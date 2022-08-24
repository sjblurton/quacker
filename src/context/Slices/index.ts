import { combineReducers } from "redux";
import { ReplayModalSlice } from "./ReplayModal";
import { SignUpModalSlice } from "./SignUpModal";

export const rootReducer = combineReducers({
  ReplayModal: ReplayModalSlice.reducer,
  SignupModal: SignUpModalSlice.reducer,
});
