import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      /* { id: "id-1", name: "Dmytro Iarkovenko", number: "459-12-56" },
      { id: "id-2", name: "Alexander Venik", number: "443-89-12" },
      { id: "id-3", name: "Viktoriia Shynkar", number: "645-17-79" },
      { id: "id-4", name: "Alexander Repeta", number: "227-91-26" }, */
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (JSON.parse(localStorage.getItem("contacts"))) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    const { contacts } = this.state;
    const newContact = {
      id: uuidv4(),
      name: data.name,
      number: this.editNumber(data.number),
    };
    contacts
      .map(contact => contact.name.toLowerCase())
      .includes(data.name.toLowerCase())
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibledContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  editNumber(string) {
    return (
      string.slice(0, 3) + "-" + string.slice(3, 5) + "-" + string.slice(5, 7)
    );
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibledContacts();
    return (
      <div className="App">
        <section>
          <h1 className="title">Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </section>
        <section>
          <h2 className="title">Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </section>
      </div>
    );
  }
}

export default App;
