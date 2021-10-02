import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    transactions: [
    {
        id: 1,
        text: 'Flower',
        amount: -75,
    },
    {
        id: 2,
        text: 'Salary',
        amount: 300,
    },
    {
        id: 3,
        text: 'Book',
        amount: -25,
    }
]
}

// Create context
export const GlobalContext = createContext(initialState);

//Provider compoinent
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    );
}