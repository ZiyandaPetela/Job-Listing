import React from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import employeeSignUpImg from "/images/employeeSignUpImg.jpg";
import { Link, useNavigate } from "react-router-dom";

const EmployeeSignUpPage = () => {
  const navigate = useNavigate();

  const submitSignUpForm = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className=" lg:grid grid-cols-[40fr_60fr] ">
      <div className=" lg:block xs:hidden">
        <img
          src={employeeSignUpImg}
          alt="image of a job listing employer"
          className="h-screen w-full object-cover"
        />
      </div>
      <div
        className="text-gray-600 font-medium lg:pt-24 lg:pb-10 lg:pr-28 lg:pl-16 md:py-20 md:px-10 sm:py-16 xs:py-14 sm:px-9 xs:px-8
       "
      >
        <div className=" md:text-2xl sm:text-xl xs:text-lg text-dark font-bold sm:mb-2 xs:mb-1">
          Sign Up
        </div>
        <div className=" md:text-base sm:text-sm xs:text-xs font-medium text-dark md:mb-7 sm:mb-6 xs:mb-5">
          Have an account already?{" "}
          <Link to="/EmployeeLoginpage">
            <span className="text-secondary hover:cursor-pointer">Login</span>
          </Link>
        </div>
        <form className="flex flex-col md:gap-4 sm:gap-3 xs:gap-2 xl:text-lg lg:text-base sm:text-sm xs:text-xs">
          <div>
            <label htmlFor="text" className=" sm:text-base xs:text-sm">
              Are you a/an?
            </label>
            <div className="flex md:gap-8 sm:gap-7 xs:gap-6 md:mt-2 xs:mt-1 xl:text-lg lg:text-base sm:text-sm xs:text-xs">
              <div className=" md:py-3 xs:py-1 md:pl-4 sm:pl-3 xs:pl-2 sm:pr-24 xs:pr-16 border rounded border-secondary text-secondary hover:cursor-pointer">
                Job Seeker
              </div>
              <div className=" md:py-3 xs:py-1 md:pl-4 sm:pl-3 xs:pl-2 sm:pr-24 xs:pr-16 border rounded border-gray hover:cursor-pointer ">
                Recruiter
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row xs:flex-col sm:gap-6 xs:gap-2">
            <div className=" w-full">
              <label htmlFor="text"> First Name </label> <br />
              <input
                type="text"
                name="firstName"
                className="w-full py-3 sm:pl-4 xs:pl-3 rounded border border-gray focus:outline-none
                "
                placeholder="First Name"
              />
            </div>
            <div className=" w-full">
              <label htmlFor="text"> Last Name </label> <br />
              <input
                type="text"
                name="lastName"
                className="w-full py-3 sm:pl-4 xs:pl-3 rounded border border-gray focus:outline-none"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="text"> Email </label> <br />
            <input
              type="email"
              name="email"
              required
              className="w-full py-3 sm:pl-4 xs:pl-3 rounded border border-gray focus:outline-none"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="w-full">
            <label htmlFor="text">Password </label> <br />
            <input
              type="password"
              name="password"
              required
              className="w-full py-3 sm:pl-4 xs:pl-3 rounded border border-gray focus:outline-none"
              placeholder="Enter Password"
            />
          </div>
          <div className="w-full">
            <label htmlFor="text">Confirm Password </label> <br />
            <input
              type="password"
              name="confirmPassword"
              required
              className="w-full py-3 sm:pl-4 xs:pl-3 rounded border border-gray focus:outline-none"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex sm:flex-row xs:flex-col sm:gap-6 xs:gap-2">
            <div className="w-full">
              <label htmlFor="gender">Gender:</label> <br />
              <select
                name="gender"
                placeholder="Select Gender"
                className="w-full py-3 sm:pl-4 xs:pl-3 rounded border border-gray focus:outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="text">Date of Birth </label> <br />
              <input
                type="text"
                name="dateOfBirth"
                className="w-full py-3 sm:pl-4 xs:pl-3 rounded border border-gray focus:outline-none"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <div className="flex sm:flex-row xs:flex-col sm:gap-6 xs:gap-2 sm:mb-4 xs:mb-3">
            <div className="w-full">
              <label htmlFor="text"> Country </label> <br />
              <select
                name="country"
                placeholder="Select Country"
                className="w-full py-3 sm:pl-4 xs:pl-3 rounded border border-gray focus:outline-none"
              >
                <option value="" disabled selected hidden>
                  Select Country
                </option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="text"> State </label> <br />
              <select
                name="state"
                id=""
                placeholder="Select Country First"
                className="w-full py-3 sm:pl-4 xs:pl-3 rounded border border-gray focus:outline-none"
              >
                <option value="" disabled selected hidden>
                  Select Country First
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center border border-dashed border-secondary md:py-6 sm:py-5 xs:py-4 hover:cursor-pointer">
            <IoCloudUploadSharp className=" self-center md:text-7xl sm:text-6xl xs:text-5xl text-secondary" />
            <span className=" md:text-xl sm:text-lg xs:text-base text-secondary">
              Click to upload your CV/Resume
            </span>
            <span className=" md:text-base sm:text-sm xs:text-xs">
              (Only PDF and doc/docx allowed)
            </span>
          </div>
          <div className="w-full">
            <div className=" md:mb-2 xs:mb-1">
              By registering, you agree to our{" "}
              <span className="text-secondary hover:cursor-pointer">
                Privacy Policy.
              </span>
            </div>
            <button
              onClick={submitSignUpForm}
              className=" text-white bg-black w-full md:py-3 sm:py-2 xs:py-3 rounded"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeSignUpPage;
