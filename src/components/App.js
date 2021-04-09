import React, { Component, Fragment } from 'react'
import {Route, Redirect, Switch, withRouter} from "react-router-dom";
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

    const {signedInUser} = this.props;
  
    return (
        <Fragment>
          <LoadingBar />
          <div className="container">
            <NavBar />
            <Switch>
              {/* if user not signed in and entered any address to address bar, 
                  it will direct to signin page,
                  and after signing in, it will redirect to the page he/she wants to access
                  if he/she tried to access directly to signin page, then will redirect to home page
              */}
              {!signedInUser.id && (
                <Route render={({location}) => {
                  // if not signed in, redirect to signin page whatever user enter the address bar except from /signin
                  // And for after logging in, provide initial address to redirect
                  if(location.pathname !== "/signin") {
                    console.log("Not Signed In, Goes to Sign in Page");
                    return <Redirect to={{
                      pathname: "/signin",
                      state: { redirectPath: `${location.pathname}` }
                    }} />
                  }else {
                    // if redirected to signin page from another address, that is coded right above, then redirectPath will have a value
                    // if come to signin page directly, then redirectPath won't have a value, so "/" will be assigned to redirect to home page
                    console.log("LOCATION: ", JSON.stringify(location));
                    const redirectPath = location.state ? location.state.redirectPath : "/";
                    return <SignInContainer redirectPath={redirectPath}/>
                  }
                }}/>
              )}
              
              {/* if signed in, continue with checking other routes*/}
              <Route path="/" exact component={Home} />
              <Route path="/add" component={NewQuestionContainer} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/questions/:question_id" component={Question} />
              <Route path="/add_user" component={AddUser} />
              <Route path="/signin" render={() => <SignInContainer redirectPath="/"/>}/>
            </Switch>
          </div>
        </Fragment>
    )
  }
}

function mapStateToProps({signedInUser, questions}){
  return {signedInUser}
}

export default withRouter(connect(mapStateToProps)(App));
