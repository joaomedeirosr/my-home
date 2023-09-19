const AboutPage = () => {
  return <h3>Sobre mim</h3>;
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
