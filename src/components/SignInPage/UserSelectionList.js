import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import { handleFetchUsers } from "../../actions/users"
import { handleSignIn } from "../../actions/signedInUser";

class UserSelectionList extends Component {
  
  state = {
    selectedUserId: null
  }

  componentDidMount(){
    this.props.dispatch(handleFetchUsers());
    const userIds = Object.keys(this.props.users);
    console.log("Users: ", JSON.stringify(userIds));

    this.setState(() => ({
      selectedUserId: userIds[1]
    }))

    this.setState(() => ({
      selectedUserId: userIds[0]
    }))
  }

  changeUser = (e) => {
    this.setState(() => ({
      selectedUserId: e.target.value
    }))
  }

  signIn = (e) => {
    e.preventDefault();
    const {selectedUserId} = this.state
    if(selectedUserId){
      const name = this.props.users[selectedUserId].name;
      const avatarURL = this.props.users[selectedUserId].avatarURL;
      this.props.dispatch(handleSignIn(selectedUserId, name, avatarURL));
      this.props.history.push(`/`)
    }
  }

  render(){
    const {users} = this.props;

    console.log("State: " + this.state.selectedUserId);

    return(
      <form onSubmit={this.signIn}>
        <label htmlFor="users">Choose a user:</label>
        <select id="users" value={this.state.selectedUserId} onChange={this.changeUser}>
          {Object.keys(users).map((userId) =>
            <option value={userId} key={userId} >{users[userId].name}</option>
          )}
        </select>
        <input type="submit" value="Submit" />
        {(!this.state.selectedUserId && !this.props.signedInUser.id) && <p className="warning-text">Select a user to continue</p>}
      </form>
    )
  }
}

function mapStateToProps({users, signedInUser}){
  return {users, signedInUser};
}

export default withRouter(connect(mapStateToProps)(UserSelectionList));