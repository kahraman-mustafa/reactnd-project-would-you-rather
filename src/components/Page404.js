import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

class Page404 extends Component {

  onAddNewUser = (e) => {
    e.preventDefault();
    this.props.history.push(`/add_user`);
  }

  render(){
    const {signedInUser, redirectPath} = this.props;
    console.log("REDIRECT PATH: ", redirectPath);

    if(signedInUser.id){
      this.props.history.push(`/`);
      alert("You already signed in!");
    }

    return (
      <div className="signin-container">
        <h3>Welcome to the "Would you Rather" App</h3>
        <p className={!signedInUser.id && "warning-text"}>{!signedInUser.id && "In order to use app, "}Please Sign in to Continue</p>
        <button id="btn-add-user" onClick={this.onAddNewUser}>Add New User</button>
      </div>
    )
  }
}

function mapStateToProps({signedInUser}){
  return {signedInUser};
}

Page404.propTypes = {
  redirectPath: PropTypes.string.isRequired
}

export default withRouter(connect(mapStateToProps)(Page404));