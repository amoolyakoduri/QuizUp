import React, { Component, Fragment } from "react";
// import UserNav from '../userNav/userNav';
import Profile from '../profile/profile';
// import Recommendations from "../recommendations/recommendations";
// import History from '../history/history';
import Analytics from "../analytics/analytics";

class Dashboard extends Component {

    render() {
        return (
            <Fragment>

                <div className="db-container">
                <div className="db-header shadow">
                    <Profile/>
                </div>
                <div className="db-analytics shadow">
                    <Analytics/>
                </div>
                {/* <div className="db-recommendations shadow">
                    <Recommendations/>
                </div> */}
                {/* <div className="db-history shadow">
                    <History/>
                </div> */}
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;
