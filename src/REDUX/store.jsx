import { configureStore } from "@reduxjs/toolkit";
import JobListings from "./JobListingSlice";

export const store = configureStore({
  reducer: {
    JobListings,
  },
});
