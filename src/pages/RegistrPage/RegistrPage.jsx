import Headr from 'components/Headr/Headr';
import styles from './registrPage.module.css';
import Footer from 'components/Footer/Footer';
import TextFields from 'utilits/TextFields/TextFieds';
import Button from 'utilits/Button/Button';
const RegistrPage = () => {
  return (
    <>
      <Headr />
      <form className={styles.form}>
        <TextFields
          type="text"
          name="username"
          placeholder="Enter your use name"
        />
        <TextFields type="email" name="email" placeholder="Enter your email" />
        <TextFields
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <Button type="submit" text="Register" />
      </form>
      <Footer />
    </>
  );
};

export default RegistrPage;
