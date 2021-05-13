
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Portfolio } from "../pages/Portfolio";
import { Navigation } from "./Navigation";

export const Routes = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/portfolio-website/" exact>
            <Home />
          </Route>
          <Route path="/portfolio-website/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/portfolio-website/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

