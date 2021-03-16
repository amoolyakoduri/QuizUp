import React, { Component, Fragment } from "react";
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { startQuiz }  from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux';
import {
    withRouter
} from "react-router-dom";
import TestListBox from "../test-list-box/test-list-box";

class RecommendedTests extends Component {


        render() {
            return (
                <Fragment>
                    <div className="rt-parent">
                        <div className="rt-header">
                            <h4 className="rt-heading">Recommended Tests</h4>
                        </div>
                        <div className="rt-list">
                            <TestListBox/>
                            <TestListBox/>
                            <TestListBox/>
                        </div>
                    </div>
                </Fragment>
                );
            }
        }

        const mapStateToProps = state => ({
            auth: state.auth,
            errors: state.errors,
            success:state.success
        });

        const mapDispatchToProps = (dispatch) => {
            return {
                startQuiz: (payload) => { dispatch(startQuiz(payload)) },
            }
        }

        export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RecommendedTests));