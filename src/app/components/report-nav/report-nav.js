import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ReportNav extends Component {

  render() {

    return (
      <Fragment>
      <div className="rn-parent">
        <nav className="navbar navbar-expand-lg py-4">
        <i class="fas fa-arrow-left"></i>
          <a className="navbar-brand" href="/tests/previous">
          Back
          </a>
          <div className="rn-title">
          1000 Analog Communications MCQs Report
          </div>
        </nav>
      </div>
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
  return {  };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ReportNav));