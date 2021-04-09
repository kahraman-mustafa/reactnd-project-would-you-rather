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
import AddUser from './AddUser';

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
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" component={NewQuestionContainer} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/questions/:question_id" component={Question} />
              <Route path="/add_user" component={AddUser} />
              <Route path="/signin" component={SignInContainer} />
              <Route render={() => <Redirect to={{pathname: "/"}} />} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App);
