import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import { handleAddAnswer } from "../../actions/answers"
import PropTypes from 'prop-types';
import QuestionDetail from "./QuestionDetail";
import QuestionResults from "./QuestionResults";
import QuestionDisplay from "./QuestionDisplay";

class Question extends Component {

  onClickViewPoll = (e) => {
    e.preventDefault();
    const {questionId} = this.props;
    this.props.history.push(`/questions/${questionId}`);
  }

  onClickSubmit = (vote) => {
    const {questionId} = this.props;
    this.props.dispatch(handleAddAnswer(questionId, vote));
    this.props.history.push(`/questions/${questionId}`);
  }

  render() {
    const {showInPollList, authorName, avatarURL, optionOne, optionTwo, isQuestionAnswered} = this.props;
    
    return(
      <div className="question-item">
        <p className="author-asks">
          {showInPollList
            ? (`${authorName} asks:`) 
            : (isQuestionAnswered ? (`Asked by ${authorName}:`) : (`${authorName} asks:`))}
        </p>
        <div className="question-item-content">
          <div className="avatar-container">
            <img className="avatar" src={avatarURL} alt="avatar"/>
          </div>
          {showInPollList
            ? (<QuestionDisplay onClickViewPoll={this.onClickViewPoll} optionOne={optionOne}/>) 
            : (isQuestionAnswered 
                ? (<QuestionResults onClickSubmit={this.onClickSubmit} optionOne={optionOne} optionTwo={optionTwo}/>)
                : (<QuestionDetail onClickSubmit={this.onClickSubmit} optionOne={optionOne} optionTwo={optionTwo}/>))
          }
        </div>
        
      </div>
    )
  }
}

function mapStateToProps({questions, users, answers, signedInUser}, props){
  const questionId = props.questionId;
  const question = questions[questionId];

  const authorId = question.author;
  const optionOne = question.optionOne;
  const optionTwo = question.optionTwo;

  const author = users[authorId];
  const authorName = author.name;
  const avatarURL = author.avatarURL;

  // filterAnswered is sent from QuestionList view according to to filter user clicked
  // so if user clicked a question while listing answered ones, then displayAnswer and isAnswered will be true
  //    if user clicked a question while listing unanswered ones, then displayAnswer and isAnswered will be false
  // if this component displayed after user wrote the question id manuelly to address bar
  //    then displayAnswer prop will be null and isAnswer will also be
  let isQuestionAnswered = props.filterAnswered;

  // this i,ndicates that whether the question item will be shown in poll list or at another page itself
  const showInPollList = props.showInPollList;

  // if this component displayed after user wrote the question id manuelly then questionURLId will have value
  // then it will be checked that whether the question is answered by signed in user or not
  // then isQuestionAnswered variable will be overwritten
  if(!showInPollList){
    const userAnswersIds = Object.keys(answers).filter((answerId) => answers[answerId].userId === signedInUser.id);
    const answeredQuestionIds = userAnswersIds.map((answerId) => answers[answerId].questionId);
    isQuestionAnswered = answeredQuestionIds.includes(questionId);
  }

  return {questionId, showInPollList, authorName, avatarURL, optionOne, optionTwo, isQuestionAnswered, signedInUser}
}

Question.propTypes = {
  questionId: PropTypes.string.isRequired,
  showInPollList: PropTypes.bool.isRequired,
  filterAnswered: PropTypes.bool
}

export default withRouter(connect(mapStateToProps)(Question));