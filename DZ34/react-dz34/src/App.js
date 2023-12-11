import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleAdd = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <h1>Список елементів:</h1>
      <Form onAdd={handleAdd} />
      <List items={items} onDelete={handleDelete} />
    </div>
  );
}

export default App;