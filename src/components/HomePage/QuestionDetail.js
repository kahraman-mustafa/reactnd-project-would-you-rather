import React, { Component } from "react";
import PropTypes from 'prop-types';

class QuestionDetail extends Component {

  state = {
    vote: null
  }

  onChange = (e) => {
    this.setState(() => ({
      vote: e.target.value
    }))
  }

  onClickSubmit = (e) => {
    e.preventDefault();
    this.props.onClickSubmit(this.state.vote);
  }

  render() {
    const {optionOne, optionTwo} = this.props;

    return(
      <div className="question-view">
        <p>Would you rather</p>
        <form onSubmit={this.onClickSubmit}>
          <input type="radio" id="optionOne" name="option" value="optionOne" onChange={this.onChange}/>
          <label htmlFor="optionOne">{optionOne}</label><br/>
          <input type="radio" id="optionTwo" name="option" value="optionTwo" onChange={this.onChange}/>
          <label htmlFor="optionTwo">{optionTwo}</label><br/>
          <input type="submit" value="Submit" disabled={!this.state.vote}/>
        </form>
      </div>
    )
  }
}

QuestionDetail.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
}

export default QuestionDetail;