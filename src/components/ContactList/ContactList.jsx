import React from "react";
import PropTypes from 'prop-types';
import { Contact, ContactInfo, DeleteButton } from "./ContactList.styled";

const ContactList = ({deleteContact, getFilteredContacts}) => {
    const filteredContacts = getFilteredContacts();
    return (
    <ul>{filteredContacts.map(({ id, name, number }) => (
        <Contact key={id}>
            <ContactInfo>{name}: {number}</ContactInfo>
            <DeleteButton onClick={() => {deleteContact(id)}}>Delete</DeleteButton>
        </Contact>))}
    </ul>
    )
}

ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    getFilteredContacts: PropTypes.func.isRequired,
  }

export default ContactList;