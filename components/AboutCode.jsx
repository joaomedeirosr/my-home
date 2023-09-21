import styles from "../styles/AboutCode.css";

const AboutCode = [
  {
    social: "email",
    link: "joao.medeiros.ufu@gmail.com",
    href: "mailto:joao.medeiros.ufu@gmail.com",
  },
  {
    social: "github",
    link: "joaomedeirosr",
    href: "https://github.com/joaomedeirosr",
  },
  {
    social: "linkedin",
    link: "joaomedeirosr",
    href: "https://www.linkedin.com/in/joaomedeirosr/",
  },
  {
    social: "instagram",
    link: "jjjvmedeiros",
    href: "https://www.instagram.com/jjjvmedeiros/",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default AboutCode;
