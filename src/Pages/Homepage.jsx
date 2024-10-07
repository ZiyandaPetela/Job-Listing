import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
    navigate("/Application"); // Navigate to the application form page
  };
  const findJobs = (e) => {
    e.preventDefault();
    navigate("/JoblistingPage");
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Navbar Section */}
      <nav className="bg-black text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link to="/" className="text-white">
              JobScout
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/JoblistingPage" className="hover:text-gray-300">
              Find Job
            </Link>
            <Link to="/hiring" className="hover:text-gray-300">
              Hiring
            </Link>
            <Link to="/community" className="hover:text-gray-300">
              Community
            </Link>
            <Link to="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/EmployeeLoginpage" className="hover:text-gray-300">
              Sign in
            </Link>
            <Link
              to="/EmployeeSignupPage"
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
            >
              Create Account
            </Link>
          </div>
        </div>
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
                Explore thousands of job opportunities and boost your career
                with our job listing platform.
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
          <h2 className="text-3xl font-bold text-center mb-8">
            2000+ Dream Job Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full mb-6"
              >
                <h3 className="text-xl font-bold mb-4">
                  Senior UI/UX Designer
                </h3>
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
          <h2 className="text-3xl font-bold text-center mb-8">
            Streamline Your Job Search with Advanced Features
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <p className="text-gray-600">
                  Filter jobs based on years of experience and find the perfect
                  match for your skill level.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Skill & Expertise</h3>
                <p className="text-gray-600">
                  Discover jobs that match your unique skillset with advanced
                  filtering options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            How Jobscout Works
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  Create a Free Account
                </h3>
                <p className="text-gray-600">
                  Get started by creating your free account and setting up your
                  profile.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Search Jobs</h3>
                <p className="text-gray-600">
                  Explore thousands of jobs and find your dream career
                  opportunities.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Apply for Jobs</h3>
                <p className="text-gray-600">
                  Submit your application and get closer to landing your dream
                  job.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-black">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Designs & Arts</h3>
              <p className="text-gray-600">200+ Jobs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <p className="text-gray-600">500+ Jobs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Marketing</h3>
              <p className="text-gray-600">300+ Jobs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Accounting</h3>
              <p className="text-gray-600">150+ Jobs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
            <h2 className="text-xl font-bold">
              Find your best opportunities today!
            </h2>
            <div className="mt-4 md:mt-0">
              <button
                onClick={findJobs}
                className="bg-white text-black py-3 px-6 rounded mr-4 hover:bg-gray-200"
              >
                Explore Jobs
              </button>
              <button className="bg-black border border-white text-white py-3 px-6 rounded hover:bg-gray-800">
                Start My Journey
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-lg">Jobscout</p>
            </div>

            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                Write us:{" "}
                <a href="mailto:support@jobscout.com" className="text-white">
                  support@jobscout.com
                </a>
              </p>
            </div>

            <div>
              <p>
                Call us:{" "}
                <a href="tel:02012345678" className="text-white">
                  020 123 4567 890
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center mt-8">
            <p className="text-gray-400">© 2024</p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white">
                Find Job
              </a>
              <a href="#" className="hover:text-white">
                Hiring
              </a>
              <a href="#" className="hover:text-white">
                Community
              </a>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
