import { Quack } from "@/interface/quack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {
  quack: Quack;
};

const MessageBox = ({ quack }: Props) => {
  return (
    <CardContent>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
        {quack.message}
      </Typography>
    </CardContent>
  );
};

export default MessageBox;
