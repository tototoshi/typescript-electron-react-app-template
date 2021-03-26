import "./app.css";
import React, { useState } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Hello</p>
    </div>
  );
}
