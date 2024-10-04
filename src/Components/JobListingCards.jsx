import React, { useState } from "react";
import { showJobDetail } from "../REDUX/JobListingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobListingCards = ({ search }) => {
  const { jobData } = useSelector((store) => store.JobListings);
  console.log(jobData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-center items-center gap-3 text-black font-bold mb-8">
        <div className="lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
          Recommended Jobs{" "}
        </div>
        <div className=" lg:text-xl md:text-xl sm:text-lg xs:text-base p-1 rounded-full bg-white  border border-black flex items-center justify-center w-8 h-8">
          {jobData.length}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xs:grid-cols-1 sm:grid-rows-2  gap-10">
        {/* {jobData
          .filter((job) => {
            return search.toLowerCase() === ""
              ? job
              : job.title.toLowerCase().includes(search)
          })
          .map((job) => {
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
                  <div
                    className=" text-white text-sm  bg-gray-800 hover:bg-black transition-all duration-100  py-1 px-3 w-fit rounded-2xl font-normal hover:cursor-pointer"
                    onClick={() => {
                      dispatch(showJobDetail(job.id));
                      navigate("/JobDetailPage");
                    }}
                  >
                    Details
                  </div>
                </div>
              </div>
            );
          })} */}

        {jobData.filter((job) => {
          return search.toLowerCase() === ""
            ? job
            : job.title.toLowerCase().includes(search);
        }).length === 0 ? (
          <div className=" col-span-full mx-auto font-medium ">
            NO RESULT FOUND
          </div>
        ) : (
          jobData
            .filter((job) => {
              return search.toLowerCase() === ""
                ? job
                : job.title.toLowerCase().includes(search);
            })
            .map((job) => {
              return (
                <div
                  key={job.id}
                  className="text-black px-2 pt-2 pb-4 border border-black rounded-lg"
                >
                  <div className="flex flex-col p-3 bg-secondary rounded-lg">
                    <div className="text-black text-sm py-1 px-3 w-fit rounded-lg bg-white font-medium mb-2">
                      {job.date}
                    </div>
                    <div className="text-black text-sm font-medium">
                      {job.company}
                    </div>
                    <div className="text-lg font-semibold mb-3">
                      {job.title}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <div className="py-1 px-3 w-fit rounded-lg bg-white">
                        {job.role1}
                      </div>
                      <div className="py-1 px-3 rounded-lg bg-white">
                        {job.role2}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white flex justify-between items-center mt-3">
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">{job.salary}</div>
                      <div className="text-xs text-gray-400">
                        {job.location}
                      </div>
                    </div>
                    <div
                      className="text-white text-sm bg-gray-800 hover:bg-black transition-all duration-100 py-1 px-3 w-fit rounded-2xl font-normal hover:cursor-pointer"
                      onClick={() => {
                        dispatch(showJobDetail(job.id));
                        navigate("/JobDetailPage");
                      }}
                    >
                      Details
                    </div>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};

export default JobListingCards;
