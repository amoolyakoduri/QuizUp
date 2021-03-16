import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import TopNav from "../topnav/topnav";
import UserNav from "../userNav/userNav";
import {withRouter} from "react-router-dom";
import ReportNav from '../report-nav/report-nav';

class Navbar extends Component {

  render() {
    let path = this.props.location.pathname;
    console.log(path);
    console.log("url");
    return (
        <Fragment>
          {
            !this.props.isLoggedIn ?
            <TopNav/> :
            path==="/quiz" ?
            <div/> :
            path==="/report" ?
            <ReportNav /> :
            <UserNav/>
          }
        </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    const isLoggedIn = state.user.isLoggedIn;
    return { isLoggedIn };
  }

  const mapDispatchToProps = (dispatch) => ({

})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar));