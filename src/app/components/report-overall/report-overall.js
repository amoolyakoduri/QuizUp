import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Doughnut } from '@reactchartjs/react-chart.js'
import { faStar, faClock , faBullseye } from '@fortawesome/free-solid-svg-icons';

class ReportOverall extends Component {

    constructor(props){
        super(props);
        this.state = {
             data : {
                 labels: ['Incorrect','Partially Correct','Correct','Not Answered'],
                datasets: [
                  {
                    label: 'Total Time',
                    data: [2*60,24,0,0],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(223, 243, 240, 1)',
                      'rgba(220, 222, 229, 1)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                    'rgba(116, 117, 120, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }
        }
    }

    getMins = (timeInMilliseconds) => {
        return Math.floor(timeInMilliseconds/(1000*60));
    }

    getSecs = (timeInMilliseconds) => {
        timeInMilliseconds = timeInMilliseconds%(60*1000);
        return Math.floor(timeInMilliseconds/1000);
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
        //     topics : topics
        // }
        let timeChartData = {
            labels: ['Incorrect','Partially Correct','Correct','Not Answered'],
           datasets: [
             {
               label: 'Total Time',
               data: [reportVariables.time.incorrectTime,
                0, reportVariables.time.correctTime,
                reportVariables.time.naTime],
               backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(223, 243, 240, 1)',
                 'rgba(220, 222, 229, 1)',
               ],
               borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
               'rgba(116, 117, 120, 1)',
               ],
               borderWidth: 1,
             },
           ],
         }
        let accuracyChartData = {
            labels: ['Incorrect','Partially Correct','Correct','Not Answered'],
           datasets: [
             {
               label: 'Total Time',
               data: [reportVariables.accuracy.numOfIncorrect,
                0, reportVariables.accuracy.numOfCorrect,
                reportVariables.accuracy.numOfNA],
               backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(223, 243, 240, 1)',
                 'rgba(220, 222, 229, 1)',
               ],
               borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
               'rgba(116, 117, 120, 1)',
               ],
               borderWidth: 1,
             },
           ],
         }
        return (
            <Fragment>
                <div className="ro-parent">
                    <div className="ro-header">
                        <h4>Overall</h4>
                    </div>
                    <div className="ro-body">
                    <div className="ro-score">
                        <h5 className="ro-width">
                            <FontAwesomeIcon icon={faStar} size="xs" className="ro-icon-space"></FontAwesomeIcon>
                            Score
                        </h5>
                        {/* <br/> */}
                        <h5 className="ro-width">
                        {reportVariables.accuracy.numOfCorrect}/{reportVariables.accuracy.total}
                        </h5>
                        {/* <br/> */}
                    </div>
                    <div className="ro-time">
                        <div className="ro-tm-acc">
                            <h5 className="ro-width">
                                <FontAwesomeIcon icon={faClock} size="xs" className="ro-icon-space"></FontAwesomeIcon>
                                Time
                            </h5>
                            <h5 className="ro-width-ta">{this.getMins(reportVariables.time.totalTime)}m {this.getSecs(reportVariables.time.totalTime)}s</h5>
                        </div>
                        <div className="ro-tm-b">
                            <div className="ro-chart">
                            <Doughnut  data={timeChartData} />
                            </div>
                            <div  className="ro-list">
                                <div className="ro-item">
                                <div>
                                    Correct
                                </div>
                                <div>
                                {this.getMins(reportVariables.time.correctTime)}m {this.getSecs(reportVariables.time.correctTime)}s
                                </div>
                                </div>
                                <div className="ro-item">
                                <div>
                                    Partially Correct
                                </div>
                                <div>
                                    0m 0s
                                </div>
                                </div>
                                <div className="ro-item">
                                <div>
                                    Incorrect
                                </div>
                                <div>
                                {this.getMins(reportVariables.time.incorrectTime)}m {this.getSecs(reportVariables.time.incorrectTime)}s
                                </div>
                                </div>
                                <div className="ro-item">
                                <div>
                                    Not Answered
                                </div>
                                <div>
                                {this.getMins(reportVariables.time.naTime)}m {this.getSecs(reportVariables.time.naTime)}s
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ro-accuracy">
                        <div className="ro-tm-acc">
                            <h5 className="ro-width">
                                <FontAwesomeIcon icon={faBullseye} size="xs" className="ro-icon-space"></FontAwesomeIcon>
                                Accuracy
                            </h5>
                            <h5 className="ro-width-ta">{this.getAccuracy(reportVariables.accuracy.numOfCorrect,reportVariables.accuracy.numOfIncorrect)}%</h5>
                        </div>
                        <div className="ro-acc-b">
                            <div className="ro-chart">
                                <Doughnut data={accuracyChartData} />
                            </div>
                            <div className="ro-list">
                                <div className="ro-item">
                                    <div>
                                        Correct
                                    </div>
                                    <div>
                                        {reportVariables.accuracy.numOfCorrect}
                                    </div>
                                    </div>
                                    <div className="ro-item">
                                    <div>
                                        Partially Correct
                                    </div>
                                    <div>
                                        0
                                    </div>
                                    </div>
                                    <div className="ro-item">
                                    <div>
                                        Incorrect
                                    </div>
                                    <div>
                                        {reportVariables.accuracy.numOfIncorrect}
                                    </div>
                                    </div>
                                    <div className="ro-item">
                                    <div>
                                        Not Answered
                                    </div>
                                    <div>
                                        {reportVariables.accuracy.numOfNA}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(ReportOverall);