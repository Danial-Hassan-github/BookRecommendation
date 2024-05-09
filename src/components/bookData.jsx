import React, { useEffect, useState } from 'react';
import { useLastReadContext } from './lastReadContext';

const API_KEY = 'AIzaSyAvrHwVs76DUrtE4xKIFCqcV-nH3usBzB8';

function BookData() {
  const [books, setBooks] = useState([]);
  const con = useLastReadContext();
    const { book1, book2, book3 } = con || {};

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${API_KEY}`);
      const data = await response.json();
      setBooks(data.items);
    }
    fetchData();
  }, []);

  return (
    <div>
      {alert(book1)}
      {books.map(book => (
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <h3>{book.volumeInfo.authors.join(', ')}</h3>
          <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BookData;