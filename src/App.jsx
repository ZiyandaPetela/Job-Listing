/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeProfileForm from "../src/Components/EmployeeProfileForm"; // Import EmployeeProfileForm from employees.jsx


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeProfileForm/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
