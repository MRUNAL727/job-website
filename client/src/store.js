import { configureStore } from '@reduxjs/toolkit'
import companyReducer from './context/company/companySlice'
import filterReducer from './context/filter/filterslice'



export const store = configureStore({
  reducer: {
    company: companyReducer, 
    filter: filterReducer
  },
})
