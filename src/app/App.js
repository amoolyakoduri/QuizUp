import './App.css';
import React from 'react';
import jwt_decode from "jwt-decode";
import setAuthToken from '../config/setAuthToken';
import { setCurrentUser, logoutUser } from '../redux/user-info/user-info-actions';
import store from "../store";
import loader from '../assets/images/loader.png';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/signUp/signUp';
import Login from './components/login/login';
import Main from './pages/main/main';
import About from './components/about/about';
import Dashboard from './components/dashboard/dashboard';
import Create from './components/create/create';
import Loader from './components/loader/loader';
import QuizContainer from './components/quiz-container/quiz-container';
import Navbar from './components/navbar/navbar';
import Error from './components/error/error';
import AuthRoute from './AuthRoute';
import TestsContainer from './components/tests-container/tests-container';
import Report from './components/report/report';

// Check for token to keep user logged in
let user = JSON.parse(localStorage.getItem("user"));
if (user && user.accessToken) {
  // Set auth token header auth
  const token = user.accessToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  console.log(decoded);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
  else {
    // TODO
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
          <Navbar/>
          <Error/>
          <Switch>
          <AuthRoute type="guest" exact path="/" render={() => (
            <Redirect to="/about"/>
            )} />
            < exact path="/about" component={About} />
            <AuthRoute type="guest" exact path="/login" component={Login} />
            <AuthRoute type="guest" exact path="/signup" component={SignUp} />
            <AuthRoute type="guest" path="/ui" component={Main}/>
            <AuthRoute type="private" exact path="/create" component={Create} />
            <AuthRoute type="private" exact path="/quiz" component={QuizContainer} />
            <AuthRoute type="private" exact path="/dashboard" component={Dashboard} />
            <AuthRoute type="private" path="/tests" component={TestsContainer} />
            <AuthRoute type="private" path="/report" component={Report} />
            </Switch>
            <Loader/>
            </div>
            )
          }
        }

      }

      export default App;
