import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
      // console.log("Check state: ", state.currentUser);
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      //   console.log(action.payload);
      //   state.error = false;
    },
    setErrorState: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setErrorState, signInStart, signInSuccess, signInFailure } =
  userSlice.actions;

export default userSlice.reducer;
