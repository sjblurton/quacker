import Button from '@mui/material/Button';
import { signIn, signOut, useSession } from 'next-auth/react';

const LoginButton = () => {
  const { data: session } = useSession();
  console.log(session);

  if (!session) {
    return (
      <Button
        sx={{ p: 2, borderRadius: 8 }}
        color="inherit"
        onClick={() => signIn("google")}
      >
        Sign In
      </Button>
    );
  }
  return (
    <Button
      sx={{ p: 2, borderRadius: 8 }}
      color="inherit"
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  );
};

export default LoginButton;
