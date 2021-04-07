import React, { Component, Fragment } from "react";
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { getPreviousTests }  from '../../../redux/test/test-actions';
import { connect } from 'react-redux';
import {
    withRouter
} from "react-router-dom";
import { Button } from "react-bootstrap";
import { getReport }  from '../../../redux/report/report-actions';


class PreviousTests extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.props.getPreviousTests();
    }

    viewReport = (testId) => {
        this.props.getReport(testId)
        .then( res => {
            if(res.success)
            this.props.history.push("/report");
          })
    }


        render() {
            let previousTests = this.props.tests.previousTests;
            let ind =0;
            return (
                <Fragment>
                    <div className="pt-parent">
                        <div className="pt-header">
                            <h4 className="pt-heading">Previous Tests</h4>
                        </div>
                        <div className="pt-list">
                            {previousTests &&
                            previousTests.map(test => {
                                ind = ind+1;
                                return (
                                    <div className="pt-tlb-parent">
                                        <div className="pt-tlb-number">
                                            {ind}
                                        </div>
                                        <div className="pt-tlb-name">
                                            {test.interactions[0].categories.subCategory}
                                        </div>
                                        <div className="pt-tlb-optns">
                                            <Button className="pt-tlb-btn" onClick={() => { return this.viewReport(test.id)}} >View Report</Button>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </Fragment>
                );
            }
        }

        const mapStateToProps = state => ({
            errors: state.errors,
            tests : state.tests
        });

        const mapDispatchToProps = (dispatch) => {
            return {
                getPreviousTests: () => {return dispatch(getPreviousTests()); },
                getReport: (testId) => {return dispatch(getReport(testId)); },
            }
        }

        export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PreviousTests));