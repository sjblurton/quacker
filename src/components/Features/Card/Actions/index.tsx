import CardActions from "@mui/material/CardActions";
import InputActionButtons from "./InputActionButtons";
import QuackActionButtons from "./QuackActionButtons";

type Props = {
  inputButtons: boolean;
};

const Actions = ({ inputButtons }: Props) => {
  return (
    <CardActions>
      {inputButtons ? <InputActionButtons /> : <QuackActionButtons />}
    </CardActions>
  );
};

export default Actions;
