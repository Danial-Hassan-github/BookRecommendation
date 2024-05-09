import React, { useEffect, useState } from 'react';
import { useLastReadContext } from './lastReadContext';

const LastReadForm = () => {
    const {lastReadBooks, setLastReadBooks } = useLastReadContext();

    const [books, setBooks] = useState({
        book1: '',
        book2: '',
        book3: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setBooks(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = () => {
        setLastReadBooks(books);
    };

    return (
        <>
            <form className="form-group mb-3">
                <label className="mark mt-2 mb-2">Enter at least one last read book</label>
                <div className="form-floating pb-3">
                    <input className="form-control" id="book1" placeholder="Book 1" onChange={handleInputChange} value={books.book1} />
                    <label htmlFor="book1">Enter Book 1</label>
                </div>
                <div className="form-floating pb-3">
                    <input className="form-control" id="book2" placeholder="Book 2" onChange={handleInputChange} value={books.book2} />
                    <label htmlFor="book2">Enter Book 2</label>
                </div>
                <div className="form-floating pb-3">
                    <input className="form-control" id="book3" placeholder="Book 3" onChange={handleInputChange} value={books.book3} />
                    <label htmlFor="book3">Enter Book 3</label>
                </div>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-primary d-flex flex-row-reverse" type="button" onClick={handleSubmit}>Search</button>
                </div>
            </form>
        </>
    );
};

export default LastReadForm;
