import React, { Component } from "react";
import PropTypes from 'prop-types';

class QuestionDisplay extends Component {

  render() {
    const {onClickViewPoll, optionOne} = this.props;

    return(
      <div className="question-view">
        <p>Would you rather</p>
        <p>...{optionOne}...</p>
        <button onClick={onClickViewPoll}>View Poll</button>
      </div>
    )
  }
}

QuestionDisplay.propTypes = {
  onClickViewPoll: PropTypes.func.isRequired,
  optionOne: PropTypes.string.isRequired
}

export default QuestionDisplay;