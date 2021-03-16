import React, { Component, Fragment } from "react";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { startQuiz }  from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux'
import { Button } from "react-bootstrap";
import classnames from "classnames";
import { Link, withRouter } from 'react-router-dom';

class TestsSidenav extends Component {

    constructor(){
    super();
    this.state = {
        selected: "create"
      }

  }

openCreate = () => {
    this.setState({selected : "create"});
}

openExplore = () => {
    this.setState({selected : "explore"});
}

openRecommended = () => {
    this.setState({selected : "recommended"});
}

openPrevious = () => {
    this.setState({selected : "previous"});
}


    render() {
        const { path, url } = this.props.match;
        return (
            <Fragment>
                <div className="ts">
                    <h4 className="ts-heading">TESTS</h4>
                    <div className="ts-opts">
                        <Link className="ts-unlnk" to={`${url}/create`}>
                            <div className={classnames("ts-opt", {ts_selected: this.state.selected === "create" ? true : false})}>
                                Create
                            </div>
                        </Link>
                        <Link className="ts-unlnk" to={`${url}/explore`}>
                            <div className={classnames("ts-opt", {ts_selected: this.state.selected === "explore" ? true : false})}>
                                Explore
                            </div>
                        </Link>
                        <Link className="ts-unlnk" to={`${url}/recommended`}>
                            <div className={classnames("ts-opt", {ts_selected: this.state.selected === "recommended" ? true : false})}>
                                Recommended
                            </div>
                        </Link>
                        <Link className="ts-unlnk" to={`${url}/previous`}>
                            <div className={classnames("ts-opt", {ts_selected: this.state.selected === "previous" ? true : false})}>
                                Previous
                            </div>
                        </Link>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TestsSidenav));