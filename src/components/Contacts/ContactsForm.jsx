import React from 'react';
import PropTypes from 'prop-types';
import styles from './contacts.module.css';

const ContactsForm = ({ text, name, number, onSubmit, onNameChange, onNumberChange }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={onNameChange}
          type="text"
          name="name"
          value={name}
        //   required
        />
        <label htmlFor="number">Number:</label>
        <input
          onChange={onNumberChange}
          type="text"
          name="number"
          value={number}
        //   required
        />
        <button className={styles.btn}>Add contact</button>
      </form>
    </div>
  );
};

ContactsForm.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
};

export default ContactsForm;
