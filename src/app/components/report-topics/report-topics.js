import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { Table } from "react-bootstrap";

class ReportTopics extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
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
                                <tr className="rpt-tr">
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
                                </tr>
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