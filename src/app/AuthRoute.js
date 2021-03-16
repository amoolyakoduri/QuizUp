import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  let {isLoggedIn} = props.user;
  const type = props.type;
  // if (type === "guest" && isLoggedIn) return <Redirect to="/dashboard" />;
  if (type === "private" && !isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};

const mapStateToProps = (state) => {
  const user = state.user;
  return { user };
};

export default connect(mapStateToProps)(AuthRoute);