import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import UserSelectionList from "./UserSelectionList"

class SignInContainer extends Component {

  onAddNewUser = (e) => {
    e.preventDefault();
    this.props.history.push(`/signup`);
  }

  render(){
    const {signedInUser, redirectPath} = this.props;

    return (
      <div className="signin-container">
        <h3>Welcome to the "Would you Rather" App</h3>
        <p className={!signedInUser.id ? "warning-text" : ""}>{!signedInUser.id && "In order to use app, "}Please Sign in to Continue</p>
        <UserSelectionList redirectPath={redirectPath}/>
        <button id="btn-add-user" onClick={this.onAddNewUser}>Sign Up a New User</button>
      </div>
    )
  }
}

function mapStateToProps({signedInUser}){
  return {signedInUser};
}

SignInContainer.propTypes = {
  redirectPath: PropTypes.string.isRequired
}

export default withRouter(connect(mapStateToProps)(SignInContainer));