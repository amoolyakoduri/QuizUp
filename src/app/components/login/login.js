import React, { Component , Fragment } from "react";
import Topnav from "../topnav/topnav";
import { Button} from 'reactstrap';
import { Link , Redirect } from "react-router-dom";
import classnames from "classnames";
import { connect } from 'react-redux'
import { loginUser} from '../../../redux/user-info/user-info-actions';

class Login extends Component {

    constructor() {
        super();
        this.state = {
          username: "",
          password: "",
          errors: {}
        };
      }

    onChange = (event) => {
        let key = event.target.id;
        let value = event.target.value;
        this.setState({ [key]: value });
        let errors = this.state.errors;
        errors[key] = false;
        this.setState({errors : errors})
    }

    validate = () => {
        this.usernameValidation();
        this.passwordValidation();
        return !this.state.errors.username && !this.state.errors.password;
      };

    passwordValidation = () => {
        let errors = this.state.errors;
        if(this.state.password.trim() ==='' )
            errors["password"] = 'Password is required';
        else if(this.state.password.length<3)
            errors["password"] = 'Password should be at least 3 characters long.';
        else
            errors["password"] = false;
        this.setState({errors:errors});
        return;
    }

    usernameValidation = () => {
        let errors = this.state.errors;

        if (this.state.username.trim() === '') {
          errors["username"] = 'Username is required';
          this.setState({errors:errors});
          return;
        }
        errors["username"] = false;
        this.setState({errors:errors});
        return;
      };

    onClick = (event) => {
        if(this.validate()){
            this.props.loginUser(this.state.username,this.state.password)
            .then(res => {
                if(res.success)
                this.props.history.push("/dashboard");
            });
        }
        else {
            //TODO
        }
    }

    render() {
        return (
            <Fragment>
                <div className="login-container">
                    <div className="card login-card-container">
                        <div className="login-card">
                            <div className="login-heading-container">
                                <h3>Login</h3>
                            </div>
                            <div className="form-group row">
                                <label for="username" className="col-sm-3 col-form-label login-label">Username</label>
                                <div className="col-sm-9 login-input-container">
                                <input type="text"
                                    className={classnames("form-control login-input-box", {invalid: this.state.errors.username})}
                                    className="form-control login-input-box" onChange={this.onChange}
                                    id="username"
                                    placeholder="Username "
                                    required/>
                                    { this.state.errors.username!=false &&
                                        <sub className="invalid-sub">{this.state.errors.username}</sub>
                                    }
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="password" className="col-sm-3 col-form-label login-label">Password</label>
                                <div className="col-sm-9 login-input-container">
                                <input type="password"
                                    // error={errors.password}
                                    className={classnames("form-control login-input-box", {invalid: this.state.errors.password})}
                                    onChange={this.onChange}
                                    id="password"
                                    placeholder="Password"
                                    minLength="1"
                                    maxLength="10"
                                    pattern="^[a-zA-Z]+$"
                                    required/>
                                    { this.state.errors.password!=false &&
                                        <sub className="invalid-sub">{this.state.errors.password}</sub>
                                    }
                                </div>
                            </div>
                            <div className="login-heading-container">
                                <Button color="primary" type="submit" onClick={this.onClick} size="sm">Log In</Button>
                            </div>

                            <div className="login-heading-container">
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
    user: state.user,
});

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (username,password) => dispatch(loginUser(username,password)),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Login);
