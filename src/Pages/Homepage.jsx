import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  // State for controlling the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle Apply button click
  const handleApplyClick = () => {
    navigate('/Application');
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Navbar Section */}
      <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="text-white">JobScout</Link>
        </div>
        
        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/JoblistingPage" className="block px-2 py-0 md:py-0 hover:text-gray-300">Find Job</Link>
          <Link to="/hiring" className="block px-2 py-1 md:py-0 hover:text-gray-300">Hiring</Link>
          <Link to="/community" className="block px-2 py-1 md:py-0 hover:text-gray-300">Community</Link>
          <Link to="/faq" className="block px-2 py-1 md:py-0 hover:text-gray-300">FAQ</Link>
        </div>

        {/* Account Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/EmployeeLoginpage" className="hover:text-gray-300">Sign in</Link>
          <Link to="/EmployeeSignupPage" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">Create Account</Link>
        </div>
      </div>

      {/* Mobile Navigation Links (Stack vertically) */}
      {/* {isOpen && (
        <div className="md:hidden mt-4">
          <Link to="/JoblistingPage" className="block px-2 py-1 hover:text-gray-300">Find Job</Link>
          <Link to="/hiring" className="block px-2 py-1 hover:text-gray-300">Hiring</Link>
          <Link to="/community" className="block px-2 py-1 hover:text-gray-300">Community</Link>
          <Link to="/faq" className="block px-2 py-1 hover:text-gray-300">FAQ</Link>
        </div>
      )} */}
    </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-6">
                Find Your Next Gig With Our Job Listing Platform.
              </h1>
              <p className="mb-6">
                Explore thousands of job opportunities and boost your career with our job listing platform.
              </p>
              <form className="flex flex-wrap mb-4">
                <input
                  className="w-full md:w-2/3 p-3 text-black rounded-l"
                  type="text"
                  placeholder="Search jobs by keyword"
                />
                <button className="w-full md:w-1/3 bg-indigo-500 p-3 text-white rounded-r hover:bg-indigo-700">
                  Search
                </button>
              </form>
            </div>
            <div className="md:w-1/2">
              <img
                className="w-full h-auto"
                src="https://plus.unsplash.com/premium_photo-1661630555383-c52c52b66fa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpdHRpbmclMjBvbiUyMGZsb29yfGVufDB8fDB8fHww"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">2000+ Dream Job Openings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full mb-6"
              >
                <h3 className="text-xl font-bold mb-4">Senior UI/UX Designer</h3>
                <p className="text-gray-600 mb-4">Remote</p>
                <button
                  onClick={handleApplyClick}
                  className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-700"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Streamline Your Job Search with Advanced Features</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <p className="text-gray-600">
                  Filter jobs based on years of experience and find the perfect match for
                  your skill level.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Skill & Expertise</h3>
                <p className="text-gray-600">
                  Discover jobs that match your unique skillset with advanced filtering
                  options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How Jobscout Works</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Create a Free Account</h3>
                <p className="text-gray-600">
                  Get started by creating your free account and setting up your profile.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Search Jobs</h3>
                <p className="text-gray-600">
                  Explore thousands of jobs and find your dream career opportunities.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Apply for Jobs</h3>
                <p className="text-gray-600">
                  Submit your application and get closer to landing your dream job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Browse Job Category Section */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Browse Job Category</h2>
          <p className="text-gray-400 mb-12">
            Looking for your next career opportunity? Look no further!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-black">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Designs & Arts</h3>
              <p className="text-gray-600">200+ Jobs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <p className="text-gray-600">200+ Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
