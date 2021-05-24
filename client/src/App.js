import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
// import useStickyState from "./utils/stickystate";

// Pages
import HomeList from "./pages/HomeList";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/Nav";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/list" component={HomeList} />
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
