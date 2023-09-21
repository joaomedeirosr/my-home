import AboutCode from "../components/AboutCode";
import styles from "../styles/AboutCode.css";

const AboutPage = () => {
  return (
    <h3>
      <AboutCode></AboutCode>
    </h3>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
