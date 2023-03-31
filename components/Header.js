import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.li}>Program</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
