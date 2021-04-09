import React, { Component } from "react";
import {connect} from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import {handleSignOut} from "../actions/signedInUser"

class NavBar extends Component {

    onSignOut = (e) => {
        e.preventDefault();
        this.props.dispatch(handleSignOut());
        // beacuse user signout, this means he/she tries to access signin page directly,
        // then redirect page if signing in again will be the home page "/"
        this.props.history.push('/signin');
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
                        <NavLink to="/add" activeClassName="active">
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" activeClassName="active">
                            LeaderBoard
                        </NavLink>
                    </li>
                </ul>
                {this.props.signedInUser.id && (
                    <ul className="nav-ul-right">
                        <li>
                            <img className="avatar" height={20} src={this.props.signedInUser.avatarURL} alt="avatar"/>
                        </li>
                        <li>
                            <p>Hello, {this.props.signedInUser.name}</p>
                        </li>
                        <li>
                            <button onClick={this.onSignOut}>
                                Sign Out
                            </button>
                        </li>
                    </ul>
                )}
                
            </nav>
        )
    }
    
}

function mapStateToProps({signedInUser}){
  
    return {
      signedInUser
    }
  }

export default withRouter(connect(mapStateToProps)(NavBar));