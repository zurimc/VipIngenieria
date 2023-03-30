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
import PrivateIndustry from "views/examples/PrivateIndustry.js";
import Hospital from "views/examples/Hospitals.js";
import ContactUs from "views/examples/ContactUs.js";

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
          path="/private-page"
          render={(props) => <PrivateIndustry {...props} />}
        />
         <Route
          path="/hospital"
          render={(props) => <Hospital {...props} />}
        />    
         <Route
          path="/contact-us"
          render={(props) => <ContactUs {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
