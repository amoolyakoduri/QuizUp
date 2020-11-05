import './App.css';
import React from 'react';
import jwt_decode from "jwt-decode";
import setAuthToken from '../config/setAuthToken';
import { setCurrentUser, logoutUser } from '../redux/actions/authActions';
import store from "../store";
import loader from '../assets/images/loader.png';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/signUp/signUp';
import Login from './components/login/login';
import Main from './pages/main/main';
import Landing from './pages/landing/landing';
import Dashboard from './components/dashboard/dashboard';
import Loader from './components/loader/loader';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  console.log("Token ",token);
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    },800)
  }

  render() {

    if(this.state.loading) {
      return (
        <div className="initial-loader">
            <img src={loader} alt="loader"/>
        </div>

      )
    } else {
      return (
        <div style={{width: "100%"}}>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/landing"/>
            )} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/ui" component={Main}/>
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Loader/>
        </div>
      )
    }
  }

}

export default App;
