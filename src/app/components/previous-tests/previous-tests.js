import React, { Component, Fragment } from "react";
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { startQuiz }  from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux';
import {
    withRouter
} from "react-router-dom";
import TestListBox from "../test-list-box/test-list-box";

class PreviousTests extends Component {


        render() {
            return (
                <Fragment>
                    <div className="pt-parent">
                        <div className="pt-header">
                            <h4 className="pt-heading">Previous Tests</h4>
                        </div>
                        <div className="pt-list">
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

        export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PreviousTests));