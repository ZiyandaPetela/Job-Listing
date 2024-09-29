import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpened: true
}


const HamburgerSlice = createSlice({
  name: 'HamburgerSlice',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpened = true;
    },
    closeMenu: (state) => {
      state.isOpened = false;
    },
  },
});


export const { openMenu, closeMenu } = HamburgerSlice.actions;

export default HamburgerSlice.reducer;