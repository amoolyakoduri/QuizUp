import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { Button } from "react-bootstrap";
import { setCurQues } from '../../../redux/quiz/quiz-actions';


class QuizIndex extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        // fetch questions from db
    }

    changeCurQues = (index) => {
        this.props.setCurQues(index);
    }

    render() {
        return (
            <Fragment>
                <div className="qci-parent">
                    <div className="qci-header">
                        Index
                    </div>
                    <div className="qci-list">
                        {
                            this.props.quiz && this.props.quiz.questions &&
                            this.props.quiz.questions.map( (q,i) =>
                                <div className="qci-status">
                                    <Button onClick={()=>{return this.changeCurQues(i)}} className="qci-btn">
                                        {i+1} - <span>{q.status}</span>
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                </div>
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
        setCurQues : (curQues) => { return dispatch(setCurQues(curQues))},
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(QuizIndex);