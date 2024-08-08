import Headr from 'components/Headr/Headr';
import styles from './authPage.module.css';
import Footer from 'components/Footer/Footer';
import TextFields from 'utilits/TextFields/TextFieds';
import Button from 'utilits/Button/Button';
const AuthPage = () => {
    return (
        <>
        <Headr />
        <form className={styles.form}>
          <TextFields
            type="email"
            name="email"
            placeholder="Email"
          />
          <TextFields
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
            placeholder="Password"
          />
          <Button type="submit" text="Log in" />
        </form>
        <Footer />
        </>
    )
}

export default AuthPage;