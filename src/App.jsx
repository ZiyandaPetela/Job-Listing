/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import EmployeeLoginpage from "./Pages/EmployeeLoginpage";
import EmployeeSignUpPage from "./Pages/EmployeeSignUpPage";
import EmployeeProfileForm from "../src/Components/EmployeeProfileForm"; // Import EmployeeProfileForm from employees.jsx
import EmployerProfileForm from "../src/Components/EmployerProfileForm"; // Import EmployeeProfileForm from employees.jsx
import Application from "./Pages/Application";
import JobListingPage from "./Pages/JobListingPage/JobListingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/EmployeeLoginpage" element={<EmployeeLoginpage/>} />
        <Route path="/EmployeeSignUpPage" element={<EmployeeSignUpPage/>} />
        <Route path="/Application" element={<Application />} />
        <Route path="/EmployeeProfileForm" element={<EmployeeProfileForm/>} />
        <Route path="/EmployerProfileForm" element={<EmployerProfileForm/>} />
        <Route path="/JoblistingPage" element={<JobListingPage/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
