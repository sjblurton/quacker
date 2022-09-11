import Layout from '@/components/layout';
import Feed from '@/Features/Feed';
import SEO from '@/Features/Seo';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';

import useApi from '../hooks/useApi';

import type { NextPage } from "next";
const Home: NextPage = () => {
  const { users, quacks } = useApi();
  const { data: session } = useSession();
  return (
    <Layout>
      <SEO title="Home" />
      {session?.user ? (
        <Feed user={session.user} quacks={quacks} />
      ) : (
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "calc(100vh - 64px - 91px)",
            }}
          >
            <Typography>Logged out, Please login to chat.</Typography>
          </Box>
        </Container>
      )}
    </Layout>
  );
};

export default Home;
