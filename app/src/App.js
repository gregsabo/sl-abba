import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Member from "./components/Member";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/members/:id">
          <Member />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
