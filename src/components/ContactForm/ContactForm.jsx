import React, { useState } from "react";
import { Form, Label, Input, Button } from "./Contactform.styled";
import PropTypes from 'prop-types';

const ContactForm = ({onSubmit}) => {

  const [contact, setContact] = useState({name: '', number: ''});

  const onInputChange = (e) => {
    setContact({
      ...contact,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(contact);
        setContact(
          {
            name: '',
            number: '',
        })
    };

        return(
        <Form onSubmit={onFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onInputChange}
            value={contact.name}
          />
        </Label>
        <Label>
          Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onInputChange}
              value={contact.number}
            />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>    
        
    )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;