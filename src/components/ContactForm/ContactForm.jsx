import React, { Component } from "react";
import { Form, Label, Input, Button } from "./Contactform.styled";
import PropTypes from 'prop-types';

class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    }

    onInputChange = (e) => {
        this.setState(
          {
            [e.currentTarget.name]: e.currentTarget.value,
        })
      }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(
          {
            name: '',
            number: '',
        })
    };

    render() {
        return(
        <Form onSubmit={this.onFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputChange}
            value={this.state.name}
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
              onChange={this.onInputChange}
              value={this.state.number}
            />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>    
        
    )}
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;