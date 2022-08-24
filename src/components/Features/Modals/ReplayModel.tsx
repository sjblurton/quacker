import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";
import { closeReplayModel } from "src/context/Actions";
import { RootState } from "src/context/Store";
import QuackTimeline from "./QuackTimeline";

const ReplayModel = () => {
  const isOpen = useSelector(
    (state: RootState) => state.ReplayModal.ReplayModalOpen
  );
  return (
    <Dialog onClose={() => closeReplayModel()} open={isOpen}>
      <QuackTimeline />
    </Dialog>
  );
};

export default ReplayModel;
