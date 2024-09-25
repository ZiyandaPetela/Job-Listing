import React, { useState } from "react";

function Application() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would send the form data to a server, for now we can log it
    console.log("Form Submitted", formData);
    alert("Application Submitted! Thank you.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Apply for Senior UI/UX Designer</h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-4 p-2"
            placeholder="Your full name"
            required
          />

          <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-4 p-2"
            placeholder="Your email address"
            required
          />

          <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-4 p-2"
            placeholder="Your phone number"
            required
          />

          <label className="block text-sm font-medium mb-1" htmlFor="portfolio">Portfolio Link</label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-4 p-2"
            placeholder="Your portfolio link"
            required
          />

          <label className="block text-sm font-medium mb-1" htmlFor="message">Why Should We Hire You?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-4 p-2"
            placeholder="Tell us why you're a great fit"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Application;
