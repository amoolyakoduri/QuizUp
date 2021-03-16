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

    let classes = "nav-link t-font-size-14 tn-link";
    // className={classes+ this.props.location.pathname==="about" ? " active" : ""}
    return (
      <Fragment>
        { !this.props.isLoggedIn &&
      <div>
        <nav className="navbar navbar-expand-lg topnav">
          <a className="navbar-brand" href="/about">
            {/* <img src={loader} width="30" height="30" alt="" loading="lazy"/> */}
            QuizUp!
          </a>
          <div className="collapse navbar-collapse rt-flt-margin" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item spacing">
                <button
                  className={classnames("navbar-opts")}
                  active={true} onClick={this.redirectToLogin}>
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={classnames("navbar-opts")}
                  active={true} onClick={this.redirectToSignUp}>
                  SignUp
                </button>
              </li>
                {/* <Link
                className={classnames("nav-link t-font-size-14 tn-link ",
                  {"active" : this.props.location.pathname=="/about"})}
                 to="about">About </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                className={classnames("nav-link t-font-size-14 tn-link",
                {"active" : this.props.location.pathname=="/login"})}
                   to="login">Login </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                className={classnames("nav-link t-font-size-14 tn-link",
                {"active" : this.props.location.pathname=="/signUp"})}
                 to="signUp">SignUp </Link> */}
              {/* </li> */}
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