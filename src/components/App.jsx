import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Section, MainTitle, SecondaryTitle } from "./App-elements.styled";

const App = () => {

  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ]);
  const [filter, setFilter] = useState('');

  const addContact = (data) => {
    const newContact = { id: nanoid(), ...data };
    const isExist = contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase());

    if (isExist) {
      return alert(`${data.name} is already in contacts.`)
    };

    setContacts([
      ...contacts, newContact
    ]);
  };

  const deleteContact = (contactId) => {
    setContacts(
      contacts.filter(contact => contact.id !== contactId))
  };

  const onFilterChange = (e) => {
    let contactToFind = e.target.value.trim();
    setFilter (contactToFind);
  }

  const getFilteredContacts = () => {
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalisedFilter));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

    return (
          <Section>
            <MainTitle>Phonebook</MainTitle>
            <ContactForm onSubmit={addContact}/>
            <SecondaryTitle>Contacts</SecondaryTitle>
            <Filter onChange={onFilterChange} value={filter}/>
            <ContactList deleteContact={deleteContact} getFilteredContacts={getFilteredContacts}/>
          </Section>
        );
}

export default App;