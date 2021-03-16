import React, { Component , Fragment } from "react";
import Topnav from "../topnav/topnav";
import { Button} from 'reactstrap';
import classnames from "classnames";
import { connect } from 'react-redux';
import { signUp } from '../../../redux/user-info/user-info-actions';


const Joi = require('joi');
const schema = Joi.object({
    username: Joi.string()
        .required(),
    firstName: Joi.string()
        .required(),
    lastName: Joi.string()
        .required(),
    email: Joi.string()
        .required(),
    password: Joi.string()
        .required()
})


class SignUp extends Component {

    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          username: "",
          firstName: "",
          lastName: "",
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
        this.firstNameValidation();
        this.lastNameValidation();
        this.emailValidation();
        return !this.state.errors.username && !this.state.errors.password
            && !this.state.errors.firstName && !this.state.errors.lastName
            && !this.state.errors.email;
      };

      passwordValidation = () => {
        let errors = this.state.errors;
        if(this.state.password.trim() ==='' )
            errors["password"] = 'Password is required';
        else if(this.state.password.length<3)
            errors["password"] = 'Password should be at least 8 characters long.';
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

      firstNameValidation = () => {
        let errors = this.state.errors;
        if (this.state.firstName.trim() === '') {
          errors["firstName"] = 'FirstName is required';
          this.setState({errors:errors});
          return;
        }
        errors["firstName"] = false;
        this.setState({errors:errors});
        return;
      };

      lastNameValidation = () => {
        let errors = this.state.errors;
        if (this.state.lastName.trim() === '') {
          errors["lastName"] = 'LastName is required';
          this.setState({errors:errors});
          return;
        }
        errors["lastName"] = false;
        this.setState({errors:errors});
        return;
      };

      emailValidation = () => {
        let errors = this.state.errors;
        if (
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            this.state.email,
          )) {
          errors["email"] = false;
          this.setState({errors:errors});
          return;
        }
        if (this.state.email.trim() === '') {
          errors["email"] = 'Email is required';
          this.setState({errors:errors});
          return;
        }
        errors["email"] = "Please enter a valid email.";
        this.setState({errors:errors});
        return;
      };

    onClick = (event) => {
        let accountDetails = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        if(this.validate()){
            this.props.signUp(accountDetails,this.props.history)
            .then(res => {
                if(res.success)
                this.props.history.push("/login");
            });
        }
        else {
            //TODO
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <Fragment>
                <div className="login-container">
                    <div class="card login-card-container">
                        <div class="login-card">
                            <div className="login-heading-container">
                                <h3>SignUp</h3>
                            </div>
                            <div class="form-group row">
                                <label for="emialId" class="col-sm-3 col-form-label login-label">Email</label>
                                <div class="col-sm-9 login-input-container">
                                <input type="email"
                                    error={errors.email}
                                    className={classnames("form-control login-input-box", {invalid: errors.email})}
                                    onChange={this.onChange}
                                    id="email"
                                    placeholder="Email"
                                    required/>
                                    { errors.email!=false &&
                                        <sub className="invalid-sub">{errors.email}</sub>
                                    }
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password" class="col-sm-3 col-form-label login-label">Password</label>
                                <div class="col-sm-9 login-input-container">
                                <input type="password"
                                    error={errors.password}
                                    className={classnames("form-control login-input-box", {invalid: errors.password})}
                                    onChange={this.onChange}
                                    id="password"
                                    placeholder="Password"
                                    pattern="^[a-zA-Z]+$"
                                    required/>
                                    { errors.password!=false &&
                                        <sub className="invalid-sub">{errors.password}</sub>
                                    }
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="username" class="col-sm-3 col-form-label login-label">Username</label>
                                <div class="col-sm-9 login-input-container">
                                <input type="text"
                                    error={errors.password}
                                    className={classnames("form-control login-input-box", {invalid: errors.username})}
                                    onChange={this.onChange}
                                    id="username"
                                    placeholder="Username"
                                    pattern="^[a-zA-Z0-9]+$"
                                    required/>
                                    { errors.username!=false &&
                                        <sub className="invalid-sub">{errors.username}</sub>
                                    }
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="firstName" class="col-sm-3 col-form-label login-label">FirstName</label>
                                <div class="col-sm-9 login-input-container">
                                <input type="text"
                                    error={errors.firstName}
                                    className={classnames("form-control login-input-box", {invalid: errors.firstName})}
                                    onChange={this.onChange}
                                    id="firstName"
                                    placeholder="First Name"
                                    pattern="^[a-zA-Z]+$"
                                    required/>
                                    { errors.firstName!=false &&
                                        <sub className="invalid-sub">{errors.firstName}</sub>
                                    }
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="lastName" class="col-sm-3 col-form-label login-label">LastName</label>
                                <div class="col-sm-9 login-input-container">
                                <input type="text"
                                    error={errors.lastName}
                                    className={classnames("form-control login-input-box", {invalid: errors.lastName})}
                                    onChange={this.onChange}
                                    id="lastName"
                                    placeholder="Last Name"
                                    pattern="^[a-zA-Z]+$"
                                    required/>
                                    { errors.lastName!=false &&
                                        <sub className="invalid-sub">{errors.lastName}</sub>
                                    }
                                </div>
                            </div>
                            <div className="login-heading-container">
                                <Button color="primary" type="submit" onClick={this.onClick} size="sm">Sign Up</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const isLoggedIn = state.user.isLoggedIn;
    return { isLoggedIn };
  }

  const mapDispatchToProps = (dispatch) => ({
    signUp(accountDetails,history) {
        return dispatch(signUp(accountDetails,history));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
