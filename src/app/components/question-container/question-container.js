import React, { Component, Fragment} from 'react';
import Editor from '../editor/editor';
import { connect } from 'react-redux'

class QuestionContainer extends Component {

    render(){
        let curQues = this.props.quiz?.quiz?.curQues ??  0;
        let questions = this.props.quiz.quiz.questions;
        return (
            <Fragment>
                { curQues!==0 &&
                    <Fragment>
                <div class="card ques-pad-top">
                    <div class="card-body ques-style">
                        {questions[curQues-1].q}
                    </div>
                </div>
                <div className="ques-editor-container ">
                    <Editor/>
                </div>
                </Fragment>
                }
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

export default connect(mapStateToProps,mapDispatchToProps)(QuestionContainer);
