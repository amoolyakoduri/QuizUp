import React, { Component, Fragment } from "react";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { startQuiz }  from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux'
import TestsListings from '../tests-listings/tests-listings.js';
import TestsSidenav from '../tests-sidenav/tests-sidenav.js';


class TestsContainer extends Component {

    render() {
        return (
            <Fragment>
                <div className="tc-parent">
                    <div className="ts-parent">
                        <TestsSidenav/>
                    </div>
                    <div className="tl-parent">
                        <TestsListings/>
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

export default connect(mapStateToProps,mapDispatchToProps)(TestsContainer);