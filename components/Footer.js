import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <h4 className={styles.title}>About</h4>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          quos rem ullam, placeat amet.
        </p>
        <button className={styles.button}>Read More</button>
      </div>
      <div>
        <h4 className={styles.title}>Quick menu</h4>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Programs</a>
          </li>
          <li>
            <a href="#">Workouts</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className={styles.title}>Programs</h4>
        <ul className={styles.list}>
          <li>
            <a href="#">Upper body workout</a>
          </li>
          <li>
            <a href="#">Lower body workout</a>
          </li>
          <li>
            <a href="#">Full body workout</a>
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
