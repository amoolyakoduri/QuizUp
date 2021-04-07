import React, { Component, Fragment } from "react";
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { getCategories, getSubCategories,clearSubCategories } from '../../../redux/test/test-actions';
import {startQuiz } from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux';
import {
    withRouter
} from "react-router-dom";
import Select from 'react-select';
import classnames from "classnames";

class CreateTests extends Component {

    constructor(){
        super();
        this.state = {
            selectedCategory : "",
            selectedSubCategory : "",
        };
    }

    componentDidMount = () => {
        // TODO
        this.props.getCategories();
    }

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
            if(selectedItem!=={}){
                this.setState({selectedCategory : selectedItem.label,
                selectedSubCategory : ""});
                this.props.getSubCategories(selectedItem.label);
            }
            else {
                // console.log("removing category "+removedItem);
                this.setState({selectedCategory : "",
                selectedSubCategory : ""});
                this.props.clearSubCategories();
            }
        }

        selectSubCategory = (selectedItem) => {
            if(selectedItem!=={}){
                this.setState({selectedSubCategory : selectedItem.label});
            }
            else {
                this.setState({selectedSubCategory : ""});
            }
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
                        <div className="form-check form-check-inline ct-pad-left">
                            <input className="form-check-input" type="checkbox" onClick={this.onDiffchange} id="easy" value="Easy" />
                            <label className="form-check-label" for="easy">Easy</label>
                        </div>
                        <div className="form-check form-check-inline ct-pad-left">
                            <input className="form-check-input" type="checkbox" id="medium" onClick={this.onDiffchange} value="Medium" />
                            <label className="form-check-label" for="medium">Medium</label>
                        </div>
                        <div className="form-check form-check-inline ct-pad-left">
                            <input className="form-check-input" type="checkbox" id="hard" onClick={this.onDiffchange}  value="Hard" />
                            <label className="form-check-label" for="hard">Hard</label>
                        </div>
                    </div>
                    <div className="ct-row-flex">
                        <div>
                            Duration:
                        </div>
                        <div className="ct-pad-left">
                            <input type="number" onChange={this.onDurchange} className="form-control ct-input" id="duration" placeholder="in minutes..." aria-describedby="duration" />
                        </div>
                    </div> */}
                    <div className="ct-row-flex">
                        <div className="ct-categories-style">
                            Categories:
                        </div>
                        <div className="ct-pad-left">
                            <div className="app">
                                {/* <Multiselect singleSelect={true} selectionLimit={1}
                                onSelect={this.selectCategory}
                                onRemove={this.removeCategory}
                                selectedValues={this.state.selectedCategory}
                                options={this.props.tests.categories}
                                displayValue="category"
                                /> */}
                                {/* <MultiSelect
                                        // onChange={this.handleOnchange}
                                        onChange={this.selectCategory}
                                        options={this.props.tests.categories}
                                        singleSelect={true}
                                        clearable={false}
                                        downArrow={true}
                                        closeOnSelect={false}
                                        /> */}
                                <Select
                                onChange={this.selectCategory}
                                value={this.state.selectedCategory}
                                placeholder={this.state.selectedCategory}
                                options={this.props.tests.categories}
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
                                    {/* <Multiselect singleSelect={true} selectionLimit={1}
                                    onSelect={this.selectSubCategory}
                                    onRemove={this.removeSubCategory}
                                    selectedValues={this.state.selectedSubCategory}
                                    options={this.props.tests.subCategories}
                                    displayValue="subCategory"
                                    /> */}
                                    {/* <MultiSelect
                                        // onChange={this.handleOnchange}
                                        onChange={this.selectSubCategory}
                                        options={this.props.tests.subCategories}
                                        singleSelect={true}
                                        clearable={false}
                                        downArrow={true}
                                        closeOnSelect={false}
                                        /> */}
                                    <Select
                                        onChange={this.selectSubCategory}
                                        value={this.state.selectedSubCategory}
                                        placeholder={this.state.selectedSubCategory}
                                        options={this.props.tests.subCategories}
                                        />
                                </div>
                            </div>
                        </div>
                    }
                    <div className="ct-row-flex">
                        <div>
                            <button type="button"
                            // disabled={this.state.selectedSubCategory===""?true:false}
                             onClick={this.submit}
                            //  className="btn btn-primary btn-sm ct-btn"
                             className={classnames("btn btn-primary btn-sm ct-btn", {ct_btn_disabled: this.state.selectedSubCategory===""})}
                             >Start Quiz!</button>
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
