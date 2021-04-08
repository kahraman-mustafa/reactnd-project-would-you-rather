import React, { Component } from "react";
import PropTypes from 'prop-types';

class QuestionFilter extends Component {
  render() {

    return(
      <div className="flex-parent-horizontal">
        <div 
          className={this.props.displayAnswered ? "filter unanswered passive" : "filter unanswered active"}
          onClick={this.props.onFilterByUnanswered}>
          Show Unanswered Questions
        </div>
        <div 
          className={this.props.displayAnswered ? "filter answered active" : "filter answered passive"} 
          onClick={this.props.onFilterByAnswered}>
          Show Answered Questions
        </div>
      </div>
    )
  }
}

QuestionFilter.propTypes = {
  onFilterByUnanswered: PropTypes.func.isRequired,
  onFilterByAnswered: PropTypes.func.isRequired
}

export default QuestionFilter;