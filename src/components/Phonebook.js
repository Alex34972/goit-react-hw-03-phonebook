import React from "react";

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
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
        />
        <button>Add contact</button>
        <h2>Contacts</h2>
      </>
    );
  }
}
export default Phonebook;
