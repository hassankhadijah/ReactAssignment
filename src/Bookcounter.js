// BookCounter.js

import React, { useState } from 'react';

const BookCounter = ({ name, books }) => {
  const [bookCount, setBookCount] = useState(0);

  const handleCountBooks = () => {
    setBookCount(books.length);
  };

  return (
    <div className="bookcounter">
      <h2>{name} Book(0)↓</h2>
      <button onClick={handleCountBooks}>CountBooks</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookCounter;
