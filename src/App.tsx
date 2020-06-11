import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />

      <Switch>
        
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Test() {
  return <h2>Test</h2>;
}

export default App;
