import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.logo} href="/">
          GYM
        </Link>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/workouts">Workouts</Link>
          </li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
