import React, { Component, Fragment } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class QuesList extends Component {

    render() {
        return (
            <Fragment>
            {
                this.props.quiz && this.props.quiz.questions
                    &&
                this.props.quiz.questions.map( ques => {
                    <MenuItem>
                    {ques.id}
                    <Link to={this.props.location.pathname +"/"+ques.id} />
                    </MenuItem>
                })
            }
            </Fragment>
        )
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(QuesList));
