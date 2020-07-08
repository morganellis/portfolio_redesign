import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./Main/Main";
import Slenderiiz from "./Projects/Slenderiiz/Slenderiiz";
import Diamonds from "./Projects/Diamonds/Diamonds";
import Enrollment from "./Projects/Enrollment/Enrollment";
import Jouve from "./Projects/Jouve/Jouve";
import Travel from "./Projects/Travel/Travel";

function App() {

  return (
    <div className="app-wrap">
      <Switch>
        <Route path="/hello" component={Main} />
        <Route exact path="/" render={() => <Redirect to="/hello" />} />
        <Route path="/slenderiiz" component={Slenderiiz} />
        <Route path="/diamonds" component={Diamonds} />
        <Route path="/enrollment" component={Enrollment} />
        <Route path="/jouve" component={Jouve} />
        <Route path="/travel" component={Travel} />
      </Switch>
    </div>
  );
}

export default App;