import React, { Component, Fragment } from "react";
import Sidenav from '../sidenav/sidenav';
import UserNav from "../userNav/userNav";
import Countdown from 'react-countdown';
import QuestionContainer from "../question-container/question-container";
import { connect } from 'react-redux'

class QuizContainerPrevious extends Component {

    constructor(props){
        super(props);
        this.state = {
            quiz : {
                id : "123",
                duration : 1,
                curQues : null,
                questions : [
                    {
                        id : 1,
                        q : "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants",
                        a : ""
                    },
                    {
                        id : 2,
                        q : "Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.",
                        a : ""
                    },
                    {
                        id : 3,
                        q : "Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.",
                        a : ""
                    },
                    {
                        id : 4,
                        q : "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
                        a : ""
                    },
                    {
                        id : 5,
                        q : "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
                        a : ""
                    },
                    {
                        id : 6,
                        q : "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
                        a : ""
                    }

                ]
            }
        }
    }

    componentDidMount(){
        // fetch questions from db
    }

    render() {
        let quiz = this.props.quiz
        let curQues = quiz?.quiz?.curQues ?? 0;
        return (
            <Fragment>
                <div className="qcp--flex-row">
                    <Sidenav questions={this.state.quiz.questions}/>
                    <div className="qcp--pad-left">
                        <div className="card ">
                            <div className="card-body qcp--ques-style">
                                <div>
                                    Quiz Id {quiz?.quiz?.id}
                                </div>
                                <div>
                                    <Countdown date={Date.now() + quiz.quiz.duration*60*1000} />
                                </div>
                            </div>
                        </div>
                        {
                            curQues==0 &&
                            <Fragment>
                            <div className="card ques-pad-top">
                                <div className="card-body ques-style">
                                 Instructions:
                                 <br/>
                                 <br/>
                                 1. This is a programming test.
                                 <br/>
                                 <br/>
                                 2. You are free to use any language from the list and code.
                                 <br/>
                                 <br/>
                                 3. If the code area contains the function signature, just complete the function alone.
                                 <br/>
                                 <br/>
                                 4. All inputs are from STDIN and output to STDOUT.
                                 <br/>
                                 <br/>
                                 5. If you are using JAVA, make sure to use "Solution" as the classname.
                                 <br/>
                                 <br/>
                                 6. You can print to console to debug your code.
                                 <br/>
                                 <br/>
                                </div>
                            </div>
                            </Fragment>
                        }
                        {
                            curQues!==0 &&
                            <QuestionContainer questions={quiz.questions}/>
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
        // loginUser: (payload) => { dispatch(loginUser(payload)) },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(QuizContainerPrevious);