import React, {Component} from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleSignIn, handleSignOut } from "../actions/signedInUser" 
import { handleFetchUsers, handleAddUser } from "../actions/users"
import { handleFetchAnswers, handleAddAnswer } from "../actions/answers"

class App extends Component {
  componentDidMount(){
    const user = {
      userName: "kahraman",
      name: "Mustafa Kahraman",
      avatarURL: "url"
    }
    this.props.dispatch(handleSignIn(user));
    this.props.dispatch(handleFetchUsers());
    this.props.dispatch(handleAddUser(user));
  }

  render() {
    return (
      <div>
        <LoadingBar />
        SIGN IN
      </div>
    )
  }
}

export default connect()(App);
