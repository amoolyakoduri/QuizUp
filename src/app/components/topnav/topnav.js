import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import loader from '../../../assets/images/loader.png';
import classnames from "classnames";

class TopNav extends Component {

  redirectToLogin = () => {
    this.props.history.push("/login");
  }

  redirectToSignUp = () => {
    this.props.history.push("/signUp");
  }

  render() {
    return (
      <Fragment>
        { !this.props.isLoggedIn &&
      <div>
        <nav className="navbar navbar-expand-lg topnav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
          <a className="tn-navbar-brand" href="#">
            QuizUp!
          </a>
          <div className="collapse navbar-collapse un-rt-flt-margin" id="navbarSupportedContent">
            <ul className="navbar-nav tn-ml-auto">
              <li className="nav-item tn-spacing">
                <button
                  className={classnames("tn-navbar-opts")}
                   onClick={this.redirectToLogin}>
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={classnames("tn-navbar-opts")}
                   onClick={this.redirectToSignUp}>
                  SignUp
                </button>
              </li>
            </ul>
            </div>
       </nav>
      </div>
  }
      </Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  const isLoggedIn = state.user.isLoggedIn;
  return { isLoggedIn };
}

export default connect(mapStateToProps,{})(withRouter(TopNav));