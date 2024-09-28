import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JobListingData } from "../Pages/JobListingPage/JobListingData";

const initialState = {
  //   jobData: [],
  jobData: JobListingData,
  jobDetails: {
    detail: "",
    date: "",
    title: "",
    company: "",
    role1: "",
    role2: "",
    salary: "",
    location: "",
    image: "",
  },
  loading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk("JobListings/fetchJobs", async () => {
  const response = await fetch("https://api.example.com/jobs");
  const data = await response.json();
  return data;

  //WILL REPLACE FETCH WITH AXIOS
  //   const data = await axios.get("https://api.example.com/jobs");
  //   return data;
});

const JobListings = createSlice({
  name: "JobListings",
  initialState,
  reducers: {
    setJobData: (state, action) => {
      state.jobData = action.payload;
    },
    getJobData: (state, action) => {
      state.jobData = action.payload;
    },
    showJobDetail: (state, action) => {
      const id = action.payload;
      // state.jobData.find((whichID) => whichID.id === id);
      console.log(id);
      state.jobDetails.detail = state.jobData[id - 1].detail;
      state.jobDetails.date = state.jobData[id - 1].date;
      state.jobDetails.title = state.jobData[id - 1].title;
      state.jobDetails.company = state.jobData[id - 1].company;
      state.jobDetails.role1 = state.jobData[id - 1].role1;
      state.jobDetails.role2 = state.jobData[id - 1].role2;
      state.jobDetails.salary = state.jobData[id - 1].salary;
      state.jobDetails.location = state.jobData[id - 1].location;
      state.jobDetails.image = state.jobData[id - 1].image;
      console.log(state.jobDetails.detail);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobData = action.payload;
        state.loading = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setJobData, getJobData, showJobDetail } = JobListings.actions;

export default JobListings.reducer;
