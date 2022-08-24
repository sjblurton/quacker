import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";
import { closeSignUpModel } from "src/context/Actions";
import { RootState } from "src/context/Store";
import QuackTimeline from "./QuackTimeline";

const SignUpModal = () => {
  const isOpen = useSelector(
    (state: RootState) => state.ReplayModal.ReplayModalOpen
  );
  return (
    <Dialog onClose={() => closeSignUpModel()} open={isOpen}>
      <QuackTimeline />
    </Dialog>
  );
};

export default SignUpModal;
