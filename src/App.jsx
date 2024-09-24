/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployerProfileForm from "../src/Components/EmployerProfileForm";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 p-4">
          
          <nav>
            <ul className="flex space-x-4 mt-2">
              
              
              
              {/* <li>
                <Link to="/employer-profile" className="text-white">
                  Employer Profile
                </Link>
                </li> */}
            </ul>
          </nav>
        </header>

        {/* Define Routes */}
        <Routes>
       
          <Route path="/employer-profile" element={<EmployerProfileForm />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
