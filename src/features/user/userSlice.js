import { createSlice } from "@reduxjs/toolkit";

// Initial state with a null currentUser
const initialState = {
  currentUser: null,
};

// Create the userSlice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
  },
});

// Export userReducer and setCurrentUser
export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;

// Selector function to get currentUser from the state
export const selectCurrentUser = (state) => state.user.currentUser;
