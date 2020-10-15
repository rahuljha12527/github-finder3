import React from "react";
import { connect } from "react-redux";
import * as  actionCreator from '../store/actions/action';
import ShowProfile from "./ShowProfile";
import "../App.css"; 

const Api = props => {
  const handleUsername = e => {
    props.changeUsername(e);
  };

  const handleSubmit=(e)=>{
     props.getUserData(e,props.username);

  }

  if(props.grapppedData===true){
      return <ShowProfile/>
  }
  return (
    <div id="form-data">
        <h2>{props.message}</h2>
        <br/>
        <br/>
      <input
        type="text"
        placeholder="Enter Github UserName."
        onChange={handleUsername}
        id="username"
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Search</button>
         <h3>{props.repos}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    repos: state.repos,
    following: state.following,
    followers: state.followers,
    message: state.message,
    grapppedData: state.grapppedData,
    image_url:state.image_url
  };
};

const mapDispatchedToProps = (dispatch) => {
  return {
      changeUsername:e=>dispatch(actionCreator.changeUsername(e)),
      getUserData:(e,username)=>dispatch(actionCreator.getUserData(e,username))
  };
};

export default connect(mapStateToProps, mapDispatchedToProps)(Api);
