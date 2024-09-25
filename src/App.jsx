
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Application from "./Pages/Application";
import EmployeeSignUpPage from "./Pages/EmployeeSignUpPage";
import EmployeeLoginpage from "./Pages/EmployeeLoginpage";

import EmployeeProfileForm from "../src/Components/EmployeeProfileForm"; // Import EmployeeProfileForm from employees.jsx
import EmployerProfileForm from "../src/Components/EmployerProfileForm"; // Import EmployeeProfileForm from employees.jsx


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      
        <Route path="/EmployeeLoginpage" element={<EmployeeLoginpage />} />
        <Route path="/EmployeeSignupPage" element={<EmployeeSignUpPage />} />
        <Route path="/apply" element={<Application/>} />
        <Route path="/EmployeeProfileForm" element={<EmployeeProfileForm/>} />
        <Route path="/EmployerProfileForm" element={<EmployerProfileForm/>} />

        
      </Routes>
    </Router>
  );
}

export default App;
