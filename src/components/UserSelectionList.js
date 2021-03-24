import React, {Component} from "react";
import {connect} from "react-redux";
import { handleFetchUsers, handleAddUser } from "../actions/users"
import {handleSignIn} from "../actions/signedInUser"
import { DropdownList } from 'react-widgets';

class UserSelectionList extends Component {
  componentDidMount(){
    this.props.dispatch(handleFetchUsers());
    const userIds = Object.keys(this.props.users);

    this.setState(() => ({
      selectedUserId: userIds[0]
    }))
  }

  state = {
    selectedUserId: ""
  }

  changeUser = (e) => {
    this.setState(() => ({
      selectedUserId: e.target.value
    }))
  }

  signIn = (e) => {
    e.preventDefault();
    this.props.dispatch(handleSignIn(this.state.selectedUserId));
    alert("Signed In");
  }

  render(){
    const {users} = this.props;

    return(
      <form onSubmit={this.signIn}>
        <label htmlFor="users">Choose a user:</label>
        <select id="users" value={this.state.selectedUserId} onChange={this.changeUser}>
          {Object.keys(users).map((userId) =>
            <option value={userId} key={userId} >{users[userId].name}</option>
          )}
        </select>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

function mapStateToProps({users}){
  return {users};
}

export default connect(mapStateToProps)(UserSelectionList);