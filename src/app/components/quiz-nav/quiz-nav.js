import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import Countdown from 'react-countdown';
import { setCurQues,setElapsedTime, submitQuiz } from '../../../redux/quiz/quiz-actions';
import { getReport } from '../../../redux/report/report-actions';

class QuizNav extends Component {

  constructor(props){
    super(props);
    this.startDate = Date.now()
    this.state ={

    }
  }

  stopTimer = (startDate,curQues) => {
    const endDate = new Date();
    const spentTime = endDate.getTime() - startDate.getTime();
    this.props.setElapsedTime(spentTime,curQues);
};

  submitQuiz = () => {
    let numToLetter = {
      0 : "a",
      1 : "b",
      2 : "c",
      3 : "d"
    }
    let questions = [];
    this.props.quiz.questions.map( question => {
        let ques = {
          id : question.id,
          elapsedTime : question.elapsedTime,
          answer : numToLetter[question.ans] === undefined ? "" : numToLetter[question.ans]
        }
        questions.push(ques);
    })
    let quizData = {
      startDate : this.props.quiz.startDate,
      questions : questions
    }
    this.stopTimer(this.props.quiz.questions[this.props.quiz.curQues].startTime,
      this.props.quiz.curQues)
    this.props.submitQuiz(quizData)
    .then( res => {
      if(res.success)
        this.props.getReport(res.testId)
        .then( res => {
          if(res.success);
            this.props.history.push("/report");
        })
    })
  }

  showInstructions = () => {
    if(this.props.quiz) {
      this.stopTimer(this.props.quiz.questions[this.props.quiz.curQues].startTime,
        this.props.quiz.curQues)
      this.props.setCurQues(-1);
    }
  }



  render() {
    let durationInMins = this.props.quiz && this.props.quiz.duration;
    return (
      <Fragment>
      <div className="qn-parent">
        <nav className="navbar navbar-expand-lg py-4">
          <a className="qn-navbar-brand" href="#">
            QuizUp!
          </a>
          <div className="collapse navbar-collapse qn-rt-flt-margin" id="navbarSupportedContent">
            <ul className="navbar-nav qn-ml-auto ">
                <li className="nav-item qn-spacing">
                    <button
                    className={classnames("qn-navbar-opts qn-unbtn")}
                     onClick={this.showInstructions}>
                    Instructions
                    </button>
              </li>
              <li className="nav-item qn-spacing">
                <div className=" qn-timer">
                <Countdown onComplete={this.submitQuiz} date={this.startDate + durationInMins*60*1000} />
                </div>
              </li>
              <li className="nav-item qn-spacing">
                <button
                  className={classnames("qn-navbar-opts qn-btn")}
                   onClick={this.submitQuiz}>
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
      submitQuiz : (quizData) => { return dispatch(submitQuiz(quizData))},
      getReport: (testId) => {return dispatch(getReport(testId)); },
      setElapsedTime : (elapsedTime,curQues) => { return dispatch(setElapsedTime(elapsedTime,curQues))},
  }
}

const mapStateToProps = (state) => {
  const quiz = state.quiz;
  return { quiz };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withRouter(QuizNav)));