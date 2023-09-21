import ContactCode from "../components/ContactCode";
import Illustration from "../components/Illustration";
import ProjectCard from "../components/ProjectCard";

const AboutPage = () => {
  return (
    <div>
      <h2>Sobre Mim</h2>
      <br />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
