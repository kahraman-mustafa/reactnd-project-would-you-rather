import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import Question from "./Question";

class QuestionList extends Component {

  render() {
    const {displayAnswered, answeredQuestionIds, questions} = this.props;

    const displayingQuestionIds =  displayAnswered 
      ? answeredQuestionIds
      : Object.keys(questions).filter((id) => !answeredQuestionIds.includes(id));
      
    return(
      <ul className="question-list">
        {displayingQuestionIds.map((questionId) => 
          <li className="question-item-container" key={questionId}>
            <Question questionId={questionId} displayAnswered={displayAnswered}/>
          </li>
        )}
      </ul>
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

export default withRouter(connect(mapStateToProps)(QuestionList));