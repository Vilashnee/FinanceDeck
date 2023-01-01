import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [[
  {
    "amount": 1000,
    "category": "Travel",
    "type": "Expense",
    "date": "2023-01-05",
    "id": "29d40383-1071-465b-aa1b-3d7ec1acb93a"
  },
  {
    "amount": 1000,
    "category": "House",
    "type": "Expense",
    "date": "2023-01-05",
    "id": "93607305-8bcb-4f5e-bbbf-e8376431beb6"
  },
  {
    "amount": 3000,
    "category": "Business",
    "type": "Income",
    "date": "2023-01-06",
    "id": "6fd304e4-b099-413e-957b-a77df7c39f8d"
  }
]];


export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions , dispatch] = useReducer(contextReducer, initialState);
  //Action Creators

  const deleteTransaction = (id) => {dispatch({ type: 'DELETE_TRANSACTION', payload: id});}

  const addTransaction = (transaction) => {dispatch({type: 'ADD_TRANSACTION', payload: transaction});}

  let balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);
  
  return(
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}

