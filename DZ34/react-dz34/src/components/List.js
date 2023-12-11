import React from 'react';
import ListItem from './ListItem';

const List = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} index={index} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default List;