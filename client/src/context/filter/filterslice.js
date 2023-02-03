import { createSlice, current } from '@reduxjs/toolkit';

 const initialState ={
  filters:{},
  jobsList:[],
 }

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters:(state, action)=>{
      state.filters = {}
      state.filters = action.payload

    },
    clearFilters:(state) =>{
      state.filters = {}
      state.jobsList = []
     console.log(state)
    },
    setQuery:(state, action) =>{
      state.setQuery = action.payload
      console.log('sdfgfgiusdfusdfukhfsdioh');
    },

    addJobs:(state, action)=>{
        // state.jobsList = state.jobsList.filter((item) => item._id === action.payload)

        state.jobsList = action.payload; 
     }
  },
});

export const { setFilters, clearFilters, addJobs, setQuery} = filterSlice.actions;

export default filterSlice.reducer;
