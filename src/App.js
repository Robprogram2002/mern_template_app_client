import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const dispatchFn = useDispatch();
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
        <Route path="/login" exact render={(props) => <h1>Login</h1>} />
        <Route path="/signup" exact render={(props) => <h1>SignUp</h1>} />
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
