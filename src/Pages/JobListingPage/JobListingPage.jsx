import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "/images/logo-min-white.svg";
// import { IoMdNotifications } from "react-icons/io";
// import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import JobListingCards from "../../Components/JobListingCards";
import JobListingPageNavBar from "../../Components/JobListingPageNavBar";
// import { RxHamburgerMenu } from "react-icons/rx";


const JobListingPage = () => {
  return (
    <div className="">
               {/* NAVBAR */}
               <JobListingPageNavBar />
      <div className="flex lg:justify-between xs:justify-center items-center xl:text-lg lg:text-sm bg-black text-accent xl:px-9 lg:px-10 xl:py-6 lg:py-5 md:py-3 sm:py-2 xs:py-1">
        <div className="flex items-center xs:hidden lg:inline-flex">
          <span>
            <CiSearch className="p-1 rounded-full border border-accent bg-black text-white xl:text-3xl lg:text-2xl mr-3" />
          </span>
          <span className=" xl:mr-14 lg:mr-8">Design</span>
          <span>
            <RiArrowDropDownLine className=" text-white text-3xl" />
          </span>
          <span className=" w-7 h-1 rotate-90 ">
            {" "}
            <hr />{" "}
          </span>
        </div>
        <div className="flex items-center xs:hidden lg:inline-flex">
          <span>
            <IoLocationOutline className="p-1 rounded-full border border-accent bg-black text-white xl:text-3xl lg:text-2xl mr-3" />
          </span>
          <span className="xl:mr-14 lg:mr-8">UK</span>
          <span>
            <RiArrowDropDownLine className=" text-white text-3xl" />
          </span>
          <span className=" w-7 h-1 rotate-90 ">
            {" "}
            <hr />{" "}
          </span>
        </div>
        <div className="flex items-center xs:hidden lg:inline-flex">
          <span>
            <GiSkills className="p-1 rounded-full border border-accent bg-black text-white xl:text-3xl lg:text-2xl mr-3" />
          </span>
          <span className="xl:mr-14 lg:mr-8">Experience</span>
          <span>
            <RiArrowDropDownLine className=" text-white text-3xl" />
          </span>
          <span className=" w-7 h-1 rotate-90 ">
            {" "}
            <hr />{" "}
          </span>
        </div>
        <div className="flex items-center xs:hidden lg:inline-flex">
          <span>
            <GiPayMoney className="p-1 rounded-full border border-accent bg-black text-white xl:text-3xl lg:text-2xl mr-3" />
          </span>
          <span className="xl:mr-14 lg:mr-8">Salary</span>
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
              className="lg:w-full md:w-96 sm:w-80 text-black outline-none p-1 rounded-sm"
            />
          </div>
          <div>
            <CiSearch className="p-1 rounded-full border border-accent bg-black text-white xl:text-3xl lg:text-2xl md:text-3xl xs:text-2xl mr-3 " />
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
