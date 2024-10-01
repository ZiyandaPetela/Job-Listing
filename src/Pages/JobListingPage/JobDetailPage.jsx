import React from "react";
import { useSelector } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";

const JobDetailPage = () => {
  const { jobDetails } = useSelector((store) => store.JobListings);

  return (
    <div className="lg:grid grid-cols-[60fr_40fr] p-6 xs:flex flex-col">
      <div className=" pb-5">
        <div className=" md:text-3xl sm:text-2xl xs:text-xl font-bold sm:mb-3 xs:mb-2">Role as a {jobDetails.title}</div>
        <div className=" mb-2">
          <img
            src={jobDetails.image}
            alt=""
            srcset=""
            className=" rounded-lg"
          />
        </div>
        <div className="flex items-center text-gray-500 mb-5">
          {" "}
          <div>
            <IoLocationOutline className="p-1 rounded-full border border-accent bg-gary text-gray xl:text-3xl lg:text-2xl mr-3" />
          </div>
          <div>{jobDetails.location}</div>
        </div>
        <div>
          <div className="md:text-lg sm:text-base font-semibold  sm:mb-2 xs:mb-1">Responsibility:</div>
          <div className="leading-7 text-gray-600 sm:text-base xs:text-sm">{jobDetails.detail}</div>
        </div>
      </div>
      <div className="font-semibold sm:pt-20 xs:pt-8 sm:px-10 xs:px-3 sm:text-base xs:text-sm">
        <div className=" sm:text-lg xs:text-base">Details</div>
        <div>
          <div className="flex items-center justify-between">
            <div className=" text-gray-400 sm:text-base">Compensation</div>
            <div>{jobDetails.salary}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-gray-400">Employment Type</div>
            <div>{jobDetails.role1}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-gray-400">Job</div>
            <div>{jobDetails.role2}</div>
          </div>
        </div>
        <button className=" bg-primary hover:bg-purple-700 transition-all duration-200 py-2 px-8 text-base text-white rounded-sm w-full">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobDetailPage;
