import { createContext, useReducer, useEffect } from "react";
import companyReducer from './companyReducer'

const INITIAL_STATE = {
  company: JSON.parse(sessionStorage.getItem('company'))|| null
}

export const companyContext = createContext(INITIAL_STATE)

export const ContextProvider = ({ children })=>{
   const [state, dispatch] = useReducer(companyReducer, INITIAL_STATE)

   useEffect(()=>{
     sessionStorage.setItem("company", JSON.stringify(state.company));
     window.onbeforeunload = () => {
    }
   })

   return(
     <companyContext.Provider value={{company:state.company, dispatch,}}>
        {children}
     </companyContext.Provider>
   )
}