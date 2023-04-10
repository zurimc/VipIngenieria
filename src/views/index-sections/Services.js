import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

function Services() {
  
  return (
    <>
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
    </>
  );
}

export default Services;
