import { createContext, useReducer, useEffect } from "react";
import filterReducer from './filterReducer'

const INITIAL_STATE = {
   filters: JSON.parse(sessionStorage.getItem('filters'))|| null
}

export const filterContext = createContext(INITIAL_STATE);

export const FilterContextProvider = ({ children})=>{

   const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE)

   useEffect(()=>{
      sessionStorage.setItem("filters", JSON.stringify(state.filters));
      window.onbeforeunload = () => {
     }
    })

   return(
    <filterContext.Provider value={{company:state.company, dispatch,}}>
       {children}
    </filterContext.Provider>
  )
}