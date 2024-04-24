import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
// import AddExpense from "./components/AddExpense";
// import ExpensesList from "./components/e";
// import Login from "./components/Login";
// import Register from "./components/Register";

import AddExpense from "./Components/AddExpense";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ExpensesList from "./Components/ExpensesList";
function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  const PrivateRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleAddExpense = (expense) => {
    const newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
    localStorage.setItem("expenses", JSON.stringify(newExpenses));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute
                element={
                  <ExpensesList
                    expenses={expenses}
                    handleLogout={handleLogout}
                  />
                }
              />
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute
                element={<AddExpense handleAddExpense={handleAddExpense} />}
              />
            }
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
