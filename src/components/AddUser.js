import React, { Component } from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import { handleAddUser } from "../actions/users"

class AddUser extends Component {

  state = {
    userId: "",
    name: ""
  }

  onChangeUserId = (e) => {
    this.setState(() => ({
      userId: e.target.value
    }))
    console.log(this.state);
  }

  onChangeName = (e) => {
    this.setState(() => ({
      name: e.target.value
    }))
    console.log(this.state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {userId, name} = this.state;
    this.props.dispatch(handleAddUser(userId, name));
    this.props.history.push(`/signin`);
    alert("New user added!");
  }

  render() {
    const {signedInUser, users} = this.props;

    if(signedInUser.id){
      alert("Sign out before adding a new user");
      this.props.history.push(`/`);
    }

    const {userId, name} = this.state;

    return(
        <div className="new-question-container">
          <p className="new-question-title">Create a New User</p>
          <div className="new-question-view">
            <p className="new-question-subtitle">Fill required fields</p>
            <br/>
            <p className="new-question-text">New user info:</p>
            <form className="new-question-form" onSubmit={this.onSubmit}>
              <input type="text" id="userId" name="userId" placeholder="Enter username" onChange={this.onChangeUserId}/><br/>
              {Object.keys(users).filter((id) => id === userId).length > 0 && <p className="warning-text">Username exist, try another one</p>}
              <input type="text" id="name" name="name" placeholder="Enter name and surname" onChange={this.onChangeName}/><br/>
              <input type="submit" value="Submit" disabled={(Object.keys(users).filter((id) => id === userId).length > 0 || !userId || !name)}/>
            </form>
          </div>
      </div>
    )
  }
}

function mapStateToProps({users, signedInUser}){

  return {
    users,
    signedInUser
  }
}

export default withRouter(connect(mapStateToProps)(AddUser));