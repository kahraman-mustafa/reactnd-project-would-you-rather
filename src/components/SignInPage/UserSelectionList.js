import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import { handleFetchUsers } from "../../actions/users"
import { handleSignIn } from "../../actions/signedInUser";

class UserSelectionList extends Component {
  
  state = {
    selectedUserId: "sarahedo"
  }

  componentDidMount(){
    this.props.dispatch(handleFetchUsers());
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

    return(
      <div>
        <form onSubmit={this.signIn}>
          <label className="push-margin" htmlFor="users">Choose a user:</label>
          <select className="push-margin" id="users" value={this.state.selectedUserId} onChange={this.changeUser}>
            {Object.keys(users).map((userId) =>
              <option value={userId} key={userId} >{users[userId].name}</option>
            )}
          </select>
          <input className="push-margin" type="submit" value="Sign In" />
        </form>
        {(!this.state.selectedUserId) && <p className="warning-text">Select a user</p>}
      </div>
      
    )
  }
}

function mapStateToProps({users, signedInUser}){
  return {users, signedInUser};
}

export default withRouter(connect(mapStateToProps)(UserSelectionList));