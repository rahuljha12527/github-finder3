const initState = {
  username: "",
  repos: "",
  following: "",
  followers: "",
  message: "",
  grapppedData: false,
  image_url: "",
};

const reducer = (state = initState, action) => {
  if (action.type === "CHANGE") {
    let currentUsername = action.e.target.value;
    return {
      ...state,
      username: currentUsername,
    };
  } else if (action.type === "SUBMIT") {
    console.log(action.data);
    return {
      ...state,
      following: action.data.following,
      followers: action.data.followers,
      image_url: action.data.avatar_url,
      repos: action.data.public_repos,
      grapppedData:true 
    };
  }

  return state;
};

export default reducer;
