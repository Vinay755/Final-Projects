import React from "react";
import { useNavigate } from "react-router-dom";

const ExpensesList = ({ expenses, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="expenses-list-container">
      <h2>Expenses List</h2>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesList;
