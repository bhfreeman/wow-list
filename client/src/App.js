// Functionality Imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Page Imports
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-light-gray min-h-screen text-off-cream">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
