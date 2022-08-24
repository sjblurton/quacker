import { User } from "@/interface/user";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";

type Props = {
  user: User;
};

const AvatarImage = ({ user }: Props) => {
  return (
    <Avatar
      sx={{ bgcolor: (theme) => theme.palette.secondary.main, borderRadius: 8 }}
    >
      <Image
        src={user.image}
        layout="fixed"
        width={36}
        height={36}
        alt={`avatar of ${user.name}`}
      />
    </Avatar>
  );
};

export default AvatarImage;
