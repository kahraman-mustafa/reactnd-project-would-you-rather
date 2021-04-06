import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import {} from "../actions/answers"
import {} from "../actions/questions"

class QuestionContainer extends Component {

  state = {
    displayAnswered: false
  }

  onFilterByAnswered = (e) => {
    e.preventDefault();
    console.log("Filter by Answered");
    this.setState((prevState) => ({
      displayAnswered: true
    }))
  }

  onFilterByUnanswered = (e) => {
    e.preventDefault();
    console.log("Filter by Unanswered");
    this.setState((prevState) => ({
      displayAnswered: false
    }))
  }

  render() {
    const {signedInUser} = this.props;
    
    if(!signedInUser.id){
      this.props.history.push(`/signin`);
      alert("In order to use app, please sign in");
    }

    return(
      <div>
        <div className="filter unanswered" onClick={this.onFilterByUnanswered}>
          Show Unanswered Questions
        </div>
        <div className="filter answered" onClick={this.onFilterByAnswered}>
          Show Answered Questions
        </div>
        {this.state.displayAnswered 
          ? JSON.stringify(this.props.answeredQuestionIds) 
          : JSON.stringify(Object.keys(this.props.questions).filter((id) => !this.props.answeredQuestionIds.includes(id)))}
      </div>
    )
  }
}

function mapStateToProps({questions, answers, signedInUser}){
  const userAnswersIds = Object.keys(answers).filter((answerId) => answers[answerId].userId === signedInUser.id);
  const answeredQuestionIds = userAnswersIds.map((answerId) => answers[answerId].questionId);
  

  return {
    signedInUser,
    questions,
    answeredQuestionIds
  }
}

export default withRouter(connect(mapStateToProps)(QuestionContainer));