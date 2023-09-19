import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>A NEW WORLD</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Joao Victor Rocha</h1>
            <h6 className={styles.bio}>
              Computer Vision and Deep Learning Engineer
            </h6>
            <Link href="/about">
              <button style={{ borderRadius: "8px" }} className={styles.button}>
                About Me
              </button>
            </Link>
            <Link href="/contact">
              <button
                style={{ borderRadius: "8px" }}
                className={styles.outlined}
              >
                Contacts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
