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
    const {signedInUser} = this.props;

    if(!signedInUser.id){
      this.props.history.push(`/signin`);
    }

    const {isQuestionIdValid, questionURLId, authorName, avatarURL, optionOne, optionTwo, isAnswered} = this.props;

    if(!isQuestionIdValid){
      return (<div className="question-item"><p className="warning-text">Invalid Question ID</p></div>);
    }
    
    return(
      <div className="question-item">
        <p className="author-asks">
          {!questionURLId
            ? (`${authorName} asks:`) 
            : (isAnswered ? (`Asked by ${authorName}:`) : (`${authorName} asks:`))}
        </p>
        <div className="question-item-content">
          <div className="avatar-container">
            <img className="avatar" src={avatarURL} alt="avatar"/>
          </div>
          {!questionURLId 
            ? (<QuestionDisplay onClickViewPoll={this.onClickViewPoll} optionOne={optionOne}/>) 
            : (isAnswered 
                ? (<QuestionResults onClickSubmit={this.onClickSubmit} optionOne={optionOne} optionTwo={optionTwo}/>)
                : (<QuestionDetail onClickSubmit={this.onClickSubmit} optionOne={optionOne} optionTwo={optionTwo}/>))
          }
        </div>
        
      </div>
    )
  }
}

function mapStateToProps({questions, users, answers, signedInUser}, props){
  // this will try to get question id from URL in case of user written manuelly to address bar
  const questionURLId = props.match.params.question_id;

  // displayAnswered is sent from QuestionList view according to to filter user clicked
  // so if user clicked a question while listing answered ones, then displayAnswer and isAnswered will be true
  //    if user clicked a question while listing unanswered ones, then displayAnswer and isAnswered will be false
  // if this component displayed after user wrote the question id manuelly to address bar
  //    then displayAnswer prop will be null and isAnswer will also be
  let isAnswered = props.displayAnswered;

  // questionId is determined by checking if user entered question id to address bar manuelly, 
  //                       so by checking if questionURLId have a value,
  // if questionURLId have a value 
  //    then questionId will be that value,
  // if questionURLId does not have a value, it means question is displayed by clicking from question list,
  //    then questionId will be assigned from questionId prop value provided when clicking from question list 
  const questionId = questionURLId ? questionURLId : props.questionId;

  const question = questions[questionId];
  
  // if questionId is valid, then question object will have a value
  // if questionId is not valid, then question object won't have a value
  const isQuestionIdValid = question ? true : false;

  // if the question tried to display is valid, required attributes will be fetched from store
  if(isQuestionIdValid){
    // if this component displayed after user wrote the question id manuelly then questionURLId will have value
    // then it will be checked that whether the question is answered by signed in user or not
    // then isAnswered variable will be overwritten
    if(questionURLId){
      const userAnswersIds = Object.keys(answers).filter((answerId) => answers[answerId].userId === signedInUser.id);
      const answeredQuestionIds = userAnswersIds.map((answerId) => answers[answerId].questionId);
      isAnswered = answeredQuestionIds.includes(questionURLId);
    }

    const authorId = question.author;
    const optionOne = question.optionOne;
    const optionTwo = question.optionTwo;

    const author = users[authorId];
    const authorName = author.name;
    const avatarURL = author.avatarURL;

    return {questionId, questionURLId, authorName, avatarURL, optionOne, optionTwo, isAnswered, isQuestionIdValid, signedInUser}
  } 
  // if the question tried to display is invalid, then only this information will be assigned to props to show warning message
  else {
    return {isQuestionIdValid, signedInUser}
  }
}

Question.propTypes = {
  questionId: PropTypes.string,
  displayAnswered: PropTypes.bool
}

export default withRouter(connect(mapStateToProps)(Question));