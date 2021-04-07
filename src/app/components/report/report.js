import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import ReportOverall from '../report-overall/report-overall';
import ReportTopics from '../report-topics/report-topics';
import ReportAnsKey from '../report-ans-key/report-ans-key';
import { Redirect } from "react-router-dom";
import { getReport } from '../../../redux/report/report-actions';
import ReportNav from '../report-nav/report-nav';

class Report extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
    }

    getReportVariables = () => {
        if( this.props.report && this.props.report.interactions ) {
            let interactions = this.props.report.interactions;
            let correct = interactions.filter( intr => intr.correct === true );
            let incorrect = interactions.filter( intr => intr.correct === false && intr.response!=="" );
            let na = interactions.filter( intr => intr.correct === false && intr.response==="" );
            let correctTime = 0;
            let incorrectTime = 0;
            let naTime = 0;
            let totalTime = 0;
            let topics = {};
            interactions.map( intr => {
                if(intr.correct===true) {
                    correctTime = correctTime + intr.elapsedTime;
                }
                else if(intr.correct===false) {
                    if(intr.response!=="") {
                        incorrectTime = incorrectTime + intr.elapsedTime;
                    }
                    else {
                        naTime = naTime + intr.elapsedTime;
                    }
                }
                totalTime = totalTime + intr.elapsedTime;
                let topic = intr.categories.topic
                if(topic in topics){
                    if( intr.correct === true )
                        topics[topic].correct = topics[topic].correct+1;
                    else if( intr.correct === false  && intr.response !== "" )
                        topics[topic].incorrect = topics[topic].incorrect+1;
                    else if( intr.correct === false  && intr.response === "" )
                        topics[topic].na = topics[topic].na+1;
                }
                else {
                    let topicMetrics = {
                        correct : 0,
                        incorrect : 0,
                        na : 0,
                        partiallyCorrect : 0
                    }
                    if( intr.correct === true )
                        topicMetrics.correct = topicMetrics.correct+1;
                    else if( intr.correct === false  && intr.response !== "" )
                        topicMetrics.incorrect = topicMetrics.incorrect+1;
                    else if( intr.correct === false  && intr.response === "" )
                        topicMetrics.na = topicMetrics.na+1;
                    topics[topic] = topicMetrics;
                }
            })
            let reportVariables = {
                time : {
                    correctTime : correctTime,
                    incorrectTime : incorrectTime,
                    naTime : naTime,
                    totalTime : totalTime,
                },
                accuracy : {
                    numOfCorrect : correct.length,
                    numOfIncorrect : incorrect.length,
                    numOfNA : na.length,
                    total : interactions.length,
                },
                topics : topics
            }
            return reportVariables;
        }
        else {
            return null;
        }
    }

    render() {

        let reportVariables = {}
        if(this.props.report && this.props.report!=={} )
        reportVariables = this.getReportVariables();
        return (
            <Fragment>

                {   this.props.report!=null && Object.keys(this.props.report).length!=0 ?
                    (
                        <Fragment>
                        <ReportNav/>
                        <div className="rp-parent">
                            <div className="rp-overall">
                                <ReportOverall reportVariables={reportVariables}/>
                            </div>
                            <div className="rp-topics">
                                <ReportTopics reportVariables={reportVariables}/>
                            </div>
                            <div className="rp-ans-key">
                                <ReportAnsKey reportVariables={reportVariables}/>
                            </div>
                        </div>
                        </Fragment>
                    ) :
                    <Redirect to="/tests/previous"/>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user : state.user,
    quiz : state.quiz,
    tests : state.tests,
    report : state.report,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getReport : (testId) => {return dispatch(getReport(testId))},
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Report);