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
import Projects2022 from "views/pages/Projects2022.js";
import Projects2020 from "views/pages/Projects2020.js";
import Projects2021 from "views/pages/Projects2021.js";
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
        {/* <Route
          path="/projects-page"
          render={(props) => <Projects {...props} />}
        /> */}
         <Route
          path="/projects-2020/1"
          render={(props) => <Projects2020 {...props} />}
        />
        <Route
          path="/projects-2020/2"
          render={(props) => <Projects2020 {...props} />}
        />
       
         <Route
          path="/projects-2021/1"
          render={(props) => <Projects2021 {...props} />}
        />  
         <Route
          path="/projects-2021/2"
          render={(props) => <Projects2021 {...props} />}
        /> 
         <Route
          path="/projects-2021/3"
          render={(props) => <Projects2021 {...props} />}
        /> 
         <Route
          path="/projects-2021/4"
          render={(props) => <Projects2021 {...props} />}
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
