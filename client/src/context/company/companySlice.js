import { createSlice } from '@reduxjs/toolkit';


export const companySlice = createSlice({
  name: 'company',
  initialState: {isLoggedin:false},
  reducers: {
    LOGIN_SUCCESS: (state) => {
      state.isLoggedin = true;
    },
    LOGIN_FAILURE: (state) => {
      //    return {company:null};
      state.isLoggedin = false;
    },
    LOGOUT: () => {
      //    return {company:null};
    },
  },
});

export const { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } = companySlice.actions;

export default companySlice.reducer;
