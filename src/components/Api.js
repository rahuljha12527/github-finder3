import React from "react";
import { connect } from "react-redux";
import * as  actionCreator from '../store/actions/action';

const Api = props => {
  const handleUsername = e => {
    props.changeUsername(e);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Github UserName."
        onChange={handleUsername}
      />
      <br />
      <button>Search</button>
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
      changeUsername:e=>dispatch(actionCreator.changeUsername(e))
  };
};

export default connect(mapStateToProps, mapDispatchedToProps)(Api);
