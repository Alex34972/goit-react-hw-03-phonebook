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
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleAppend = () => {
    const { name, number } = this.state;
    const contactNew = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.noAddContact() === undefined
      ? this.setState(({ contacts }) => ({
          contacts: [contactNew, ...contacts],
        }))
      : alert(`${name} is alredy in contact`);

    this.reset();
  };

  getСontactSearch = event => {
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
  noAddContact = () => {
    const { name, contacts } = this.state;
    const find = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    return find;
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
        <Filter filter={filter} onChange={this.getСontactSearch} />
        <ContactList contacts={filterContacts} onDelete={this.deletContact} />
      </div>
    );
  }
}
export default Phonebook;
