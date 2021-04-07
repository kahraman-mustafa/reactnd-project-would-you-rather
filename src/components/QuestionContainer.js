import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import QuestionFilter from "./QuestionFilter";
import QuestionList from "./QuestionList";

class QuestionContainer extends Component {

  state = {
    displayAnswered: false
  }

  onFilterByAnswered = (e) => {
    e.preventDefault();
    console.log("Filter by Answered");
    this.setState((prevState) => ({
      displayAnswered: true
    }))
  }

  onFilterByUnanswered = (e) => {
    e.preventDefault();
    console.log("Filter by Unanswered");
    this.setState((prevState) => ({
      displayAnswered: false
    }))
  }

  render() {
    const {signedInUser} = this.props;
    
    if(!signedInUser.id){
      this.props.history.push(`/signin`);
      alert("In order to use app, please sign in");
    }

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

export default withRouter(connect(mapStateToProps)(QuestionContainer));