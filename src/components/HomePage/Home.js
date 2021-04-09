import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import QuestionFilter from "./QuestionFilter";
import QuestionList from "./QuestionList";

class Home extends Component {

  state = {
    filterAnswered: false
  }

  onFilterByAnswered = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      filterAnswered: true
    }))
  }

  onFilterByUnanswered = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      filterAnswered: false
    }))
  }

  render() {

    return(
      <div>
        <QuestionFilter 
          onFilterByUnanswered={this.onFilterByUnanswered}
          onFilterByAnswered={this.onFilterByAnswered}
          filterAnswered={this.state.filterAnswered} />
        
        <QuestionList filterAnswered={this.state.filterAnswered} />

      </div>
    )
  }
}

function mapStateToProps({signedInUser}){
  return {signedInUser}
}

export default withRouter(connect(mapStateToProps)(Home));