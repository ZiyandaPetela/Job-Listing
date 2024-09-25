/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "../src/Pages/Homepage"
import JobListingPage from "./Pages/JobListingPage/JobListingPage";
function App() {
  return (
    <>
     {/* <Homepage/> */}
     <JobListingPage />
    </>
  );
}

export default App;
