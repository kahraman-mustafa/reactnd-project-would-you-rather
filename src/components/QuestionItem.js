import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";

class QuestionItem extends Component {

  onViewPoll = (e) => {
    e.preventDefault();
    const {displayAnswered} = this.props;
    displayAnswered ? alert("View Question Results") : alert("View Question Detail");
  }

  render() {
    const {questionId, authorName, avatarURL, optionOne} = this.props;
    console.log(avatarURL);
    return(
      <li className="question-item" key={questionId}>
        <p className="author-asks">{authorName} asks:</p>
        <div className="question-item-content">
          <div className="avatar-container">
            <img className="avatar" src={avatarURL} alt="avatar"/>
          </div>
          <div className="question-view">
            <p>Would you rather</p>
            <p>...{optionOne}...</p>
            <button onClick={this.onViewPoll}>View Poll</button>
          </div>
        </div>
        
      </li>
    )
  }
}

function mapStateToProps({questions, users}, {questionId, displayAnswered}){

  const question = questions[questionId];
  const authorId = question.author;
  const optionOne = question.optionOne;

  const author = users[authorId];
  const authorName = author.name;
  const avatarURL = author.avatarURL;
  
  return {
    authorName,
    avatarURL,
    optionOne
  }
}

export default withRouter(connect(mapStateToProps)(QuestionItem));