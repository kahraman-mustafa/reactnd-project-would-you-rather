import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import UserSelectionList from "./UserSelectionList"

class SignInContainer extends Component {

  render(){
    return (
      <div>
        <h3>Welcome to the "Would you Rather" App</h3>
        <p>Please Sign in to Continue</p>
        <UserSelectionList />
      </div>
    )
  }
}

export default connect()(SignInContainer);