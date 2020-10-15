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
    } else if(action.type==='SUBMIT'){
        console.log(action.data);
        return {
            ...state,

        }
    }

   return state;
}


export default reducer;