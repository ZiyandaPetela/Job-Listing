import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployerProfileForm from "./Components/EmployerProfileForm";
import EmployeeProfileForm from "./Components/EmployeeProfileForm"; // Add Employee Profile Form
import LandingPage from "./Components/LandingPage"; // Add Landing Page
import JobListingPage from "./Components/JobListingPage"; // Add Job Listing Page

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employer-profile">Employer Profile</Link>
          </li>
          <li>
            <Link to="/employee-profile">Employee Profile</Link>
          </li>
          <li>
            <Link to="/job-listings">Job Listings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for Employer Profile Form */}
        <Route path="/employer-profile" element={<EmployerProfileForm />} />

        {/* Route for Employee Profile Form */}
        <Route path="/employee-profile" element={<EmployeeProfileForm />} />

        {/* Route for Job Listing Page */}
        <Route path="/job-listings" element={<JobListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
