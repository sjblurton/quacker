import Logo from '@/assets/duck';
import LoginButton from '@/components/Features/LoginButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/">
            <Button
              sx={{ borderRadius: 8 }}
              variant="text"
              color="inherit"
              startIcon={<Logo width="36" />}
            >
              Quacker
            </Button>
          </Link>
          <LoginButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
