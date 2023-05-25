/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { transform } from "typescript";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/edificio1.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
          
            <h1 className="h1-seo" style={{lineHeight: "4"}}>Construya y Diseñe con nosotros</h1>
            <h4 style={{color: "#36478A", marginLeft:"200px" ,textAlign:"left", fontStyle: "italic", textShadow:"1.5", fontSize: "4em", fontWeight: "400", lineHeight: "0.5"}}>Diseño</h4>
            <h4 style={{color: "#36478A", marginLeft:"240px" ,textAlign:"left", fontStyle: "italic", textShadow:"1.5", fontSize: "4em", fontWeight: "400", lineHeight: "0.5"}}>Supervisión</h4>
            <h4 style={{color: "#36478A", marginLeft:"280px" ,textAlign:"left", fontStyle: "italic", textShadow:"1.5", fontSize: "4em", fontWeight: "400", lineHeight: "0.5"}}>Construcción</h4>
            <h4 style={{color: "#36478A",  marginLeft:"320px" ,textAlign:"left", fontStyle: "italic", textShadow:"1.5", fontSize: "4em", fontWeight: "400", lineHeight: "0.5"}}>Y Mantenimiento</h4>
          </div>
       
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
