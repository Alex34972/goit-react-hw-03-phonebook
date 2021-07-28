import React from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    this.setState(prevState => ({
      contacts: prevState.contacts.map(
        contact =>
          contact.name.toLowerCase() === value.toLowerCase() &&
          alert('is alredy in contact'),
      ),
    }));
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  handleAppend = () => {
    const { name, number } = this.state;
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.reset();
  };
  findContact = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };
  deletContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { name, number, filter } = this.state;
    const filterContacts = this.getFilterContacts();
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleChange}
          onHandleAppend={this.handleAppend}
          nameId={this.nameInputId}
          numberId={this.numberInputId}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.findContact} />
        <ContactList contacts={filterContacts} onDelete={this.deletContact} />
      </div>
    );
  }
}
export default Phonebook;
