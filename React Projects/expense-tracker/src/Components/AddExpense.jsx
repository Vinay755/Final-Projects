import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddExpense = ({ handleAddExpense }) => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setError("Please enter description and amount.");
    } else {
      const newExpense = {
        description,
        amount,
      };
      handleAddExpense(newExpense);
      navigate("/");
    }
  };

  return (
    <div className="add-expense-container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default AddExpense;
