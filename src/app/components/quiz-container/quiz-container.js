import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import QuizBody from '../quiz-body/quiz-body';
import QuizIndex from '../quiz-index/quiz-index';
import QuizNav from '../quiz-nav/quiz-nav';

class QuizContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            curQues : {
                id : 1,
                question : "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants",
                instr : "Select any ONE option",
                ans : "",
                time : 0,
                status : "",
                objective : true,
                options : {
                    A : "Option A",
                    B : "Option B",
                    C : "Option C",
                    D : "Option D"
                },
                elapsedTime : 0
            },
            startDate : null
        }
    }

    componentDidMount(){
        // fetch questions from db


    }

    stopTimer = (startDate) => {
        const endDate = new Date();
        const spentTime = endDate.getTime() - startDate.getTime();
        this.setState(prevState => {
            let curState = {...prevState};
            curState.curQues.elapsedTime = curState.curQues.elapsedTime+spentTime;
             return curState;
        }, () => {
            console.log("elapsed time : "+this.state.curQues.elapsedTime);
            return;
        })
    };

    render() {
        return (
            <Fragment>
                <QuizNav stopQuesTimer={this.stopTimer}/>
                <div className="qc-parent">
                    <div className="qc-body">
                        <QuizBody stopQuesTimer={this.stopTimer}/>
                    </div>
                    <div className="qc-index" >
                        <QuizIndex stopQuesTimer={this.stopTimer}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user : state.user,
    quiz : state.quiz,
});

const mapDispatchToProps = (dispatch) => {
    return {
        // loginUser: (payload) => { dispatch(loginUser(payload)) },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(QuizContainer);