const Reducer = (state, action)=>{
    switch(action.type){ 
      case "LOGIN_START":{
        return {company:null};
      }
      case "LOGIN_SUCCESS":{
       return {company:action.payload};
     }
     case "LOGIN_FAILURE":{
       return {company:null};
     }
     case "LOGOUT":{
       return {company:null};
     }
      default: return state;
    }
 }
 
 export default Reducer 