import React, {Component} from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleSignIn, handleSignOut } from "../actions/signedInUser" 
import { handleFetchUsers, handleAddUser } from "../actions/users"
import { handleFetchAnswers, handleAddAnswer } from "../actions/answers"
import { handleFetchQuestions, handleAddQuestion } from "../actions/questions"
import SignInContainer from "./SignInContainer"

class App extends Component {
  // componentDidMount(){
  //   const user = {
  //     userName: "kahraman",
  //     name: "Mustafa Kahraman",
  //     avatarURL: "url"
  //   }

  //   const answer = {
  //     questionId: "8xf0y6ziyjabvozdd253nd",
  //     vote: "optionOne"
  //   }

  //   const question = {
  //     optionOneText: "Beşiktaş mı",
  //     optionTwoText: "Galatasaray mı"
  //   }

  //   this.props.dispatch(handleSignIn(user));

  //   this.props.dispatch(handleFetchUsers());
  //   this.props.dispatch(handleAddUser(user));

  //   this.props.dispatch(handleFetchAnswers());
  //   this.props.dispatch(handleAddAnswer(answer));

  //   this.props.dispatch(handleFetchQuestions());
  //   this.props.dispatch(handleAddQuestion(question));

  //   this.props.dispatch(handleSignOut());
  // }

  render() {
    return (
      <div>
        <LoadingBar />
        SIGN IN
        <SignInContainer />
      </div>
    )
  }
}

export default connect()(App);
