/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeProfileForm from "../src/Components/EmployeeProfileForm"; // Import EmployeeProfileForm from employees.jsx


function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 p-4">
          
          <nav>
            <ul className="flex space-x-4 mt-2">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/employee-profile" className="text-white">
                  Employee Profile
                </Link>
              </li>
              
            </ul>
          </nav>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<h2 className="text-center mt-8">Welcome to the Job Listing Project</h2>} />
          <Route path="/employee-profile" element={<EmployeeProfileForm />} />
          <Route path="/employer-profile" element={<EmployerProfileForm />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
