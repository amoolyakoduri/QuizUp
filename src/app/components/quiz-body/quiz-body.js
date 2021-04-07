import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { Button } from "react-bootstrap";
import { setCurQues, setQuesStatus, clearResponse,
        setResponse,startTimer,setElapsedTime } from '../../../redux/quiz/quiz-actions';

class QuizBody extends Component {

    constructor(props){
        super(props);
        this.state = {
            startDate : null
        }
    }

    componentDidMount(){
        if(this.props.quiz && this.props.quiz?.questions){
            let curQues = this.props.quiz.curQues;
            let now = new Date();
            this.props.startTimer(now,curQues);
            this.props.setQuesStatus("Not Answered");
        }
    }

    componentDidUpdate(prevProps,prevState){
        let prevCurQues = prevProps.quiz.curQues;
        let curQues = this.props.quiz.curQues;
        if(prevProps.quiz && curQues>=0
             && prevCurQues!==curQues){
                if( prevCurQues>=0){
                    this.props.stopQuesTimer(prevProps.quiz.questions[prevCurQues].startTime,prevCurQues);
                }
                let now = new Date();
                this.props.startTimer(now,curQues);
                if(this.props.quiz &&
                    this.props.quiz.questions[curQues].status!=="Review"){
                        if(this.props.quiz.questions[curQues].ans==="")
                            this.props.setQuesStatus("Not Answered");
                        else
                            this.props.setQuesStatus("Answered");
                }
                else {
                    // do nothing
                }
        }
    }

    handleRadioChange = (event) => {
        this.props.setResponse(event.target.id);
        if(this.props.quiz &&
            this.props.quiz.questions[this.props.quiz.curQues].status!=="Review")
            this.props.setQuesStatus("Answered");
    }

    review = (event) => {
        if(event.target.checked){
            this.props.setQuesStatus("Review");
        }
        else {
            if(this.props.quiz &&
                this.props.quiz.questions[this.props.quiz.curQues].ans===""){
                this.props.setQuesStatus("Not Answered");
            }
            else {
                this.props.setQuesStatus("Answered");
            }
        }
    }

    clearResponse = () => {
        this.props.clearResponse();
        this.props.setQuesStatus("Not Answered");
    }

    prevQues = () => {
        if(this.props.quiz && this.props.quiz.curQues>0) {
            this.props.setCurQues(this.props.quiz.curQues-1);
        }
        else {
            // TODO
        }
    }

    nextQues = () => {
        if(this.props.quiz && this.props.quiz.curQues<this.props.quiz.questions.length) {
            this.props.setCurQues(this.props.quiz.curQues+1);
        }
        else {
            // TODO
        }
    }

    render() {
        let curQues = this.props.quiz && this.props.quiz.questions[this.props.quiz.curQues];
        let options = curQues && curQues.options;
        let mul_chc_sin_cor = <div className="qb-mcsc">
        {
            options &&
            Object.entries(options).map((k,ind) =>
                <div className="qb-mcsc-a-cont">
                    {/* <div className="form-check form-check-inline"> */}
                        <input className="form-check-input"
                        name="radioOption" type="radio" value={k[1]}
                        checked={curQues.ans===k[0]}
                        // onChange={this.handleRadioChange}
                        onClick={this.handleRadioChange} id={k[0]}  />
                        <label className="form-check-label qb-a-mcsc-opt" for={k[0]}>{k[1]}</label>
                    {/* </div> */}
                </div>
            )
        }
        </div>
        let instructions =
            <Fragment>
            <div className="card qb-pad-top">
                <div className="card-body qb-ques-style">
                 Instructions:
                 <br/>
                 <br/>
                 This quiz consists of multiple choice questions.
                 <br/>
                 <br/>
                 The time duration of the quiz is {this.props.quiz.duration} mins.
                </div>
            </div>
            </Fragment>
        return (
            <Fragment>
                {
                    this.props.quiz.curQues===-1?
                    instructions :
                    <div className="qcb-parent">
                        <div className="qcb-ques-cont">
                            <div className="qcb-ques-n">
                                {this.props.quiz.curQues+1}
                            </div>
                            <div className="qcb-ques-q">
                                {curQues.question}
                            </div>
                            <div className="qcb-ques-inst">
                                {curQues.instr}
                            </div>
                            <div className="qcb-ques-a">
                            {
                                curQues.objective &&
                                mul_chc_sin_cor
                            }
                            </div>
                        </div>
                        <div className="qcb-footer">
                            <div className="qcb-cbox">
                                <input className="form-check-input qcb-radio"
                                type="checkbox" id="review"
                                checked={this.props.quiz && this.props.quiz.questions[this.props.quiz.curQues].status==="Review"}
                                onChange={this.review} />
                                <label className="form-check-label" for="review">Review</label>
                            </div>
                            <div>
                                <Button className="qcb-btn" onClick={this.clearResponse} >Clear Response</Button>
                            </div>
                            <div>
                                <Button className="qcb-btn"
                                disabled={this.props.quiz.curQues<=0}
                                onClick={this.prevQues}>Prev</Button>
                            </div>
                            <div>
                                <Button className="qcb-btn"
                                disabled={this.props.quiz.curQues>=this.props.quiz.questions.length-1}
                                onClick={this.nextQues}>Next</Button>
                            </div>
                        </div>
                    </div>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user : state.user,
    quiz : state.quiz
});

const mapDispatchToProps = (dispatch) => {
    return {
        // loginUser: (payload) => { dispatch(loginUser(payload)) },
        setResponse : (response) => { return dispatch(setResponse(response))},
        setCurQues : (curQues) => { return dispatch(setCurQues(curQues))},
        setQuesStatus : (status) => { return dispatch(setQuesStatus(status))},
        clearResponse : () => { return dispatch(clearResponse())},
        startTimer : (startTime,curQues) => { return dispatch(startTimer(startTime,curQues))},
        setElapsedTime : (elapsedTime,curQues) => { return dispatch(setElapsedTime(elapsedTime,curQues))},
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(QuizBody);