import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
};

const SEO = ({ description, title }: Props) => {
  const defaultTitle = "Quacker Chat App";
  const defaultDescription =
    "Quacker Chat App, Quack away to your hearts content there no need for the truth here!";
  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const metaDescription = description ? description : defaultDescription;
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="icon" href="images/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="images/favicon-16x16.png"
      />
      <link lang="en" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  );
};

export default SEO;
