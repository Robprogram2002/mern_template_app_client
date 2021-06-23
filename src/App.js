import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import LoginPage from "./pages/Auth/LoginPage";
import SignUp from "./pages/Auth/SignUp";

function App() {
  const userState = useSelector((state) => state.user);

  let routes = (
    <Switch>
      <Route path="/" exact render={(props) => <h1>Hello from home page</h1>} />
      <Route
        path="/:postId"
        render={(props) => <h1>Hello from a single post</h1>}
      />
      <Redirect to="/" />
    </Switch>
  );

  if (!userState.authenticated) {
    routes = (
      <Switch>
        <Route path="/login" exact render={(props) => <LoginPage />} />
        <Route path="/signup" exact render={(props) => <SignUp />} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <Router>
      <div className="App">
        {userState.email ? userState.email : "Hello World!"}
        {routes}
      </div>
    </Router>
  );
}

export default App;
