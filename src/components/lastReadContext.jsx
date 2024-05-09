import React, { createContext, useState, useContext } from 'react';

const LastReadContext = createContext();

export const useLastReadContext = () => useContext(LastReadContext);

export const LastReadProvider = ({ children }) => {
    const [lastReadBooks, setLastReadBooks] = useState({});

    return (
        <LastReadContext.Provider value={{ lastReadBooks, setLastReadBooks }}>
            {children}
        </LastReadContext.Provider>
    );
};
