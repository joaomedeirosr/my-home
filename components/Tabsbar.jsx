import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="sobre.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contatos.css" path="/contact" />
      <Tab icon="/python.svg" filename="projetos.py" path="/projects" />
    </div>
  );
};

export default Tabsbar;
