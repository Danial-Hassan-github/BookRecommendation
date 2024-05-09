import React, { useEffect, useState } from 'react';
import { useLastReadContext } from './lastReadContext';

const API_KEY = 'AIzaSyAvrHwVs76DUrtE4xKIFCqcV-nH3usBzB8';

const Test = () => {
    const { books, setBooks } = useLastReadContext() || {}; // Ensure books object is defined
    const { book1, book2, book3 } = books || {}; // Handle potential undefined state


    useEffect(() => {
        alert(book1)
    }, [books]);

    return (
        <>
            
        </>
    );
}

export default Test;