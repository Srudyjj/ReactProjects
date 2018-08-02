import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {

  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Armen Doe",
        email: "google@gmail.com",
        phone: "555-555-6666"
      },
      {
        id: 3,
        name: "Karen Doe",
        email: "arrle@gmail.com",
        phone: "777-555-6666"
      }
    ]
  }


  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </React.Fragment>
    )
  }
};

export default Contacts;