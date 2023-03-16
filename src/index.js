import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SignUp from "views/examples/SignUp.js";
import CMT from "views/examples/CMT.js";
import Clinica from "views/examples/Clinica.js";
import CENDI from "views/examples/CENDI.js";
import CMTE from "views/examples/CMTE.js";
import Metro from "views/examples/Metro.js";
import SRE from "views/examples/SRE.js";
import Zona from "views/examples/Zona.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
         <Route
          path="/CMT"
          render={(props) => <CMT {...props} />}
        />
        <Route
          path="/CENDI"
          render={(props) => <CENDI {...props} />}
        />
        <Route
          path="/Clinica"
          render={(props) => <Clinica {...props} />}
        />
        <Route
          path="/CMTE"
          render={(props) => <CMTE {...props} />}
        />
        <Route
          path="/Metro"
          render={(props) => <Metro {...props} />}
        />
        <Route
          path="/SRE"
          render={(props) => <SRE {...props} />}
        />
        <Route
          path="/Zona"
          render={(props) => <Zona {...props} />}
        />        
         <Route
          path="/sign-up"
          render={(props) => <SignUp {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
