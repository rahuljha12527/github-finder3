const initState={
    username:"",
    repos:"",
    following:"",
    followers:"",
    message:"",
    grapppedData:false
};
  
const reducer=(state=initState,action)=>{
    if(action.type==="CHANGE"){
        let currentUsername=action.e.target.value;
        return {
            ...state,
            username:currentUsername
        };
    }
   return state;
}


export default reducer;