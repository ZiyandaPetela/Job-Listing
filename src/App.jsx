/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import EmployeeProfileForm from "../src/Components/EmployeeProfileForm"; // Import EmployeeProfileForm from employees.jsx
import EmployerProfileForm from "../src/Components/EmployerProfileForm"; // Import EmployeeProfileForm from employees.jsx


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<EmployeeProfileForm/>} />
        <Route path="/" element={<EmployerProfileForm/>} />

        
      </Routes>
    </Router>
  );
}

export default App;
