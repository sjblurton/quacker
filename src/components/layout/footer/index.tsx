import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import StyledLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.light">
      {"Copyright © "}
      <Link href={"/"}>
        <StyledLink color="inherit">
          Quacker {new Date().getFullYear()}.
        </StyledLink>
      </Link>
    </Typography>
  );
}

const StickyFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Container maxWidth="sm" sx={{ color: "white" }}>
        <Typography variant="body1">
          Quacker chat app is a simple chat app built with Next.js.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default StickyFooter;
