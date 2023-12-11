import React, { useState } from 'react';

const Form = ({ onAdd }) => {
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() !== '') {
      onAdd(newItem);
      setNewItem('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newItem} onChange={handleInputChange} />
      <button type="submit">Додати</button>
    </form>
  );
};

export default Form;