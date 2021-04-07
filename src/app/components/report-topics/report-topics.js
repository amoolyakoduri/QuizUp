import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheckCircle, faCheckSquare,faTimesCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class ReportTopics extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    getAccuracy = (numOfCorrect,numOfIncorrect) => {
        if(numOfCorrect===0 && numOfIncorrect===0) return 0;
        return Math.round((numOfCorrect/(numOfCorrect+numOfIncorrect))*100);
    }

    render() {
        let reportVariables = this.props.reportVariables;
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
        let topics = <Fragment>
        {
            reportVariables && reportVariables.topics &&
            Object.entries(reportVariables.topics).map((kv,ind) =>
                <tr className="rpt-tr">
                <td className="rpt-tr-title">{kv[0]}</td>
                <td>
                    <FontAwesomeIcon icon={faCheckCircle} className="rt-crt-icon"></FontAwesomeIcon>
                    {kv[1].correct}</td>
                <td>
                    <FontAwesomeIcon icon={faCheckSquare} className="rt-pcrt-icon"></FontAwesomeIcon>
                    {0}
                </td>
                <td>
                    <FontAwesomeIcon icon={faTimesCircle} className="rt-incrt-icon"></FontAwesomeIcon>
                    {kv[1].incorrect}
                </td>
                <td>
                    <FontAwesomeIcon icon={faMinusCircle} className="rt-na-icon"></FontAwesomeIcon>
                    {kv[1].na}
                </td>
                <td>{this.getAccuracy(kv[1].correct,kv[1].incorrect)}%</td>
                <td>{kv[1].correct}</td>
                </tr>
            )
        }
        </Fragment>
        return (
            <Fragment>
                <div className="rpt-parent">
                    <div className="rpt-header">
                        <h4>Topics</h4>
                    </div>
                    <div className="rpt-body">
                        <Table borderless hover className="rpt-table">
                            <thead>
                                <tr >
                                    <th className="rpt-subcat rpt-th">Topic</th>
                                    <th className="rpt-th">Correct</th>
                                    <th className="rpt-th">Partially Correct</th>
                                    <th className="rpt-th">Incorrect</th>
                                    <th className="rpt-th">Not Answered</th>
                                    <th className="rpt-th">Accuracy</th>
                                    <th className="rpt-th">Score</th>
                                </tr>
                            </thead>
                            <tbody className="rpt-tb">
                                {topics}
                                {/* <tr className="rpt-tr">
                                    <td>topic 1</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr className="rpt-tr">
                                    <td>topic 2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr className="rpt-tr">
                                    <td>topic 3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr> */}
                            </tbody>
                        </Table>
                    </div>
                </div>
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

    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ReportTopics);