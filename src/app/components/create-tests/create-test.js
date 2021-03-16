import React, { Component, Fragment } from "react";
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { getCategories, getSubCategories,clearSubCategories } from '../../../redux/test/test-actions';
import {startQuiz } from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux';
import {
    withRouter
} from "react-router-dom";
import { Multiselect } from 'multiselect-react-dropdown';

import TestListBox from "../test-list-box/test-list-box";

class CreateTests extends Component {

    constructor(){
        super();
        this.state = {
            // categories: [ 'dynamic-programming',
            // 'backtracking' , 'knapsack', 'recursion'],
            // options: [
            //     { label:  'array-lists', value:  'array-lists'  },
            //     { label:  'backtracking', value:  'backtracking'  },
            //     { label:  'recursion', value:  'recursion'  },
            //     { label:  'knapsack', value:  'knapsack'  },
            // ],
            selectedCategory : "",
            selectedSubCategory : "",
            // easy : false,
            // medium : false,
            // hard : false,
            // duration : null
        };
    }

    componentDidMount = () => {
        // TODO
        this.props.getCategories();
    }

    // onDiffchange  =  event  => {
    //     let key = event.target.id;
    //     this.setState((state, props) => {
    //         return {[key]: !state[key]};
    //     });
    // }

    // onDurchange  =  event  => {
    //     this.setState({
    //         duration: parseInt(event.target.value)});
    //     }

        submit = (event) => {
            if(this.state.selectedSubCategory!==""
            && this.state.selectedCategory===this.props.tests.selectedCategory){
                let quizStarterDetails ={
                    "subCategory" : this.state.selectedSubCategory
                }
                this.props.startQuiz(quizStarterDetails)
                .then( res => {
                    if(res.success)
                    this.props.history.push("/quiz");
                })
            }
            else {
                // TODO
            }

        }

        selectCategory = (selectedItem) => {
            this.setState({selectedCategory : selectedItem[0].category,
            selectedSubCategory : ""});
            this.props.getSubCategories(selectedItem[0].category);
        }

        selectSubCategory = (selectedItem) => {
            this.setState({selectedSubCategory : selectedItem[0].subCategory});
        }

        removeCategory = (removedItem) => {
            console.log("removing category "+removedItem);
            this.setState({selectedCategory : "",
                selectedSubCategory : ""});
            this.props.clearSubCategories();
        }

        removeSubCategory = (removedItem) => {
            console.log("removing sub category "+removedItem);
            this.setState({selectedSubCategory : ""});
        }

        render() {
            return (
                <Fragment>
                <div className="ct-parent">
                <div className="ct-header">
                <h4 className="ct-heading">Create Tests</h4>
                <p>Create your own custom quiz now!</p>
                </div>
                <div className="ct-body">
                    {/* <div className="ct-row-flex">
                        <div>
                            Difficulty:
                        </div>
                        <div class="form-check form-check-inline ct-pad-left">
                            <input class="form-check-input" type="checkbox" onClick={this.onDiffchange} id="easy" value="Easy" />
                            <label class="form-check-label" for="easy">Easy</label>
                        </div>
                        <div class="form-check form-check-inline ct-pad-left">
                            <input class="form-check-input" type="checkbox" id="medium" onClick={this.onDiffchange} value="Medium" />
                            <label class="form-check-label" for="medium">Medium</label>
                        </div>
                        <div class="form-check form-check-inline ct-pad-left">
                            <input class="form-check-input" type="checkbox" id="hard" onClick={this.onDiffchange}  value="Hard" />
                            <label class="form-check-label" for="hard">Hard</label>
                        </div>
                    </div>
                    <div className="ct-row-flex">
                        <div>
                            Duration:
                        </div>
                        <div className="ct-pad-left">
                            <input type="number" onChange={this.onDurchange} class="form-control ct-input" id="duration" placeholder="in minutes..." aria-describedby="duration" />
                        </div>
                    </div> */}
                    <div className="ct-row-flex">
                        <div className="ct-categories-style">
                            Categories:
                        </div>
                        <div className="ct-pad-left">
                            <div className="app">
                                <Multiselect singleSelect={true} selectionLimit={1}
                                onSelect={this.selectCategory}
                                onRemove={this.removeCategory}
                                selectedValues={this.state.selectedCategory}
                                options={this.props.tests.categories}
                                displayValue="category"
                                />
                            </div>
                        </div>
                    </div>
                    {
                        this.state.selectedCategory!=="" &&
                        this.props.tests.subCategories &&
                        this.props.tests.subCategories.length!==0 &&
                        <div className="ct-row-flex">
                            <div className="ct-categories-style">
                                Sub Categories:
                            </div>
                            <div className="ct-pad-left">
                                <div className="app">
                                    <Multiselect singleSelect={true} selectionLimit={1}
                                    onSelect={this.selectSubCategory}
                                    onRemove={this.removeSubCategory}
                                    selectedValues={this.state.selectedSubCategory}
                                    options={this.props.tests.subCategories}
                                    displayValue="subCategory"
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    <div className="ct-row-flex">
                        <div>
                            <button type="button"
                            // disabled={this.state.selectedSubCategory===""?true:false}
                             onClick={this.submit} class="btn btn-primary btn-sm ct-btn">Start Quiz!</button>
                        </div>
                    </div>
            </div>
        </div>
    </Fragment>
);
}
}

    const mapStateToProps = state => ({
        auth: state.auth,
        errors: state.errors,
        tests: state.tests
    });

    const mapDispatchToProps = (dispatch) => {
        return {
            startQuiz: (quizStarterDetails) => {return dispatch(startQuiz(quizStarterDetails))},
            getCategories: () => {return dispatch(getCategories()) },
            getSubCategories: (category) => {return dispatch(getSubCategories(category))},
            clearSubCategories: () => {return dispatch(clearSubCategories())}
        }
    }

    export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CreateTests));
