import useApi from "@/hooks/useApi";
import { Quack } from "@/interface/quack";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";
import Actions from "./Actions";
import Container from "./Container";
import Header from "./Header";
import MessageBox from "./MessageBox";

type Props = {
  quack: Quack;
};

const QuackCard = ({ quack }: Props) => {
  const { users } = useApi();

  if (!quack) return <div>Loading...</div>;

  return (
    <Container>
      <Link href={`/${quack.postId}`}>
        <CardActionArea>
          <Header quack={quack} user={users[quack.userId]} />
          <MessageBox quack={quack} />
        </CardActionArea>
      </Link>
      <Actions inputButtons={false} />
    </Container>
  );
};

export default QuackCard;
