import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";

class LeaderBoard extends Component {
  render() {
    const {signedInUser} = this.props;

    if(!signedInUser.id){
      this.props.history.push(`/signin`);
    }

    const {users, ranks, numAnsweredQuestions, numCreatedQuestions, scores} = this.props;

    return(
      <div className="leaderboard">
        {Object.keys(ranks).map((userId) => (
          <li key={userId} className="user-rank">
            <div className="avatar-container">
              <img className="avatar" src={users[userId].avatarURL} alt="avatar"/>
            </div>
            <div className="rank-detail">
              <p>{users[userId].name}</p>
              <div>
                <p className="inline-block left">Answered questions:</p>
                <p className="inline-block right">{numAnsweredQuestions[userId]}</p>
              </div>
              <div className="line-seperator"></div>
              <div>
                <p className="inline-block left">Created questions:</p>
                <p className="inline-block right">{numCreatedQuestions[userId]}</p>
              </div>
            </div>
            <div className="score-container">
              <div className={`rank rank-${ranks[userId]}`}>Rank: {ranks[userId]}</div>
              <div className="score-title">Score</div>
              <div className="score">{scores[userId]}</div>
            </div>
          </li>
        ))}
      </div>
    )
  }
}

function mapStateToProps({users, answers, questions, signedInUser}){
  const numAnsweredQuestions = {};
  const numCreatedQuestions = {};
  const scores = {};

  const userIds = Object.keys(users);

  for (const userId of userIds) {
    numAnsweredQuestions[userId] = Object.keys(answers)
      .filter((answerId) => answers[answerId].userId === userId).length;
    numCreatedQuestions[userId] = Object.keys(questions)
      .filter((questionId) => questions[questionId].author === userId).length;
    scores[userId] = numAnsweredQuestions[userId] + numCreatedQuestions[userId];
  }

  const sortedIds = Object.keys(scores).sort((idA, idB) => scores[idB] - scores[idA]);

  const ranks = {};
  let rank = 1;
  for (const userId of sortedIds) {
    ranks[userId] = rank;
    rank = rank + 1;
  }

  return {
    users,
    ranks,
    numAnsweredQuestions,
    numCreatedQuestions,
    scores,
    signedInUser
  }
}

export default withRouter(connect(mapStateToProps)(LeaderBoard));