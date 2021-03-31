import React, { Component } from "react";
import {connect} from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import {handleSignOut} from "../actions/signedInUser"

class NavBar extends Component {

    onSignOut = (e) => {
        e.preventDefault();
        this.props.dispatch(handleSignOut());
        this.props.history.push(`/signin`)
    }

    render(){

        return (
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/newQuestion" activeClassName="active">
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" activeClassName="active">
                            LeaderBoard
                        </NavLink>
                    </li>
                </ul>
                <ul className="nav-ul-right">
                    <li>
                        <p>Hello, {this.props.signedInUser.name}</p>
                    </li>
                    <li>
                        <button onClick={this.onSignOut}>
                            Sign Out
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
    
}

function mapStateToProps({signedInUser, users}){
  
    return {
      users, signedInUser
    }
  }

export default withRouter(connect(mapStateToProps)(NavBar));