import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "react-bootstrap";
import {  faCheckCircle,faTimesCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class ReportAnsKey extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        let reportVariables = this.props.reportVariables;
        let index = 0;
        // {
        //     time : {
        //         correctTime : correctTime,
        //         incorrectTime : incorrectTime,
        //         naTime : naTime,
        //         totalTime : totalTime,
        //     },
        //     accuracy : {
        //         numOfCorrect : correct.length,
        //         numOfIncorrect : incorrect.length,
        //         numOfNA : na.length,
        //         total : interactions.length,
        //     },
        //     topics : {
        //             topic1 : {
        //                 correct : 0,
        //                 incorrect : 0,
        //                 na : 0,
        //                 partiallyCorrect : 0
        //             },
        //             topic2 : {
        //                 correct : 0,
        //                 incorrect : 0,
        //                 na : 0,
        //                 partiallyCorrect : 0
        //             }
        // }
        // }
        return (
            <Fragment>
                <div className="rak-parent">
                    <div className="rak-header">
                        <h4>Answer Key</h4>
                    </div>
                    <div className="rak-body">
                        <div className="rak-filter-list">
                            <div className="rak-filter">
                                <Button className="rak-btn-crt" onClick={this.filterCorrect}>{reportVariables.accuracy.numOfCorrect} Correct</Button>
                            </div>
                            <div className="rak-filter">
                                <Button className="rak-btn-pcrt" onClick={this.filterPartiallyCorrect}>{0} Partially Correct</Button>
                            </div>
                            <div className="rak-filter">
                                <Button className="rak-btn-incrt" onClick={this.filterIncorrect}>{reportVariables.accuracy.numOfIncorrect} Incorrect</Button>
                            </div>
                            <div className="rak-filter">
                                <Button className="rak-btn-na" onClick={this.filterNotAnswered}>{reportVariables.accuracy.numOfNA} Not Answered</Button>
                            </div>
                        </div>
                        <div className="rak-soln-list">
                            {
                                this.props.report && this.props.report.interactions &&
                                this.props.report.interactions.map( intr => {
                                    index = index+1;
                                    if(intr.correct === true){
                                        return (<div className="rak-card rak-card-crt">
                                            <div className="rak-c-h">
                                                <div>
                                                    {index}
                                                </div>
                                                <div className="crt">
                                                    <div className="rak-icon-mr">
                                                    <FontAwesomeIcon  size="xs" icon={faCheckCircle} className="rak-crt-icon"></FontAwesomeIcon>
                                                    </div>
                                                    <div>
                                                    Correct
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rak-c-s">
                                                Question: {intr.question}
                                            </div>
                                            <div className="rak-c-s">
                                                <br/>
                                            </div>
                                            <div className="rak-c-s">
                                                Topic: {intr.categories.topic}
                                            </div>
                                            <div className="rak-c-s">
                                                <br/>
                                            </div>
                                            <div className="rak-c-s">
                                                Your Response: {intr.response}
                                            </div>
                                            <div className="rak-c-s">
                                                <br/>
                                            </div>
                                            <div className="rak-c-s">
                                                Correct Answer: {intr.answer}
                                            </div>
                                            <div className="rak-c-s">
                                                {this.state.explanation}
                                            </div>
                                        </div>)
                                    }
                                    else if(intr.correct === false && intr.response!==""){
                                        return (<div className="rak-card rak-card-incrt">
                                            <div className="rak-c-h">
                                                <div>
                                                    {index}
                                                </div>
                                                <div className="incrt">
                                                    <div className="rak-icon-mr">
                                                    <FontAwesomeIcon size="xs"  icon={faTimesCircle} className="rak-incrt-icon"></FontAwesomeIcon>
                                                    </div>
                                                    <div>
                                                    Incorrect
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rak-c-s">
                                                Question: {intr.question}
                                            </div>
                                            <div className="rak-c-s">
                                                <br/>
                                            </div>
                                            <div className="rak-c-s">
                                                Topic: {intr.categories.topic}
                                            </div>
                                            <div className="rak-c-s">
                                                <br/>
                                            </div>
                                            <div className="rak-c-s">
                                                Your Response: {intr.response}
                                            </div>
                                            <div className="rak-c-s">
                                                <br/>
                                            </div>
                                            <div className="rak-c-s">
                                                Correct Answer: {intr.answer}
                                            </div>
                                            <div className="rak-c-s">
                                                {this.state.explanation}
                                            </div>
                                        </div>)
                                    }
                                    else if(intr.correct === false && intr.response===""){
                                        return (<div className="rak-card rak-card-na">
                                            <div className="rak-c-h">
                                                <div>
                                                    {index}
                                                </div>
                                                <div className="na">
                                                    <div className="rak-icon-mr">
                                                    <FontAwesomeIcon size="xs" icon={faMinusCircle} className="rak-na-icon"></FontAwesomeIcon>
                                                    </div>
                                                    <div>
                                                    Not Answered
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rak-c-s">
                                                Question: {intr.question}
                                            </div>
                                            <div className="rak-c-s">
                                                <br/>
                                            </div>
                                            <div className="rak-c-s">
                                                Topic: {intr.categories.topic}
                                            </div>
                                            <div className="rak-c-s">
                                                <br/>
                                            </div>
                                            <div className="rak-c-s">
                                                Your Response: {intr.response}
                                            </div>
                                            <div className="rak-c-s">
                                                <br/>
                                            </div>
                                            <div className="rak-c-s">
                                                Correct Answer: {intr.answer}
                                            </div>
                                            <div className="rak-c-s">
                                                {this.state.explanation}
                                            </div>
                                        </div>)
                                    }
                                })
                            }
                            {/* <div className="rak-card rak-card-pcrt">
                                <div className="rak-c-h">
                                    <div>
                                        3
                                    </div>
                                    <div className="pcrt">
                                        Partially Correct
                                    </div>
                                </div>
                                <div className="rak-c-s">
                                Search for the keywords to learn more about each warning.
                                To ignore, add // eslint-disable-next-line to the line before.
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user : state.user,
    quiz : state.quiz,
    report : state.report,
});

const mapDispatchToProps = (dispatch) => {
    return {
        // loginUser: (payload) => { dispatch(loginUser(payload)) },

    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ReportAnsKey);