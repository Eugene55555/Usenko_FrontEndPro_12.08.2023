import React, { useState } from 'react';

const AddContactForm = ({ onSaveContact, onCancel }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSaveContact = () => {
    onSaveContact({ firstName, lastName, phone });
    onCancel();
  };

  return (
    <form>
      <label htmlFor="firstName">Ім'я:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="lastName">Прізвище:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="phone">Телефон:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <br />
      <button type="button" onClick={handleSaveContact}>
        Зберегти
      </button>
      <button type="button" onClick={onCancel}>
        Скасувати
      </button>
    </form>
  );
};

export default AddContactForm;