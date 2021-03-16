import React, { Component, Fragment } from "react";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { startQuiz }  from '../../../redux/quiz/quiz-actions';
import { connect } from 'react-redux'


class Create extends Component {

    constructor(){
    super();
    this.state = {
      topics: [ 'dynamic-programming',
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

  onDiffchange  =  event  => {
    let key = event.target.id;
    this.setState((state, props) => {
        return {[key]: !state[key]};
    });
}

onDurchange  =  event  => {
    this.setState({
        duration: parseInt(event.target.value)});
}

submit = (event) => {
    let quizStarterDetails ={
        "topics" : this.state.selected,
        "easy" : this.state.easy,
        "medium" : this.state.medium,
        "hard" : this.state.hard,
        "duration" : this.state.duration
    }
    this.props.startQuiz(quizStarterDetails);
    this.props.history.push("/quiz");

}

    render() {
        return (
            <Fragment>
                <div class="jumbotron jumbotron-fluid cr-jumbo-container shadow">
                    <div class="cr-container">
                        <div>
                            <h1 class="display">Ready to start quizzing?</h1>
                        </div>
                        <div>
                            <p>Create your own custom quiz now!</p>
                            <hr/>
                        </div>
                        <div>
                            <div className="cr-row-flex">
                                <div>
                                    Difficulty:
                                </div>
                                <div class="form-check form-check-inline cr-pad-left">
                                    <input class="form-check-input" type="checkbox" onClick={this.onDiffchange} id="easy" value="Easy" />
                                    <label class="form-check-label" for="easy">Easy</label>
                                </div>
                                <div class="form-check form-check-inline cr-pad-left">
                                    <input class="form-check-input" type="checkbox" id="medium" onClick={this.onDiffchange} value="Medium" />
                                    <label class="form-check-label" for="medium">Medium</label>
                                </div>
                                <div class="form-check form-check-inline ctr-pad-left">
                                    <input class="form-check-input" type="checkbox" id="hard" onClick={this.onDiffchange}  value="Hard" />
                                    <label class="form-check-label" for="hard">Hard</label>
                                </div>
                            </div>
                            <div className="cr-row-flex">
                                <div>
                                    Duration:
                                </div>
                                <div className="cr-pad-left">
                                    <input type="number" onChange={this.onDurchange} class="form-control cr-input" id="duration" placeholder="in minutes..." aria-describedby="duration" />
                                </div>
                            </div>
                            <div className="cr-row-flex">
                                <div className="cr-topics-style">
                                    Topics:
                                </div>
                                <div className="cr-pad-left">
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
                            <div className="cr-row-flex">
                                <div>
                                <button type="button" onClick={this.submit} class="btn btn-primary btn-sm">Start Quiz!</button>
                                </div>
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
    success:state.success
});

const mapDispatchToProps = (dispatch) => {
    return {
        startQuiz: (payload) => { dispatch(startQuiz(payload)) },
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Create);
//   export const CreateComponent = connect(mapStateToProps,mapDispatchToProps)(Create);
