import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "react-bootstrap";

class ReportAnsKey extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="rak-parent">
                    <div className="rak-header">
                        <h4>Answer Key</h4>
                    </div>
                    <div className="rak-body">
                        <div className="rak-filter-list">
                            <div className="rak-filter">
                                <Button className="rak-btn-crt" onClick={this.filterCorrect}>0 Correct</Button>
                            </div>
                            <div className="rak-filter">
                                <Button className="rak-btn-pcrt" onClick={this.filterPartiallyCorrect}>4 Partially Correct</Button>
                            </div>
                            <div className="rak-filter">
                                <Button className="rak-btn-incrt" onClick={this.filterIncorrect}>14 Incorrect</Button>
                            </div>
                            <div className="rak-filter">
                                <Button className="rak-btn-na" onClick={this.filterNotAnswered}>0 Not Answered</Button>
                            </div>
                        </div>
                        <div className="rak-soln-list">
                            <div className="rak-card rak-card-incrt">
                                <div className="rak-c-h">
                                    <div>
                                        1
                                    </div>
                                    <div className="incrt">
                                        Incorrect
                                    </div>
                                </div>
                                <div className="rak-c-s">
                                Search for the keywords to learn more about each warning.
                                To ignore, add // eslint-disable-next-line to the line before.
                                </div>
                            </div>
                            <div className="rak-card rak-card-crt">
                                <div className="rak-c-h">
                                    <div>
                                        2
                                    </div>
                                    <div className="crt">
                                        Correct
                                    </div>
                                </div>
                                <div className="rak-c-s">
                                Search for the keywords to learn more about each warning.
                                To ignore, add // eslint-disable-next-line to the line before.
                                </div>
                            </div>
                            <div className="rak-card rak-card-pcrt">
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
                            </div>
                            <div className="rak-card rak-card-na">
                                <div className="rak-c-h">
                                    <div>
                                        4
                                    </div>
                                    <div className="na">
                                        Not Answered
                                    </div>
                                </div>
                                <div className="rak-c-s">
                                Search for the keywords to learn more about each warning.
                                To ignore, add // eslint-disable-next-line to the line before.
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

export default connect(mapStateToProps,mapDispatchToProps)(ReportAnsKey);