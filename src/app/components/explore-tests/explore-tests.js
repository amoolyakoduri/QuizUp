import React, { Component, Fragment } from "react";
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { startQuiz }  from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux';
import {
    withRouter
} from "react-router-dom";
import TestListBox from "../test-list-box/test-list-box";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import { Button } from "react-bootstrap";

class ExploreTests extends Component {


    constructor(){
        super();
        this.state = {
          categories: [ 'dynamic-programming',
                    'backtracking' , 'knapsack', 'recursion'],
            options: [
                { label:  'array-lists', value:  'array-lists'  },
                { label:  'backtracking', value:  'backtracking'  },
                { label:  'recursion', value:  'recursion'  },
                { label:  'knapsack', value:  'knapsack'  },
                ],
            selected : [],
            easy : false,
            medium : false,
            hard : false,
            duration : null
        };
      }

    handleOnchange  =  val  => {
        this.setState({selected:val.split(",")})
      }

      getListings = () => {
          console.log("getListings");
          //TODO
      }

        render() {
            return (
                <Fragment>
                    <div className="et-parent">
                        <div className="et-header">
                            <h4 className="et-heading">Explore Tests</h4>
                            <div className="et-h-layout">
                            <div className="et-row-flex et-ptop">
                                <div className="et-categories-style">
                                    Categories:
                                </div>
                                <div className="et-pad-left">
                                    <div className="app">
                                        {/* <div  className="preview-values">
                                            {this.state.selected}
                                        </div> */}
                                        <MultiSelect
                                        onChange={this.handleOnchange}
                                        options={this.state.options}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="et-btn-ptop">
                                <Button className="et-btn" onClick={this.getListings}>Search</Button>
                            </div>
                            </div>

                        </div>
                        <div className="et-list">
                            <TestListBox/>
                            <TestListBox/>
                            <TestListBox/>
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

        export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ExploreTests));