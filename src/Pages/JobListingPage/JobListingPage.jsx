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
import { RxHamburgerMenu } from "react-icons/rx";


const JobListingPage = () => {
  return (
    <div className="  ">
      <div className="flex justify-between items-center  text-accent  bg-black xl:px-9 lg:px-10 md:px-8 sm:px-11 xs:px-8 py-1 border-b-2 border-accent ">
        <div className="hover:cursor-pointer">
          <Link to="/">
            {" "}
            <img
              src={logo}
              alt="logo"
              srcset=""
              className=" xl:w-12 lg:w-10 md:w-8 sm:w-8 xs:w-7  xl:h-12 lg:h-9 md:h-9 sm:h-8 xs:h-7"
            />
          </Link>
        </div>
        <div className="flex lg:gap-10 md:gap-8 hover:cursor-pointer xl:text-xl lg:text-lg md:text-base md:pointer-events-auto md:opacity-100 md:visible xs:pointer-events-none xs:opacity-0 xs:invisible ">
          <div className=" hover:text-white hover:font-semibold">Find Job</div>
          <div className="hover:text-white hover:font-semibold">Messages</div>
          <div className="hover:text-white hover:font-semibold">Community</div>
          <div className="hover:text-white hover:font-semibold">FAQ</div>
        </div>
        <div className="flex lg:gap-7 md:gap-5 text-white xl:text-4xl lg:text-3xl md:text-2xl  hover:cursor-pointer md:pointer-events-auto md:opacity-100 md:visible xs:pointer-events-none xs:opacity-0 xs:invisible">
          <div>
            <IoMdNotifications className=" p-1 rounded-full border border-accent bg-black" />
          </div>
          <div>
            <IoMdSettings className=" p-1 rounded-full border border-accent bg-black" />
          </div>
        </div>
        <RxHamburgerMenu className=" text-2xl xs:pointer-events-auto xs:opacity-100 xs:visible md:hidden" />
        
      </div>
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
