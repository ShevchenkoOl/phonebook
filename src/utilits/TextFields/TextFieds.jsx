import styles from "./textFields.module.css";

const TextFields = ({label, ...props}) => {
    return ( 
   <label className={styles.label}>
        {label} 
        <input
        //  onChange={handleChange}
          className={styles.label}
          {...props}
        />
      </label>
    )
};

export default TextFields;