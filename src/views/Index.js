import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import Projects from "./index-sections/Projects";
import Services from "./index-sections/Services.js";
import Clients from "./index-sections/Clients.js";

function Index() {
  //Menu de hamburgesa cuando la resolucion cambia.
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <Projects/>
          <Services/>
          <Clients />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
