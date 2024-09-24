import React, { useState } from "react";

// The profiles are stored directly here, like chapters of a book within the app
const employeeData = [
  {
    name: "Catherine Earnshaw",
    position: "Professional Position",
    email: "example@example.com",
    website: "www.example.com",
    phone: "+00 123 4567890",
    school: [
      { year: "2020 - 2025", degree: "Master of Business Administration", university: "University A" },
      { year: "2020 - 2025", degree: "Master of Business Administration", university: "University B" }
    ],
    experience: [
      { year: "2020 - 2025", role: "Physical Therapist", company: "Company A" },
      { year: "2020 - 2025", role: "Physical Therapy Assistant", company: "Company B" },
      { year: "2020 - 2025", role: "Nurse Practitioner", company: "Company C" }
    ],
    skills: [
      { name: "Aborro blandit", level: 4 },
      { name: "Malagna aliquam", level: 3 },
      { name: "Eaqui consent quisquam", level: 5 },
      { name: "Minim veniam", level: 4 }
    ]
  },
  {
    name: "John Doe",
    position: "Senior Software Engineer",
    email: "john.doe@example.com",
    website: "www.johndoe.com",
    phone: "+00 987 6543210",
    school: [
      { year: "2010 - 2014", degree: "Bachelor of Computer Science", university: "Tech University" },
      { year: "2015 - 2017", degree: "Master of Software Engineering", university: "Tech University" }
    ],
    experience: [
      { year: "2017 - 2020", role: "Software Engineer", company: "Tech Corp" },
      { year: "2020 - 2023", role: "Lead Developer", company: "Innovative Solutions" }
    ],
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "React", level: 5 },
      { name: "Node.js", level: 4 },
      { name: "Python", level: 5 }
    ]
  },
  // More employees can be added here in the same way...
];

const EmployeeProfileForm = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(employeeData[0]); // Start with the first employee

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
      {/* Dropdown to select an employee */}
      <div className="mb-4">
        <label className="font-bold mr-2">Select Employee:</label>
        <select
          value={selectedEmployee.name}
          onChange={(e) =>
            setSelectedEmployee(
              employeeData.find((emp) => emp.name === e.target.value)
            )
          }
          className="border p-2 rounded"
        >
          {employeeData.map((employee, index) => (
            <option key={index} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex">
        <div className="w-1/3 p-4 bg-gray-800 text-white rounded-l-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQcRtWVDjSpn8k9DDCETUsh-LL3HVJGDMaQ&s"
            alt="Employee"
            className="w-full mb-4 rounded-md"
          />
          <h2 className="text-2xl font-bold">{selectedEmployee.name}</h2>
          <p className="text-blue-300">{selectedEmployee.position}</p>
          <p className="mt-4">{selectedEmployee.email}</p>
          <p>{selectedEmployee.website}</p>
          <p>{selectedEmployee.phone}</p>
        </div>
        <div className="w-2/3 p-6 bg-white rounded-r-lg">
          {/* School Section */}
          <h3 className="text-xl font-semibold mb-4">School</h3>
          {selectedEmployee.school.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-600">{edu.year}</p>
              <p className="font-bold">{edu.degree}</p>
              <p className="text-gray-600">{edu.university}</p>
            </div>
          ))}

          {/* Work Experience Section */}
          <h3 className="text-xl font-semibold mt-6 mb-4">Work Experience</h3>
          {selectedEmployee.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-600">{exp.year}</p>
              <p className="font-bold">{exp.role}</p>
              <p className="text-gray-600">{exp.company}</p>
            </div>
          ))}

          {/* Skills Section */}
          <h3 className="text-xl font-semibold mt-6 mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {selectedEmployee.skills.map((skill, index) => (
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
