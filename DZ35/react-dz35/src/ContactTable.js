import React from 'react';

const ContactTable = ({ contacts, onDeleteContact }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Телефон</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phone}</td>
            <td>
              <button onClick={() => onDeleteContact(index)}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;