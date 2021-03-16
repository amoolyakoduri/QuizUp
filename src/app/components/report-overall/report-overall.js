import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Doughnut } from '@reactchartjs/react-chart.js'

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

    render() {
        return (
            <Fragment>
                <div className="ro-parent">
                    <div className="ro-header">
                        <h4>Overall</h4>
                    </div>
                    <div className="ro-body">
                    <div className="ro-score">
                        <h5>Score</h5>
                        <br/>
                        -4/62
                        <br/>
                    </div>
                    <div className="ro-time">
                        <div className="ro-tm-acc">
                            <h5>Time</h5>
                            <h5>2m 24s</h5>
                        </div>
                        <div className="ro-tm-b">
                            <div className="ro-chart">
                            <Doughnut  data={this.state.data} />
                            </div>
                            <div  className="ro-list">
                                <div className="ro-item">
                                <div>
                                    Correct
                                </div>
                                <div>
                                    0m
                                </div>
                                </div>
                                <div className="ro-item">
                                <div>
                                    Partially Correct
                                </div>
                                <div>
                                    24s
                                </div>
                                </div>
                                <div className="ro-item">
                                <div>
                                    Incorrect
                                </div>
                                <div>
                                    2m
                                </div>
                                </div>
                                <div className="ro-item">
                                <div>
                                    Not Answered
                                </div>
                                <div>
                                    0m
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ro-accuracy">
                        <div className="ro-tm-acc">
                            <h5>Accuracy</h5>
                            <h5>0%</h5>
                        </div>
                        <div className="ro-acc-b">
                            <div className="ro-chart">
                                <Doughnut data={this.state.data} />
                            </div>
                            <div className="ro-list">
                                <div className="ro-item">
                                    <div>
                                        Correct
                                    </div>
                                    <div>
                                        0
                                    </div>
                                    </div>
                                    <div className="ro-item">
                                    <div>
                                        Partially Correct
                                    </div>
                                    <div>
                                        4
                                    </div>
                                    </div>
                                    <div className="ro-item">
                                    <div>
                                        Incorrect
                                    </div>
                                    <div>
                                        14
                                    </div>
                                    </div>
                                    <div className="ro-item">
                                    <div>
                                        Not Answered
                                    </div>
                                    <div>
                                        0
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