import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {JobListingData} from "../Pages/JobListingPage/JobListingData";

const initialState = {
//   jobData: [],
  jobData: JobListingData,
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

export const { setJobData, getJobData } = JobListings.actions;

export default JobListings.reducer;
