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
import AboutUs from "views/pages/AboutUs.js";
import Projects from "views/pages/Projects.js";
import PrivateIndustry from "views/pages/PrivateIndustry.js";
import Hospital from "views/pages/Hospitals.js";
import ContactUs from "views/pages/ContactUs.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/aboutUs-page"
          render={(props) => <AboutUs {...props} />}
        />
        <Route
          path="/projects-page"
          render={(props) => <Projects {...props} />}
        />
         <Route
          path="/private-page/1"
          render={(props) => <PrivateIndustry {...props} />}
        />
        <Route
          path="/private-page/2"
          render={(props) => <PrivateIndustry {...props} />}
        />
        <Route
          path="/private-page/3"
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
