import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Section, MainTitle, SecondaryTitle } from "./App-elements.styled";


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = (data) => {
    const newContact = {id: nanoid(), ...data};
    const isExist = this.state.contacts.find(({name}) => name.toLowerCase() === data.name.toLowerCase());

    if (isExist) {
      return alert(`${data.name} is already in contacts.`)
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }))
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
  }

  onFilterChange = (e) => {
    let contactToFind = e.target.value.trim();

    this.setState({
      filter: contactToFind,
    });
  }

  getFilteredContacts = () => {
    const {filter} = this.state;
    const normalisedFilter = filter.toLowerCase();
    return this.state.contacts.filter(({ name }) => name.toLowerCase().includes(normalisedFilter));
  }

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({
        contacts: savedContacts,
      })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    return (
          <Section>
            <MainTitle>Phonebook</MainTitle>
            <ContactForm onSubmit={this.addContact}/>
            <SecondaryTitle>Contacts</SecondaryTitle>
            <Filter onChange={this.onFilterChange} value={this.state.filter}/>
            <ContactList deleteContact={this.deleteContact} getFilteredContacts={this.getFilteredContacts}/>
          </Section>
        );
  }
}

export default App;