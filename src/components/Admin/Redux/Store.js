import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: localStorage.getItem("status") || null,
    token: localStorage.getItem("authToken") || null,
    userName: localStorage.getItem("userName") || null,
  },
  reducers: {
    login: (state, action) => {
      state.status = action.payload.status;
      state.token = action.payload.token;
      state.userName = action.payload.userName;
      // Update localStorage for persistence
      localStorage.setItem("status", action.payload.status);
      localStorage.setItem("authToken", action.payload.token);
      localStorage.setItem("userName", action.payload.userName);
    },
    logout: (state) => {
      state.status = null;
      state.token = null;
      state.userName = null;
      // Clear localStorage
      localStorage.clear();
      sessionStorage.clear();
    },
  },
});

// Export actions
export const { login, logout } = authSlice.actions;

// Configure the store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
