import React, {Component, Fragment} from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
import './quiz-tuple.css';

class QuizTuple extends Component {

    render() {
        var details = this.props.details;
        return (
            <Fragment>
                <div className="quiz-tuple-container">
                    <div></div>
                    <div className="q-detail">
                        <h4>{details.name}</h4>
                    </div>
                    <div className="q-detail">
                        Id:{details.id}
                    </div>
                    <div className="q-detail">
                        Duration:{details.duration} mins
                    </div>
                    <div className="q-detail">
                        <Button >Take this quiz!</Button>
                    </div>
                    <hr/>
                </div>
            </Fragment>
        );

    }
}

export default QuizTuple;