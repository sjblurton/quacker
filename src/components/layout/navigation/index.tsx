import Logo from "@/assets/duck";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

const Navbar = () => {
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
          <Button sx={{ p: 2, borderRadius: 8 }} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
