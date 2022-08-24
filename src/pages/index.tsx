import Layout from "@/components/layout";
import Feed from "@/Features/Feed";
import SEO from "@/Features/Seo";
import type { NextPage } from "next";
import useApi from "../hooks/useApi";

const Home: NextPage = () => {
  const { users, quacks } = useApi();
  return (
    <Layout>
      <SEO title="Home" />
      <Feed user={users[0]} quacks={quacks} />
    </Layout>
  );
};

export default Home;
