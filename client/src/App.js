// Functionality Imports
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Page Imports
import LandingPage from "./pages/LandingPage";

function App() {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
    <div className="bg-light-gray min-h-screen text-off-cream">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage
            setIsActive={setIsActive}
            isActive={isActive}
            />
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
