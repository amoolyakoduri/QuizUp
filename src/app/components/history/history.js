import React, { Component, Fragment } from "react";
import QuizCard from '../quiz-card/quiz-card';
import ScrollArea from 'react-scrollbar';

class History extends Component {

    constructor() {
        super();
        this.state = {
          quizzes: [
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
                <div class="history-container">
                    <div>
                        <h4 class="h-heading-contaiener" >Previous Quizzes</h4>
                    </div>
                        <ScrollArea
                            speed={0.8}
                            className="area"
                            contentClassName="content"
                            horizontal={false}
                            smoothScrolling={true}
                            >
                        <div class="h-cards-row-container">
                        {   this.state.quizzes &&
                            this.state.quizzes.map(quiz => {
                                return <QuizCard details={quiz} />;
                            })
                        }
                        </div>
                        </ScrollArea>
                </div>
            </Fragment>
        );
    }
}

export default History;