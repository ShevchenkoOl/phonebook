import React from "react";
import PropTypes from "prop-types";
import styles from "./contacts.module.css";
import ContactFind from "./ContactFind";

const ContactsList = ({
  contactsList,
  onDeleteContact,
  onSelectContact,
  name,
  onFindContact,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleH2}>Contacts List:</h2>
      <ContactFind name={name} onFindContact={onFindContact} />
      {contactsList.length > 0 ? (
      <ul className={styles.list}>
        {contactsList.map((contact) => (
          <li key={contact.id} className={styles.item}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <div className={styles.buttonGroup}>
              <button
                className={styles.btnDel}
                onClick={() => onDeleteContact(contact)}
              >
                Delete
              </button>
              <button
                className={styles.btn}
                onClick={() => onSelectContact(contact)}
              >
                Detail
              </button>
            </div>
          </li>
        ))}
      </ul>
       ) : (<h2 className={styles.title}>No contacts found</h2>)}
    </div>
  );
};

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactsList;
