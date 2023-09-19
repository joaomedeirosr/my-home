import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Joao Victor Rocha is an computer vision and Deep Learning engineer building amazing robots, cameras and embbed software"
      />
      <meta
        name="keywords"
        content="Joao Victor Rocha, joao victor, medeiros rocha, computer vision and deep learning portfolio, joao victor  computer vision engineer, joao victor deep learning engineer, joao victor rocha portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Joao Victor Rocha Portfolio" />
      <meta
        property="og:description"
        content="amazing robots, cameras and embbed software"
      />
      <meta property="og:image" content="https:" />
      <meta property="og:url" content="https://joaomedeirosr.com.br" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Nitin Ranganath",
};
