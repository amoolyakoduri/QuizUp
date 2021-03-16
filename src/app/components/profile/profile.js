import React, { Component, Fragment } from "react";
import displayPic from '../../../assets/images/display-pic.png';
import ReactStars from "react-rating-stars-component";

class Profile extends Component {

    constructor() {
        super();
        this.state = {
          firstName: "Amoolya",
          lastName: "Koduri",
          emailId: "akoduri@gmail.com",
          errors: {}
        };
      }

      ratingChanged = (newRating) => {
        console.log(newRating);
      };

    render() {
        return (
            <Fragment>
                <div class="card profile">
                    <div className="profile-container">
                        <div className="p-img-container">
                            <img src={displayPic} className="p-img" width="30" height="30" alt="" loading="lazy"/>
                        </div>
                        <div className="p-name-container">
                            <div>
                                {this.state.firstName + " " + this.state.lastName}
                            </div>
                            <div>
                                {this.state.emailId}
                            </div>
                            <div>
                            <ReactStars
                                count={5}
                                onChange={this.ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                            </div>
                        </div>
                        <div>
                            <i class="fab fa-github"></i>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Profile;