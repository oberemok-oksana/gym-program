import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <h4 className={styles.title}>About</h4>
        <p className={styles.description}>
          Get fit and healthy with our comprehensive workout guide. Achieve your
          fitness goals today!
        </p>
        <Link href="/about" className={styles.button}>
          Read More
        </Link>
      </div>
      <div>
        <h4 className={styles.title}>Quick menu</h4>
        <ul className={styles.list}>
          <li>
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link href="/programs" className="link">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/workouts" className="link">
              Workouts
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="link">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className={styles.title}>Programs</h4>
        <ul className={styles.list}>
          <li>
            <Link href="/programs/upper_body" className="link">
              Upper body workout
            </Link>
          </li>
          <li>
            <Link href="/programs/legs" className="link">
              Lower body workout
            </Link>
          </li>
          <li>
            <Link href="/programs/fullbody" className="link">
              Full body workout
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className={styles.title}>Social media</h4>
        <ul className={styles.socials}>
          <li>
            <a href="https://www.facebook.com/">
              <img src="/images/facebook.svg" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src="/images/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              {" "}
              <img src="/images/twitter.svg" alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
