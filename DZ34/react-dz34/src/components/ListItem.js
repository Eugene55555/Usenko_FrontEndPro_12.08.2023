import React from 'react';

const ListItem = ({ index, item, onDelete }) => {
  return (
    <li>
      {item} 
      <button onClick={() => onDelete(index)}>Видалити</button>
    </li>
  );
};

export default ListItem;