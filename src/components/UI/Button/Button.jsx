import styles from "./button.module.css";

const Button = ({ text, onClick }) => {
  return <button className={styles.btn} onClick={onClick}>{text}</button>;
};

export default Button;