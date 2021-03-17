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
          <a className="tn-navbar-brand" href="/about">
            QuizUp!
          </a>
          <div className="collapse navbar-collapse tn-rt-flt-margin" id="navbarSupportedContent">
            <ul className="navbar-nav tn-ml-auto ">
              <li className="nav-item tn-spacing">
                <button
                  className={classnames("tn-navbar-opts")}
                  active={true} onClick={this.redirectToLogin}>
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={classnames("tn-navbar-opts")}
                  active={true} onClick={this.redirectToSignUp}>
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