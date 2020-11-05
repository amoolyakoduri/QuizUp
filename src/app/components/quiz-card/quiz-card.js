import React, {Component, Fragment} from 'react';
// import {
//     Card, CardText, CardBody, CardImg,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
import {Card, CardBody} from 'material-kit-react';


class QuizCard extends Component {

    render() {
        const classes = useStyles();
        var details = this.props.details;
        return (
            <Fragment>
                {/* <Card className="card-container">
                    <CardImg style={{ width: "250px" }} src={'/' + details.displayPic} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{details.name}</CardTitle>
                        <CardSubtitle>Id:{details.id}</CardSubtitle>
                        <CardText>Duration:{details.duration} minutes</CardText>
                        <CardText>Difficulty:{details.difficulty}</CardText>
                        <Button >Take this quiz!</Button>
                    </CardBody>
                </Card> */}
                <Card className="card-container">
                <CardHeader color="danger">
                  <h4 className={classes.cardTitle}>{details.name}</h4>
                  <p>Difficulty:{details.difficulty}</p>
                </CardHeader>
                <CardBody>
                Id:{details.id}
                Duration:{details.duration} minutes
                </CardBody>
              </Card>
            </Fragment>
        )
    }
}

export default QuizCard;