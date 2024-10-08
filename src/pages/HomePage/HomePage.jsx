import React from 'react';
import styles from './homePage.module.css';
import Headr from 'components/Headr/Headr';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Button from 'utilits/Button/Button';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Headr />
      <main className={styles.main}>
        <section className={styles.welcomeSection}>
          <h1>Welcome to PhoneBook App</h1>
          <p>Your personal and secure contact manager.</p>
          <div className={styles.actions}>
            <Link to="/signup" className={styles.btn}>
              <Button type="submit" text="Sing" />
            </Link>
            <Link to="/login" className={styles.btn}>
              <Button type="submit" text="Log in" />
            </Link>
          </div>
        </section>
        <section className={styles.featuresSection}>
          <h2>Features</h2>
          <ul>
            <li>Manage your contacts easily</li>
            <li>Search and filter your contacts</li>
            <li>Secure and private</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
