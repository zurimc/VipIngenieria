import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";
// sections for this page
import Images from "./index-sections/Images.js";
import Projects from "./index-sections/Projects";

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
          <div className=" text-center">
          <Container>
            <h2 className="title">Servicios</h2>
           <Row>
            <Col lg="4" md="12">
              <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/diseño.png")}
                ></img>
              <h4 className="title">Diseño y Desarrollo de Proyecto Ejecutivo</h4>
            </Col>
            <Col lg="4" md="12">
              <img
                alt="..."
                className="rounded-circle img-fluid img-raised"
                src={require("assets/img/supervision.png")}
              ></img>
              <h4 className="title">Gerencia y Supervisión</h4>
            </Col>
            <Col lg="4" md="12">
              <img
                alt="..."
                className="rounded-circle img-fluid img-raised"
                src={require("assets/img/mantenimiento.png")}
              ></img>
              <h4 className="title">Construcción y Mantenimiento</h4>
            </Col>
           </Row>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Nuestros clientes</h2>
            <p className="description">Con quiénes hemos trabajado</p>
              <Row>
                <Col lg="3" md="12">
                  <img
                    alt="..."
                    src={require("assets/img/segob.jpg")}
                  ></img>
                </Col>
                <Col lg="3" md="12">
                  <img
                    style={{marginTop: "-50px"}}
                    alt="..."
                    src={require("assets/img/sre.jpg")}
                  ></img>
                </Col>
                <Col lg="3" md="12">
                  <img
                    alt="..."
                    style={{marginTop: "20px"}}
                    src={require("assets/img/amex.jpg")}
                  ></img>
                </Col>
                <Col lg="3" md="12">
                  <img
                    alt="..."
                    src={require("assets/img/inm.jpg")}
                  ></img>
                </Col>
              </Row>   
              <Row>
              <Col lg="3" md="12">
                <img
                  alt="..."
                  src={require("assets/img/secretaria.jpg")}
                ></img>        
              </Col>
              </Row>      
          </Container>
        </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
