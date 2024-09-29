import React from "react";
import { useSelector } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";

const JobDetailPage = () => {
  const { jobDetails } = useSelector((store) => store.JobListings);

  return (
    <div className="md:grid grid-cols-[60fr_40fr] p-6 xs:flex flex-col">
      <div className=" pb-5">
        <div className=" text-3xl font-bold mb-3">Role as a {jobDetails.title}</div>
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
          <div className="text-lg font-semibold  mb-2">Responsibility:</div>
          <div className="leading-7 text-gray-600">{jobDetails.detail}</div>
        </div>
      </div>
      <div className="font-semibold pt-20 px-10">
        <div className=" text-lg">Details</div>
        <div>
          <div className="flex items-center justify-between">
            <div className=" text-gray-400 text-base">Compensation</div>
            <div>{jobDetails.salary}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-gray-400 text-base">Employment Type</div>
            <div>{jobDetails.role1}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-gray-400 text-base">Job</div>
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
