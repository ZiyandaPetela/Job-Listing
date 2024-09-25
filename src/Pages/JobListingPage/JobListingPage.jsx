import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/images/logo-min-white.svg";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import JobListingCards from "../../Components/JobListingCards";

const JobListingPage = () => {
  return (
    <div className="  ">
      <div className="flex justify-between items-center text-xl text-accent  bg-black px-9 border-b-2 border-accent ">
        <div className="hover:cursor-pointer">
          <Link to='/'>
            {" "}
            <img src={logo} alt="logo" srcset="" />
          </Link>
        </div>
        <div className="flex gap-10 hover:cursor-pointer">
          <div className=" hover:text-white hover:font-semibold">Find Job</div>
          <div className="hover:text-white hover:font-semibold">Messages</div>
          <div className="hover:text-white hover:font-semibold">Community</div>
          <div className="hover:text-white hover:font-semibold">FAQ</div>
        </div>
        <div className="flex gap-7 text-white text-4xl  hover:cursor-pointer">
          <div>
            <IoMdNotifications className=" p-1 rounded-full border border-accent bg-black" />
          </div>
          <div>
            <IoMdSettings className=" p-1 rounded-full border border-accent bg-black" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-lg bg-black text-accent px-9 py-6">
        <div className="flex items-center">
          <span>
            <CiSearch className="p-1 rounded-full border border-accent bg-black text-white text-3xl mr-3" />
          </span>
          <span className=" mr-14">Design</span>
          <span>
            <RiArrowDropDownLine className=" text-white text-3xl" />
          </span>
          <span className=" w-7 h-1 rotate-90 ">
            {" "}
            <hr />{" "}
          </span>
        </div>
        <div className="flex items-center">
          <span>
            <IoLocationOutline className="p-1 rounded-full border border-accent bg-black text-white text-3xl mr-3" />
          </span>
          <span className=" mr-14">United Kingdom</span>
          <span>
            <RiArrowDropDownLine className=" text-white text-3xl" />
          </span>
          <span className=" w-7 h-1 rotate-90 ">
            {" "}
            <hr />{" "}
          </span>
        </div>
        <div className="flex items-center">
          <span>
            <GiSkills className="p-1 rounded-full border border-accent bg-black text-white text-3xl mr-3" />
          </span>
          <span className=" mr-14">Experience</span>
          <span>
            <RiArrowDropDownLine className=" text-white text-3xl" />
          </span>
          <span className=" w-7 h-1 rotate-90 ">
            {" "}
            <hr />{" "}
          </span>
        </div>
        <div className="flex items-center">
          <span>
            <GiPayMoney className="p-1 rounded-full border border-accent bg-black text-white text-3xl mr-3" />
          </span>
          <span className=" mr-14">Salary</span>
          <span>
            <RiArrowDropDownLine className=" text-white text-3xl" />
          </span>
          <span className=" w-7 h-1 rotate-90 ">
            {" "}
            <hr />{" "}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <input
              type="text"
              placeholder="Search a job"
              className="w-full text-black outline-none p-1 rounded-sm"
            />
          </div>
          <div>
            <CiSearch className="p-1 rounded-full border border-accent bg-black text-white text-3xl mr-3 " />
          </div>
        </div>
      </div>
      <div className=" bg-white mx-auto max-w-max py-8">
        {/* ------------JOB CARDS-------------- */}
        <JobListingCards />
      </div>
    </div>
  );
};

export default JobListingPage;
