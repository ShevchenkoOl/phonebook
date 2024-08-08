import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
const NavBar = () => {
    return (
        <nav className={styles.navbar}>
          <Link to="/" className={styles.logo}>PhoneBook App</Link>
          <div className={styles.navLinks}>
            <Link to="/login" className={styles.navLink}>Log In</Link>
            <Link to="/signup" className={styles.navLink}>Sign Up</Link>
          </div>
        </nav>
    )
}

export default NavBar;
