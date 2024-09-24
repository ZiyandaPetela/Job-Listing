import React from "react";
import employeeLoginImg from "/images/employeeLoginImg.jpg";

const EmployeeLoginpage = () => {
  return (
    <div className="lg:grid grid-cols-[40fr_60fr] ">
      <div className="lg:block xs:hidden">
        <img
          src={employeeLoginImg}
          alt="image of a job listing employer"
          srcset=""
          className="w-full h-screen  object-cover"
        />
      </div>
      <div className="text-gray-600 font-medium lg:pt-52 xs:pt-20 lg:pr-28 lg:pl-16 md:px-10 sm:px-14 xs:px-8  ">
        <div className="text-2xl text-dark font-bold md:mb-2 xs:mb-1">
          Welcome back
        </div>
        <span className="md:text-base sm:text-sm xs:text-xs font-medium text-dark mb-10">
          Don't have an account?{" "}
          <span className="text-secondary hover:cursor-pointer">Sign Up</span>
        </span>
        <form action="" className="flex flex-col mt-10 gap-4 ">
          <div className="w-full">
            <label htmlFor="text"> Email </label> <br />
            <input
              type="email"
              name="email"
              required
              className="w-full py-3 pl-4 rounded border border-gray focus:outline-none"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="w-full">
            <label htmlFor="text">Password </label> <br />
            <input
              type="password"
              name="password"
              required
              className="w-full py-3 pl-4 rounded border border-gray focus:outline-none"
              placeholder="Enter Password"
            />
          </div>
          <div className=" flex justify-end text-secondary hover:cursor-pointer">
            Recover password
          </div>
          <button className=" text-white bg-black w-full py-3 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLoginpage;
