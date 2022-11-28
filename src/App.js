import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./Components/Contacts";
import ContactForm from "./Components/ContactForm";
import { v4 as uuid } from "uuid";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Sam", number: "0240123456", location: "USA", id: uuid() },
    { name: "Nana", number: "0240652132", location: "Togo", id: uuid() },
    { name: "Aboagye", number: "0240123456", location: "Ghana", id: uuid() },
  ]);

  const addContact = (name, number, location) => {
    setContacts([...contacts, { name, number, location, id: uuid() }]);
  };

  function handleEdit(id, newInfo) {
    setContacts(
      contacts.map((contact) => (contact.id === id ? newInfo : contact))
    );
  }

  function handleDelete(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ContactForm addContact={addContact} />
        </div>
        <div className="col-md-6">
          <Contacts
            contacts={contacts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
