import "./app.css";
import React, { useEffect, useState } from "react";
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
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    window.electron
      .getMessage()
      .then((m) => {
        setMessage(m);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>{message}</p>
    </div>
  );
}
