import React from 'react';

export default function FilledCart() {
  const LocalStorage = JSON.parse(localStorage.getItem('cart'));
  return (
    <ul>
      {LocalStorage.map((item) => (
        <li>
          <img src={item.imageFront} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </li>
      ))}
    </ul>
  );
}
