import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import Countdown from 'react-countdown';
import { setCurQues } from '../../../redux/quiz/quiz-actions';
import { createReport } from '../../../redux/report/report-actions';


class QuizNav extends Component {

  submitQuiz = () => {
    // TODO
    // this.props.createReport(this.props.quiz);
    this.props.history.push("/report");
  }

  showInstructions = () => {
      this.props.setCurQues(-1);
  }

  render() {
    let durationInMins = this.props.quiz && this.props.quiz.duration;
    return (
      <Fragment>
      <div className="qn-parent">
        <nav className="navbar navbar-expand-lg py-4">
          <a className="navbar-brand" href="/about">
            QuizUp!
          </a>
          <div className="collapse navbar-collapse qn-rt-flt-margin" id="navbarSupportedContent">
            <ul className="navbar-nav qn-ml-auto ">
                <li className="nav-item qn-spacing">
                    <button
                    className={classnames("navbar-opts qn-unbtn")}
                    active={true} onClick={this.showInstructions}>
                    Instructions
                    </button>
              </li>
              <li className="nav-item qn-spacing">
                <div className=" qn-timer">
                <Countdown date={Date.now() + durationInMins*60*1000} />
                </div>
              </li>
              <li className="nav-item qn-spacing">
                <button
                  className={classnames("navbar-opts qn-btn")}
                  active={true} onClick={this.submitQuiz}>
                  Submit
                </button>
              </li>

            </ul>
          </div>
       </nav>
      </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setCurQues : (curQues) => { return dispatch(setCurQues(curQues))},
      createReport : (quiz) => { return dispatch(createReport(quiz))},
  }
}

const mapStateToProps = (state) => {
  const quiz = state.quiz;
  return { quiz };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withRouter(QuizNav)));