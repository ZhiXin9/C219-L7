import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import Item from './Item';
function App() {
  const [items, setItems] = useState([]);

  // Add new item to the list
  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  // Update packed status of an item
  function handleUpdateItem(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Delete an item
  function handleDeleteItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList
        items={items}
        updateItem={handleUpdateItem}
        deleteItem={handleDeleteItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
