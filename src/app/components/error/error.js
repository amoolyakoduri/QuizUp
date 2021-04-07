import React, { Component, Fragment } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { Alert} from 'reactstrap';
import { connect } from 'react-redux'
import {clearError} from '../../../redux/error/error-actions';

class Error extends Component {


    componentDidMount(){
        // setTimeout(
        //     () => this.props.clearError(),
        //     10000,
        // );
    }

    render() {
        return (
            <Fragment>
                <div className="e-parent">
               { this.props.errors && this.props.errors!=undefined &&
               this.props.errors.length!=0 && this.props.errors.map(error => {
                        return <Alert color="danger">
                            {error}
                        </Alert>

               })
                }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => {return dispatch(clearError()) },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Error);
