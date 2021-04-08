import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions"

class NewQuestionContainer extends Component {

  state = {
    optionOneText: "",
    optionTwoText: ""
  }

  onChangeOptionOneText = (e) => {
    this.setState(() => ({
      optionOneText: e.target.value
    }))
  }

  onChangeOptionTwoText = (e) => {
    this.setState(() => ({
      optionTwoText: e.target.value
    }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {optionOneText, optionTwoText} = this.state;
    console.log("Options: ", optionOneText + optionTwoText);
    this.props.dispatch(handleAddQuestion(optionOneText, optionTwoText));
    this.props.history.push(`/`);
    alert("New question added to poll!");
  }

  render() {
    const {signedInUser} = this.props;

    if(typeof(signedInUser.id) === undefined || !signedInUser.id){
      this.props.history.push(`/signin`);
      alert("In order to use app, please sign in");
    }

    const {optionOneText, optionTwoText} = this.state;

    return(
        <div className="new-question-container">
          <p className="new-question-title">Create a New Question</p>
          <div className="new-question-view">
            <p className="new-question-subtitle">Complete the question</p>
            <br/>
            <p className="new-question-text">Would you rather</p>
            <form className="new-question-form" onSubmit={this.onSubmit}>
              <input type="text" id="optionOne" name="optionOne" placeholder="Enter option 1 text" onChange={this.onChangeOptionOneText}/><br/>
              <label htmlFor="optionTwo">OR</label><br/>
              <input type="text" id="optionTwo" name="optionTwo" placeholder="Enter option 2 text" onChange={this.onChangeOptionTwoText}/><br/>
              <input type="submit" value="Submit" disabled={(!optionOneText || !optionTwoText)}/>
            </form>
          </div>
      </div>
    )
  }
}

function mapStateToProps({signedInUser}){

  return {
    signedInUser
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestionContainer));