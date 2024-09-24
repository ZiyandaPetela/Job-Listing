import React, { useState } from "react";

const EmployerProfileForm = () => {
  // Hardcoded employer data
  const [employer, setEmployer] = useState({
    companyName: "Tech Corp",
    industry: "Software Development",
    website: "www.techcorp.com",
    email: "contact@techcorp.com",
    phone: "+00 123 4567890",
    location: "1234 Tech Park, Silicon Valley, CA",
    overview:
      "Tech Corp is a leading software development company specializing in building cutting-edge technology solutions for businesses worldwide.",
    positionsAvailable: [
      { title: "Frontend Developer", location: "Remote", type: "Full-Time" },
      { title: "Backend Developer", location: "Silicon Valley, CA", type: "Full-Time" },
      { title: "Project Manager", location: "Silicon Valley, CA", type: "Contract" },
    ],
    reviews: [
      { author: "John Smith", review: "Great company to work for with amazing opportunities!" },
      { author: "Jane Doe", review: "Very supportive team and challenging projects." },
    ],
    perks: ["Remote Work", "Health Insurance", "Stock Options", "Flexible Hours"],
  });

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
      {/* Company Info */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">{employer.companyName}</h2>
        <p className="text-gray-600">{employer.industry}</p>
        <p className="mt-4 text-gray-700">{employer.overview}</p>

        <div className="mt-6">
          <p className="text-gray-600">
            <strong>Location:</strong> {employer.location}
          </p>
          <p className="text-gray-600">
            <strong>Website:</strong>{" "}
            <a href={`https://${employer.website}`} className="text-blue-500">
              {employer.website}
            </a>
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {employer.email}
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> {employer.phone}
          </p>
        </div>
      </div>

      {/* Available Positions */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800">Positions Available</h3>
        {employer.positionsAvailable.map((position, index) => (
          <div key={index} className="mt-4">
            <p className="font-semibold text-gray-700">{position.title}</p>
            <p className="text-gray-600">
              {position.location} - {position.type}
            </p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800">Employee Reviews</h3>
        {employer.reviews.map((review, index) => (
          <div key={index} className="mt-4">
            <p className="text-gray-700">"{review.review}"</p>
            <p className="text-gray-600 italic">- {review.author}</p>
          </div>
        ))}
      </div>

      {/* Perks */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800">Company Perks</h3>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          {employer.perks.map((perk, index) => (
            <li key={index}>{perk}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployerProfileForm;
