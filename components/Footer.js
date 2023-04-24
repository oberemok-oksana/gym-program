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
        <button className={styles.button}>Read More</button>
      </div>
      <div>
        <h4 className={styles.title}>Quick menu</h4>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="/programs">Programs</Link>
          </li>
          <li>
            <Link href="/workouts">Workouts</Link>
          </li>
          <li>
            <Link href="#">Contacts</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className={styles.title}>Programs</h4>
        <ul className={styles.list}>
          <li>
            <Link href="/programs/upper_body">Upper body workout</Link>
          </li>
          <li>
            <Link href="/programs/legs">Lower body workout</Link>
          </li>
          <li>
            <Link href="/programs/fullbody">Full body workout</Link>
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
            {" "}
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
