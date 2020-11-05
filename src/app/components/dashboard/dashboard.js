import React, { Component, Fragment } from "react";
import UserNav from '../userNav/userNav';
import Profile from '../profile/profile';
import Recommendations from "../recommendations/recommendations";

class Dashboard extends Component {

    render() {
        return (
            <Fragment>
                <UserNav />
                <div className="container">
                <div className="header">
                    <Profile/>
                </div>
                <div className="analytics">
                    Analytics
                </div>
                <div className="recommendations">
                    <Recommendations/>
                </div>
                <div className="history">
                    history
                </div>
                </div>
                {/* <div className="dashboard-container">
                    <div className="left-container">
                        <Profile/>
                        <div class="card">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <div class="card analytics">
                            <div class="card-body">
                                Analytics Info sits here.
                            </div>
                        </div>
                        <div class="card history">
                            <div class="card-body">
                                Previously curated quizzes
                            </div>
                        </div>
                        <div class="card recommendations">
                            <div class="card-body">
                                Recommended quizzes
                            </div>
                        </div>
                    </div>
                </div> */}
            </Fragment>
        );
    }
}

export default Dashboard;
