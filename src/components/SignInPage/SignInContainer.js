import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserSelectionList from "./UserSelectionList"

class SignInContainer extends Component {

  render(){
    const {signedInUser} = this.props;

    if(signedInUser.id){
      this.props.history.push(`/`);
      alert("You already signed in!");
    }

    return (
      <div className="signin-container">
        <h3>Welcome to the "Would you Rather" App</h3>
        <p>Please Sign in to Continue</p>
        <UserSelectionList />
      </div>
    )
  }
}

function mapStateToProps({signedInUser}){
  return {signedInUser};
}

export default withRouter(connect(mapStateToProps)(SignInContainer));