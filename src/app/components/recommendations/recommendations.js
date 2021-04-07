import React, {Component, Fragment} from 'react';
import QuizCard from '../quiz-card/quiz-card';
import ScrollArea from 'react-scrollbar';
import QuizTuple from '../quiz-tuple/quiz-tuple';

class Recommendations extends Component {

    constructor() {
        super();
        this.state = {
          recommendations: [
              {
                  id : 1,
                  name : "Quiz 1",
                  duration : 60,
                  difficulty : 3.5,
              },
              {
                id : 2,
                name : "Quiz 2",
                duration : 120,
                difficulty : 4.5,
              },
              {
                id : 3,
                name : "Quiz 3",
                duration : 45,
                difficulty : 4.0,
              }
          ]
        };
      }

    render() {
        return (
            <Fragment>
                <div className="recommendations-container">

                <ScrollArea
                    speed={0.8}
                    className="area"
                    contentClassName="content"
                    horizontal={false}
                    smoothScrolling={true}
                    >
                <div className="r-cards-container">
                {   this.state.recommendations &&
                    this.state.recommendations.map(reco => {
                        return <QuizTuple details={reco} />;
                    })
                }
                </div>
                </ScrollArea>
                </div>
            </Fragment>
        )
    }
}

export default Recommendations;