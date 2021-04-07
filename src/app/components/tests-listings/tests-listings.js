import React, { Component, Fragment } from "react";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { startQuiz }  from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import ExploreTests from '../explore-tests/explore-tests';
import PreviousTests from '../previous-tests/previous-tests';
import RecommendedTests from '../recommended-tests/recommended-tests';
import CreateTests from '../create-tests/create-test';
// import Create from '../create/create';

class TestsListings extends Component {


        render() {
            const { path, url } = this.props.match
            return (
                <Fragment>
                <div className="tc-parent">
                <Switch>
                <Route exact path={path} render={() => (
                    <Redirect to="/tests/create"/>
                )} />
                <Route path={`${path}/create`}>
                <CreateTests />
                </Route>
                <Route path={`${path}/explore`}>
                <ExploreTests/>
                </Route>
                <Route path={`${path}/recommended`}>
                <RecommendedTests/>
                </Route>
                <Route path={`${path}/previous`}>
                <PreviousTests/>
                </Route>
                </Switch>
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

        export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TestsListings));