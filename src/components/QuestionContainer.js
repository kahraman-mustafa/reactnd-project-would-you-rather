import React, { Component } from "react";
import {connect} from "react-redux"
import {} from "../actions/answers"
import {} from "../actions/questions"

class QuestionContainer extends Component {

  state = {
    displayVoted: false
  }

  onToggle = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      displayVoted: !prevState.displayVoted
    }))
  }

  render() {
    return(
      <div>
        {this.state.displayVoted 
          ? JSON.stringify(this.props.answeredQuestionIds) 
          : JSON.stringify(Object.keys(this.props.questions).filter((id) => !this.props.answeredQuestionIds.includes(id)))}
        <button onClick={this.onToggle}>Toggle</button>
      </div>
    )
  }
}

function mapStateToProps({questions, answers, signedInUser}){
  const userAnswersIds = Object.keys(answers).filter((answerId) => answers[answerId].userId === signedInUser.id);
  const answeredQuestionIds = userAnswersIds.map((answerId) => answers[answerId].questionId);

  return {
    questions,
    answeredQuestionIds
  }
}

export default connect(mapStateToProps)(QuestionContainer);