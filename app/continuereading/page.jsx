"use client";

import { useEffect, useState } from 'react';
import { fetchBooks } from '@/components/fetchBooks';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const search = 'YOUR_SEARCH_QUERY'; // Replace with your search query
    fetchBooks(search)
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>Authors: {book.authors ? book.authors.join(', ') : 'Unknown'}</p>
            <p>Description: {book.description}</p>
            <img src={book.thumbnail} alt="" />
            {/* Render other book details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
