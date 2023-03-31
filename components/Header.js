import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a className={styles.logo} href="#">
          GYM
        </a>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>Program</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
