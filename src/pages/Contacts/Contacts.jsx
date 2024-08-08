import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList';
import ContactsForm from './ContactsForm';
import ContactDetail from './ContactDetail';
import Headr from 'components/Headr/Headr';
import Footer from 'components/Footer/Footer';
import styles from './contacts.module.css';
import axios from 'axios';

const Contacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [contactsList, setContacts] = useState([]); //создаём пустой масив для списка контактов
  const [selectedContact, setSelectedContact] = useState(null); // состояние для выбранного контакта
  const [search, setSearch] = useState(''); // состояние для поиска контакта

  // Функция получения контактов
  const getContacts = async () => {
    try {
      const response = await axios.get('https://64459dec0431e885f0014375.mockapi.io/name');
      setContacts(response.data); // Заполняем contactsList данными из API
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  // Используем useEffect, чтобы вызвать getContacts при загрузке страницы
  useEffect(() => {
    getContacts();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании

  // handleNameChange и handleNumberChange обновляют состояния name и number соответственно.
  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid(); // добавляет id к новосоздоному контакту
    const newContacts = { id, name, number };
    if (name !== '' || number !== '') {
      setContacts([...contactsList, newContacts]); //добавляем новый контакт в масив контактов
      Notify.success(`${name} successful added to your phonebook!`);
      console.log(newContacts);
      setName('');
      setNumber('');
    } else {
      Notify.failure('To add a contact you need to fill in all fields');
    }
  };

  const deleteContact = contact => {
    setContacts(contactsList.filter(c => c.id !== contact.id));
    Notify.success(`${contact.name} successful deleted from your phonebook!`);
  };
  //   1. contactsList.filter(...): Эта часть кода создает новый массив, содержащий только те контакты, у которых id не совпадает с id удаляемого контакта.
  //   2. (c) => c.id !== contact.id: Это стрелочная функция, которая проверяет каждый контакт c в contactsList. Если id текущего контакта c не совпадает с id контакта, который нужно удалить, то этот контакт включается в новый массив.
  //   3. setContacts(...): Функция setContacts обновляет состояние contactsList, заменяя его на новый отфильтрованный массив. Это приводит к повторному рендерингу компонента, отображающего список контактов, с обновленным списком, из которого исключен удаленный контакт.

  const findContact = e => {
    const searchContact = e.target.value;
    setSearch(searchContact);
    console.log(searchContact);
  };

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectContact = contact => {
    setSelectedContact(contact);
  };

  const closeContact = () => {
    setSelectedContact(null);
  };

  return (
    <div>
      <Headr />
      <ContactsForm
        className={styles.container}
        text="Phone Book"
        name={name}
        number={number}
        onNameChange={handleChangeName}
        onNumberChange={handleChangeNumber}
        onSubmit={handleSubmit}
      />
      {contactsList.length > 0 && (
        <ContactsList
          className={styles.container}
          name={search}
          contactsList={filteredContacts}
          onDeleteContact={deleteContact}
          onSelectContact={selectContact}
          onFindContact={findContact}
        />
      )}
      {selectedContact && (
        <ContactDetail contact={selectedContact} onClose={closeContact} />
      )}
      <Footer />
    </div>
  );
};

export default Contacts;
