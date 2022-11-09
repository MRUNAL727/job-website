export const filterReducer = (state, action)=>{

    switch(action.type){
        case "SET_FILTERS":{
           return {filters: action.payload}
        }
        case "CLEAR_FILTERS":{
            return {filters:null}
        }
        default: return state;
    }
}