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
    return (
      <Fragment>
        { this.props.user && this.props.user.isLoggedIn &&
      <div>
        <nav className="navbar navbar-expand-lg usernav">
          <a className="navbar-brand" href="/about">
            {/* <img src={loader} width="30" height="30" alt="" loading="lazy"/> */}
            QuizUp!
          </a>
          <div className="navbar-opts-container">
          <button
          className={classnames("navbar-opts", {selected: path === "/dashboard" ? true : false})}
          active={true} onClick={this.redirectToDashboard}>
            Dashboard
          </button>

          <button
          className={classnames("navbar-opts", {selected: path === "/create" ? true : false})}
          onClick={this.redirectToCreate}>
            Tests
          </button>
          </div>

          <div className="collapse navbar-collapse rt-flt-margin" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle navbar-opts" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.props.user.username}
                </a>
                <div class="dropdown-menu dropdown-menu-lg-left" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item ddm-opt" href="/profile">Profile</a>
                  <a class="dropdown-item ddm-opt" href="/settings">Settings</a>
                  <div class="dropdown-divider"></div>
                  <Button className="un-btn" onClick={this.logout} >Logout</Button>
                  {/* <a class="dropdown-item" href="/logout">Logout</a> */}
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