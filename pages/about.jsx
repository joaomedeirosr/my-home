import AboutCode from "../components/AboutCode";
import styles from "../styles/AboutCode.css";

const AboutPage = () => {
  <AboutCode></AboutCode>;
  return <h3>Sobre mim</h3>;
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
