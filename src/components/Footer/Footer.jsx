import styles from './footer.module.css';
import { BsHeartFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        © 2024 | Developed
        <motion.div
          className={styles.heart}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            loop: Infinity,
          }}
        >
          <BsHeartFill color="#2108ff" />
        </motion.div>
        by Shevchenko O.
      </div>
    </footer>
  );
};

export default Footer;
