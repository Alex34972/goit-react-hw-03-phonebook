import React from "react";
import shortid from "shortid";
class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleAppend = () => {
    const { name, number } = this.state;
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.setState((prevSate) => ({
      contacts: [contact, ...prevSate.contacts],
    }));
  };
  render() {
    const { name, number, contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={this.nameInputId}
          onChange={this.handleChange}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          id={this.numberInputId}
          onChange={this.handleChange}
        />

        <button type="button" onClick={this.handleAppend}>
          Add contact
        </button>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}:{number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Phonebook;
