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
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/workouts" className="link">
              Workouts
            </Link>
          </li>
          <li>
            <Link href="/programs" className="link">
              Programs
            </Link>
          </li>

          <li className="link">About</li>
          <li className="link">Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
