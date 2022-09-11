import CardContent from '@mui/material/CardContent';
import { DefaultSession } from 'next-auth';

import CommentInput from '../CommentInput';
import Container from './Container';
import Header from './Header';

type Props = {
  user: DefaultSession["user"];
};

const CommentCard = ({ user }: Props) => {
  return (
    <Container>
      <Header user={user} />
      <CardContent>
        <CommentInput placeholder="What do you want to quack about?" />
      </CardContent>
    </Container>
  );
};

export default CommentCard;
