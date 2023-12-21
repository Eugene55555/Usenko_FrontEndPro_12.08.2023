import React, { useState, useEffect } from 'react';
import ContactTable from './ContactTable';
import AddContactForm from './AddContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDeleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const handleSaveContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <ContactTable contacts={contacts} onDeleteContact={handleDeleteContact} />
      <button onClick={() => setShowAddForm(true)}>Додати контакт</button>
      {showAddForm && (
        <AddContactForm onSaveContact={handleSaveContact} onCancel={() => setShowAddForm(false)} />
      )}
    </div>
  );
};

export default App;