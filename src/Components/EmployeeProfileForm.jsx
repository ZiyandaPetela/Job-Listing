import React, { useState, useEffect } from "react";

const EmployeeProfileForm = () => {
  const [employee, setEmployee] = useState(null);

  // Fetch employee data from JSON file or API
  useEffect(() => {
    fetch("/employees.json") // Adjust the path based on where the JSON is located
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data[0]); // Assuming you want to load the first employee
      })
      .catch((error) => console.error("Error fetching employee data:", error));
  }, []);

  if (!employee) {
    return <div>Loading employee data...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
      <div className="flex">
        <div className="w-1/3 p-4 bg-gray-800 text-white rounded-l-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQcRtWVDjSpn8k9DDCETUsh-LL3HVJGDMaQ&s" alt="Employee" className="w-full mb-4 rounded-md" />
          <h2 className="text-2xl font-bold">{employee.name}</h2>
          <p className="text-blue-300">{employee.position}</p>
          <p className="mt-4">{employee.email}</p>
          <p>{employee.website}</p>
          <p>{employee.phone}</p>
        </div>
        <div className="w-2/3 p-6 bg-white rounded-r-lg">
          {/* School Section */}
          <h3 className="text-xl font-semibold mb-4">School</h3>
          {employee.school.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-600">{edu.year}</p>
              <p className="font-bold">{edu.degree}</p>
              <p className="text-gray-600">{edu.university}</p>
            </div>
          ))}

          {/* Work Experience Section */}
          <h3 className="text-xl font-semibold mt-6 mb-4">Work Experience</h3>
          {employee.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-600">{exp.year}</p>
              <p className="font-bold">{exp.role}</p>
              <p className="text-gray-600">{exp.company}</p>
            </div>
          ))}

          {/* Skills Section */}
          <h3 className="text-xl font-semibold mt-6 mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {employee.skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <p className="font-bold">{skill.name}</p>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div
                    className={`bg-blue-500 h-2.5 rounded-full`}
                    style={{ width: `${skill.level * 20}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileForm;
