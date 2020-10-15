import React from "react";
import { connect } from "react-redux";
import * as  actionCreator from '../store/actions/action';

const Api = props => {
  const handleUsername = e => {
    props.changeUsername(e);
  };

  const handleSubmit=(e)=>{
     props.getUserData(e,props.username);

  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Github UserName."
        onChange={handleUsername}
      />
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
  };
};

const mapDispatchedToProps = (dispatch) => {
  return {
      changeUsername:e=>dispatch(actionCreator.changeUsername(e)),
      getUserData:(e,username)=>dispatch(actionCreator.getUserData(e,username))
  };
};

export default connect(mapStateToProps, mapDispatchedToProps)(Api);
