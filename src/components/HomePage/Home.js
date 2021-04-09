import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import QuestionFilter from "./QuestionFilter";
import QuestionList from "./QuestionList";

class Home extends Component {

  state = {
    displayAnswered: false
  }

  onFilterByAnswered = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      displayAnswered: true
    }))
  }

  onFilterByUnanswered = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      displayAnswered: false
    }))
  }

  render() {

    return(
      <div>
        <QuestionFilter 
          onFilterByUnanswered={this.onFilterByUnanswered}
          onFilterByAnswered={this.onFilterByAnswered}
          displayAnswered={this.state.displayAnswered} />
        
        <QuestionList displayAnswered={this.state.displayAnswered} />

      </div>
    )
  }
}

function mapStateToProps({signedInUser}){
  return {signedInUser}
}

export default withRouter(connect(mapStateToProps)(Home));