import React from 'react';
import Item from './Item'; // Import the Item component

function PackingList({ items, updateItem, deleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            packingItem={item}
            updateItem={updateItem} // Pass the updateItem function
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
