import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import ReportOverall from '../report-overall/report-overall';
import ReportTopics from '../report-topics/report-topics';
import ReportAnsKey from '../report-ans-key/report-ans-key';
import { Redirect } from "react-router-dom";

class Report extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                {
                    !this.props.quiz?.questions ?
                    <Redirect to="/tests/previous" /> :
                    (
                        <div className="rp-parent">

                            <div className="rp-overall">
                                <ReportOverall />
                            </div>
                            <div className="rp-topics">
                                <ReportTopics />
                            </div>
                            <div className="rp-ans-key">
                                <ReportAnsKey />
                            </div>
                        </div>
                    )
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

    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Report);