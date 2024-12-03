import React from 'react';

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        You have {totalItems} items in your list. {packedItems} packed ({percentage}%).
      </em>
    </footer>
  );
}

export default Stats;
