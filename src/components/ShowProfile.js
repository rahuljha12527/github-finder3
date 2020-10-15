import React from 'react';
import {connect} from 'react-redux';
import "../App.css";    


const ShowProfile=props=>{
    return (
        <div id="form-data">
            <img src={props.image_url} alt="Image not Found." />
        <h2>Username:{props.username}</h2>
         <h4>Repositories :{props.repos}</h4>
         <h4>Following :{props.following}</h4>
         <h4>Followers :{props.followers}</h4>
         <a href="/">Home</a>
        </div>
    )
}

const mapStateToProps=state=>{
  return {
    username: state.username,
    repos: state.repos,
    following: state.following,
    followers: state.followers,
    message: state.message,
    grapppedData: state.grapppedData,
    image_url:state.image_url
  }
};

export default connect(mapStateToProps,null)(ShowProfile);