import React, { Component, Fragment } from "react";
import { Link , Route , withRouter} from "react-router-dom";
import { connect } from "react-redux";
import loader from '../../../assets/images/loader.png';
import { Button } from "reactstrap";
import { logoutUser } from '../../../redux/user-info/user-info-actions';
import classnames from "classnames";


class UserNav extends Component {

  constructor(){
    super();
    this.state = {
      name: "Amoolya"
    }
  }

  logout = () => {
    this.props.logout(this.props.history)
    this.props.history.push("/login");
  }

  redirectToDashboard = () => {
    this.props.history.push("/dashboard");
  }

  redirectToCreate = () => {
    this.props.history.push("/tests");
  }

  render() {
    let path = window.location.pathname;
    let user = JSON.parse(localStorage.getItem("user"));
    return (
      <Fragment>
        { this.props.user && this.props.user.isLoggedIn &&
      <div>
        <nav className="navbar navbar-expand-lg usernav">
          <a className="un-navbar-brand" href="#">
            QuizUp!
          </a>
          <div className="un-navbar-opts-container">
          {/* <button
          className={classnames("un-navbar-opts", {"un-selected": path === "/dashboard" ? true : false})}
           onClick={this.redirectToDashboard}>
            Dashboard
          </button> */}

          <button
          className={classnames("un-navbar-opts", {"un-selected": path.startsWith("/tests/") ? true : false})}
          onClick={this.redirectToCreate}>
            Tests
          </button>
          </div>

          <div className="collapse navbar-collapse un-rt-flt-margin" id="navbarSupportedContent">
            <ul className="navbar-nav un-ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle un-navbar-opts" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {user.username}
                </a>
                <div className="dropdown-menu dropdown-menu-lg-left" aria-labelledby="navbarDropdown">
                  {/* <a className="dropdown-item un-ddm-opt" href="/profile">Profile</a> */}
                  {/* <a className="dropdown-item un-ddm-opt" href="/settings">Settings</a> */}
                  <div className="dropdown-divider"></div>
                  <Button className="un-btn" onClick={this.logout} >Logout</Button>
                </div>
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
  const user = state.user;
  return {  user };
}

const mapDispatchToProps = (dispatch) => ({
  logout(history) {
    return dispatch(logoutUser(history));
  }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserNav));