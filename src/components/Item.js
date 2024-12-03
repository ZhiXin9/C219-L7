import React from 'react';

function Item({ packingItem, updateItem, deleteItem }) {
  return (
    <li>
        <input
        type="checkbox"
        checked={packingItem.packed}
        onChange={() => updateItem(packingItem.id)} // Trigger the updateItem function
      />
      <span style={packingItem.packed ? { textDecoration: 'line-through' } : {}}>
        {packingItem.quantity} {packingItem.description}
      </span>
      <button onClick={() => deleteItem(packingItem.id)}>❌</button>
    </li>
  );
}

export default Item;
