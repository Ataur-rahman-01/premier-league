import "./App.css";
import Banner from "./Components/Banner/Banner";
import Team from "./Components/Team/Team";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import ClubDetail from "./Components/ClubDetail/ClubDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Banner />
          <Team />
        </Route>
        <Route path="/home">
          <Banner />
          <Team />
        </Route>
        <Route path="/team/:id">
          <ClubDetail />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
