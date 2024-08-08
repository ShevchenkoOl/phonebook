import NavBar from 'components/NavBar/NavBar';
import styles from './headr.module.css';

const Headr = () => {
    return (
        <header className={styles.header}>
        <NavBar />
      </header>
    )
}

export default Headr;