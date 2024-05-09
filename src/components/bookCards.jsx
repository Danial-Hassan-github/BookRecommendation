import React, { useEffect, useState } from 'react';
import { useLastReadContext } from './lastReadContext';

const API_KEY = 'AIzaSyAvrHwVs76DUrtE4xKIFCqcV-nH3usBzB8';

const BookCards = () => {
    const {lastReadBooks } = useLastReadContext() || {}; // Ensure books object is defined
    const { book1, book2, book3 } = lastReadBooks || {}; // Handle potential undefined state

    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        // Ensure books is defined before proceeding
        if (book1 !== undefined && book2 !== undefined && book3 !== undefined) {
            const fetchData = async () => {
                const userInput = [book1, book2, book3].filter(book => book && book.trim() !== ''); // Filter out empty strings and undefined values
                if (userInput.length > 0) {
                    const query = userInput.join('+OR+').replace(/\s/g, '+');
                    try {
                        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:Fiction&key=${API_KEY}`);
                        const data = await response.json();
                        setBooksData(data.items || []);
                    } catch (error) {
                        console.error('Error fetching books:', error);
                        setBooksData([]);
                    }
                } else {
                    setBooksData([]);
                }
            };

            fetchData();
        }
    }, [book1, book2, book3, lastReadBooks]);

    return (
        <>
            {(
                <div className="d-flex row flex-fill" style={{ height: "fit-content" }}>
                    {booksData.map(book => (
                            <div className='card col-4' key={book.id}>
                            {book.volumeInfo.imageLinks &&
                                <img src={book.volumeInfo.imageLinks.thumbnail} className='card-img' alt={book.volumeInfo.title} />
                            }
                            <div className='card-body'>
                                <h3 className='card-title'>{book.volumeInfo.title}</h3>
                                <h4>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</h4>
                            </div>
                            {/* <p>{book.volumeInfo.description}</p> */}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default BookCards;