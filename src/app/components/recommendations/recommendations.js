import React, {Component, Fragment} from 'react';
import QuizCard from '../quiz-card/quiz-card';

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
                //   subTopics : [ 'collections','lists','array-lists','linked-lists']
              },
              {
                id : 2,
                name : "Quiz 2",
                duration : 120,
                difficulty : 4.5,
                // subTopics : [ 'collections','lists','array-lists','linked-lists']
              },
            //   {
            //     id : 3,
            //     name : "Quiz 3",
            //     duration : 45,
            //     difficulty : 4.0,
            //     subTopics : [ 'collections','lists','array-lists','linked-lists']
            //   }
          ]
        };
      }

    render() {
        return (
            <Fragment>
                <div class="recommendations-container">
                <div>
                    <h4 class="heading-contaiener" >Recommended Quizzes</h4>
                </div>
                <div class="cards-container">
                {   this.state.recommendations &&
                    this.state.recommendations.map(reco => {
                        return <QuizCard details={reco} />;
                    })
                }
                </div>
                </div>
            </Fragment>
        )
    }
}

export default Recommendations;