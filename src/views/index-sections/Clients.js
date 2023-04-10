import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components


function Clients() {

  return (
    <>
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
    </>
  );
}

export default Clients;
