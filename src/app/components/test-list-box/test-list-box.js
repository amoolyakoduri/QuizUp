import React, { Component, Fragment } from "react";
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { startQuiz }  from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux';
import {
    withRouter
} from "react-router-dom";
import { Button } from "react-bootstrap";

class TestsListBox extends Component {

    startTest = () => {
        console.log("start test");
        // TODO
    }


        render() {
            return (
                <Fragment>
                    <div className="tlb-parent">
                        <div className="tlb-number">
                            1
                        </div>
                        <div className="tlb-name">
                            Arrays
                        </div>
                        <div className="tlb-optns">
                            <Button className="tlb-btn" onClick={this.startTest} >Take Test</Button>
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

        export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TestsListBox));