import { configureStore } from "@reduxjs/toolkit";
import JobListings from "./JobListingSlice";
import Hamburger from "./HamburgerSlice";

export const store = configureStore({
  reducer: {
    JobListings,
    Hamburger
    
  },
});
