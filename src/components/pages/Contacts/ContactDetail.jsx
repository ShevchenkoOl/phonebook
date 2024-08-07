import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

import styles from './contacts.module.css';

const ContactDetail = ({contact, onClose}) => {

return (
<div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <FaRegWindowClose className={styles.closeIcon} onClick={onClose} />
        <h2 className={styles.title}>Contact Detail</h2>
        <span className={styles.text}>{contact.name}: {contact.number}</span>
      </div>
    </div>
)
};

export default ContactDetail;