import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import QuizBody from '../quiz-body/quiz-body';
import QuizIndex from '../quiz-index/quiz-index';
import QuizNav from '../quiz-nav/quiz-nav';
import { Redirect } from "react-router-dom";
import {setElapsedTime } from '../../../redux/quiz/quiz-actions';

class QuizContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        // fetch questions from db
    }

    stopTimer = (startDate,curQues) => {
        const endDate = new Date();
        const spentTime = endDate.getTime() - startDate.getTime();
        this.props.setElapsedTime(spentTime,curQues);
    };

    render() {
        return (
            <Fragment>
                {
                    !this.props.quiz?.questions ?
                    <Redirect to="/tests/create" /> :
                    (<Fragment>
                        <QuizNav stopQuesTimer={this.stopTimer}/>
                        <div className="qc-parent">
                            <div className="qc-body">
                                <QuizBody stopQuesTimer={this.stopTimer}/>
                            </div>
                            <div className="qc-index" >
                                <QuizIndex stopQuesTimer={this.stopTimer}/>
                            </div>
                        </div>
                    </Fragment>)
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user : state.user,
    quiz : state.quiz,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setElapsedTime: (elapsedTime,curQues) => { return dispatch(setElapsedTime(elapsedTime,curQues)) },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(QuizContainer);