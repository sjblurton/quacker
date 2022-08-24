import Actions from "@/Features/Card/Actions";
import TextField from "@mui/material/TextField";

type Props = {
  placeholder: string;
};

const CommentInput = ({ placeholder }: Props) => {
  return (
    <>
      <TextField
        id="standard-textarea"
        placeholder={placeholder}
        multiline
        variant="standard"
        fullWidth
      />
      <Actions inputButtons={true} />
    </>
  );
};

export default CommentInput;
