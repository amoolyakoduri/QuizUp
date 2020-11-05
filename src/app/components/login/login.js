import React, { Component , Fragment } from "react";
import Topnav from "../topnav/topnav";
import { Button} from 'reactstrap';
import { Link, withRouter  } from "react-router-dom";
import classnames from "classnames";
import { loginUser } from "../../../redux/actions/authActions";
import { connect } from 'react-redux'

class Login extends Component {

    constructor() {
        super();
        this.state = {
          emailId: "",
          password: "",
          errors: {}
        };
      }

    handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
    }

    onChange = (event) => {
        let key = event.target.id;
        let value = event.target.value;
        this.setState({ [key]: value });
    }

    render() {
        const { errors } = this.state;
        return (
            <Fragment>
                <Topnav/>
                <div className="login-container">
                    <div class="card card-container">
                        <div class="login-card">
                            <div className="heading-container">
                                <h3>Login</h3>
                            </div>
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-3 col-form-label label">Email</label>
                                <div class="col-sm-9 input-container">
                                <input type="text"
                                    error={errors.emailId}
                                    className={classnames("form-control input-box", {invalid: errors.emailId})}
                                    class="form-control input-box" onChange={this.onChange} value={this.state.emailId}
                                    id="emialId"
                                    placeholder="Email Id"
                                    minLength="1"
                                    maxLength="30"
                                    required/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-3 col-form-label label">Password</label>
                                <div class="col-sm-9 input-container">
                                <input type="password"
                                    error={errors.password}
                                    className={classnames("form-control input-box", {invalid: errors.password})}
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    id="password"
                                    placeholder="Password"
                                    minLength="1"
                                    maxLength="10"
                                    pattern="^[a-zA-Z]+$"
                                    required/>
                                </div>
                            </div>
                            <div className="heading-container">
                                <Button color="primary" type="submit" size="sm">SignIn</Button>
                            </div>
                            <div className="heading-container">
                                New to Quizzo? <span className="t-app-theme-color"><Link to="signUp"> Sign up now ></Link></span>
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
    //   loginSuccessDispatch: (payload) => { dispatch(onOwnerLoginSuccess(payload)) },
    //   loginFailureDispatch: () => { dispatch(onLoginFailure()) }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Login);
