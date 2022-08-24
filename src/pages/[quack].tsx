import Feed from "@/components/Features/Feed";
import SEO from "@/components/Features/Seo";
import Layout from "@/components/layout";
import useApi from "@/hooks/useApi";
import { Quack } from "@/interface/quack";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Quack = () => {
  const { users, quacks, replies } = useApi();
  const { query } = useRouter();
  const [replay, setReplay] = useState<Quack[]>([]);
  const [quack, setQuack] = useState<Quack | undefined>(undefined);

  useEffect(() => {
    if (!quack) setQuack(quacks[Number(query.quack)]);

    if (quack) {
      const replyArray =
        quack.replies.length > 0
          ? quack.replies.map(
              (reply) => replies.filter((item) => item.postId === reply)[0]
            )
          : [];
      setReplay(replyArray);
    }
  }, [quack, replies, quacks, query.quack]);

  if (quack)
    return (
      <Layout>
        <SEO title={`${users[quack.userId].name} | ${quack.message}`} />
        <Feed quacks={[quack, ...replay]} />
      </Layout>
    );

  return <div>Loading...</div>;
};

export default Quack;
