import Avatar from '@mui/material/Avatar';
import { DefaultSession } from 'next-auth';
import Image from 'next/image';

type Props = {
  user: DefaultSession["user"];
};

const AvatarImage = ({ user }: Props) => {
  return (
    <Avatar
      sx={{
        bgcolor: (theme) => theme.palette.secondary.main,
        borderRadius: 8,
        "& img": { borderRadius: 8 },
      }}
    >
      {user?.image && (
        <Image
          src={user.image}
          layout="fixed"
          width={36}
          height={36}
          alt={`avatar of ${user.name}`}
        />
      )}
    </Avatar>
  );
};

export default AvatarImage;
