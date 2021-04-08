import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";

class LeaderBoard extends Component {
  render() {
    const {signedInUser} = this.props;

    if(!signedInUser.id){
      this.props.history.push(`/signin`);
      alert("In order to use app, please sign in");
    }

    return(
      <div>LeaderBoard</div>
    )
  }
}

function mapStateToProps({signedInUser}){

  return {
    signedInUser
  }
}

export default withRouter(connect(mapStateToProps)(LeaderBoard));