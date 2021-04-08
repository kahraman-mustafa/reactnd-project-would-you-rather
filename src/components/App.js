import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared" 
import SignInContainer from "./SignInPage/SignInContainer"
import NavBar from "./NavBar";
import Home from "./HomePage/Home"
import NewQuestionContainer from "./NewQuestionContainer"
import LeaderBoard from "./LeaderBoard"
import Question from "./HomePage/Question";

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.loading === true 
              ? <SignInContainer />
              : <div>
                  <NavBar />
                  <Switch>
                    <Route path="/signin" exact component={SignInContainer} />
                    <Route path="/add" component={NewQuestionContainer} />
                    <Route path="/leaderboard" component={LeaderBoard} />
                    <Route path="/questions/:questionId" component={Question} />
                    <Route path="/" exact component={Home} />
                    <Route render={() => <Redirect to={{pathname: "/"}} />} />
                  </Switch>
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({signedInUser}){
  
  return {
    loading: signedInUser.userId === null || typeof(signedInUser.userId) === undefined,
  }
}

export default connect(mapStateToProps)(App);
