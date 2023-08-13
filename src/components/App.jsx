import React, { Component } from "react";
import ReactDOM from "react-dom";

import { nanoid } from "nanoid";

import { AddContact } from "./AddContact/AddContact"
import { ContactsList } from "./ContactsList/ContactsList"
import { ContactFilter } from "./ContactFilter/ContactFilter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter : '',
    name : '',
    number: '',
  }

  addContact = (newName, newNumber) =>{
    this.setState(prevState => {
      return (
        {
          ...prevState,
          contacts : [...prevState.contacts, {id : nanoid(), name: newName, number: newNumber}]
        }
      )
    })
  }

  render() {

    return (
      <div>
        <h1>Phonebook</h1>
        <AddContact addContact={this.addContact}/>
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactsList contacts={this.state.contacts}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
