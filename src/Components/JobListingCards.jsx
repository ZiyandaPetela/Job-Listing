import React from "react";
import { useSelector } from "react-redux";

const JobListingCards = () => {
  const { jobData } = useSelector((store) => store.JobListings);
  console.log(jobData);
  return (
    <div className="">
      <div className="flex justify-center items-center gap-3 text-black font-bold mb-8">
        <div className="text-3xl">Recommended Jobs </div>
        <div className=" text-2xl p-1 rounded-full bg-white  border border-black flex items-center justify-center w-8 h-8">
          6
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10">
        {jobData.map((job) => {
          return (
            <div
              key={job.id}
              className="text-black px-2 pt-2 pb-4 border border-black rounded-lg"
            >
              <div className="flex flex-col p-3 bg-secondary rounded-lg">
                <div className=" text-black text-sm py-1 px-3 w-fit rounded-lg bg-white font-medium mb-2">
                  {job.date}
                </div>
                <div className="text-black text-sm font-medium">
                  {job.company}
                </div>
                <div className=" text-lg font-semibold mb-3">{job.title}</div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <div className="py-1 px-3 w-fit rounded-lg bg-white">
                    {job.role1}
                  </div>
                  <div className="py-1 px-3  rounded-lg bg-white">
                    {job.role2}
                  </div>
                </div>
              </div>
              <div className="bg-white flex justify-between items-center mt-3">
                <div className="flex flex-col">
                  <div className=" text-sm font-semibold">{job.salary}</div>
                  <div className=" text-xs text-gray-400">{job.location}</div>
                </div>
                <div className=" text-gray-400 text-sm bg-black  py-1 px-3 w-fit rounded-2xl font-medium hover:cursor-pointer">
                  Details
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobListingCards;
