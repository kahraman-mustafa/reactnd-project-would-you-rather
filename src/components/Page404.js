import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

class Page404 extends Component {

  render(){

    return (
      <div className="signin-container">
        <h2>Page not found.</h2>
        <h3>You are trying to access</h3>
        <h3 className="warning-text">{this.props.address}</h3>
      </div>
    )
  }
}

function mapStateToProps({signedInUser}){
  return {signedInUser};
}

Page404.propTypes = {
  address: PropTypes.string.isRequired
}

export default withRouter(connect(mapStateToProps)(Page404));