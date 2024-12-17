import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const userPreferenceSlice = createSlice({
  name: "userPreference",
  initialState,
  reducers: {
    setUserPreference: (state, action) => {
      state.isDarkMode = action.payload.isDarkMode;
    },
    resetUserPreference: (state, action) => {
      state.isDarkMode = false;
    },
  },
});

export const { setUserPreference, resetUserPreference } =
  userPreferenceSlice.actions;

export default userPreferenceSlice.reducer;
