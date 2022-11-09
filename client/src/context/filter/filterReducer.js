const Reducer = (state, action)=>{

    switch(action.type){
        case "SET_FILTER":{
           return {filters: action.payload}
        }
        case "CLEAR_FILTER":{
            return {filters:null}
        }
        default: return state;
    }
}