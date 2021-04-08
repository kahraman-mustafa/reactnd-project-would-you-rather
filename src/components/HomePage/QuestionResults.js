import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

class QuestionResults extends Component {

  render() {
    const {optionOne, optionTwo, votesTotal, votesOptionOne, votesOptionTwo, userVote} = this.props;

    const isOptOneVoted = userVote === "optionOne" ? "option-voted" : "";
    const isOptTwoVoted = userVote === "optionTwo" ? "option-voted" : "";

    const percentVoteOne = Math.round(votesOptionOne/votesTotal*100);
    const percentVoteTwo = Math.round(votesOptionTwo/votesTotal*100);

    return(
      <div className="question-view">
        <p id="results-title">Results:</p>
        <p>Would you rather</p>

        <div className={`option-result ${isOptOneVoted}`}>
          <p>{optionOne}</p>

          <div className="vote-bar">
            {percentVoteOne === 0 && <span>{`% ${percentVoteOne}`}</span>}
            <div className="inline-block vote-percent" style={{width: `${percentVoteOne}%`}}>
              {percentVoteOne > 0 && `% ${percentVoteOne}`}
            </div>
          </div>

          <p className="inline-block">{votesOptionOne} of {votesTotal} votes</p>
          {isOptOneVoted && <p className="your-vote">*Your Vote*</p>}
        </div>

        <div className={`option-result ${isOptTwoVoted}`}>
          <p>{optionTwo}</p>

          <div className="vote-bar">
            {percentVoteTwo === 0 && <span>{`% ${percentVoteTwo}`}</span>}
            <div className="inline-block vote-percent" style={{width: `${percentVoteTwo}%`}}>
              {percentVoteTwo > 0 && `% ${percentVoteTwo}`}
            </div>
          </div>

          <p className="inline-block">{votesOptionTwo} of {votesTotal} votes</p>
          {isOptTwoVoted && <p className="your-vote">*Your Vote*</p>}
        </div>
      </div>
      
    )
  }
}

function mapStateToProps({answers, signedInUser}, props){
  const questionURLId = props.match.params.questionId;

  const questionAnswerIds = Object.keys(answers)
    .filter((answerId) => answers[answerId].questionId === questionURLId);

  const votesTotal = questionAnswerIds.length;

  const votesOptionOne = questionAnswerIds
    .filter((questionAnswerId) => answers[questionAnswerId].vote === "optionOne")
    .length;

  const votesOptionTwo = questionAnswerIds
    .filter((questionAnswerId) => answers[questionAnswerId].vote === "optionTwo")
    .length;

  const questionUserAnswerId = questionAnswerIds
    .filter((questionAnswerId) => answers[questionAnswerId].userId === signedInUser.id)[0];

  const userVote = answers[questionUserAnswerId].vote;

  return {votesTotal, votesOptionOne, votesOptionTwo, userVote}
}

QuestionResults.propTypes = {
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
}

export default withRouter(connect(mapStateToProps)(QuestionResults));