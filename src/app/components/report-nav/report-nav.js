import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from "react-router-dom";

class ReportNav extends Component {

  render() {
    let time = this.props.report.executedDateTime.substring(0,10)+"  at  "+this.props.report.executedDateTime.substring(11,19);
    return (
      <Fragment>
        {
          (
            <div className="rn-parent">
              <nav className="navbar navbar-expand-lg py-4">
                <a className="rn-navbar-brand" href="/tests/previous">
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </a>
                <div className="rn-header">
                  <div className="rn-title">
                    {this.props.report && this.props.report.interactions[0].categories.category}
                  </div>
                  <div className="rn-title-date">
                    <div>
                    {time}
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          )
        }

      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //   setCurQues : (curQues) => { return dispatch(setCurQues(curQues))},
  }
}

const mapStateToProps = (state) => {
  return {
    report : state.report
   };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ReportNav));