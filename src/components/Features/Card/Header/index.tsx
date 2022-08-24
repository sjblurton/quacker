import { Quack } from "@/interface/quack";
import { User } from "@/interface/user";
import CardHeader from "@mui/material/CardHeader";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import AvatarImage from "../../AvatarImage";

type Props = {
  user: User;
  quack?: Quack;
};

const Header = ({ quack, user }: Props) => {
  if (quack)
    return (
      <CardHeader
        avatar={<AvatarImage user={user} />}
        title={user.name}
        subheader={formatDistanceToNow(quack.createdAt, { addSuffix: true })}
      />
    );

  return <CardHeader avatar={<AvatarImage user={user} />} />;
};

export default Header;
