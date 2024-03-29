import { Quack } from '@/interface/quack';
import { Box, Container } from '@mui/material';
import { DefaultSession } from 'next-auth';

import { CommentCard, QuackCard } from '../Card';
import ReplayModel from '../Modals/ReplayModel';

type Props = {
  quacks: Quack[];
  user: DefaultSession["user"];
};

const Feed = ({ user, quacks }: Props) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <ReplayModel />
      <Box
        minHeight={"calc(100vh - 64px)"}
        display="flex"
        flexDirection={"column"}
        width={"95%"}
        maxWidth={"500px"}
      >
        {user && <CommentCard user={user} />}
        {quacks.map((quack, i) => (
          <QuackCard key={i} quack={quack} />
        ))}
      </Box>
    </Container>
  );
};

export default Feed;
