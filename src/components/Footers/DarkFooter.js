/*eslint-disable*/
import React from "react";

// reactstrap components
import { Col, Container, Row, Button } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div  id="copyright">
          <Row className="collections">
            <Col md="4">
                <img
                  alt="..."
                  style={{width:"230px"}}
                  src={require("assets/img/vip.png")}
                ></img>
            </Col>
            <Col md="4">
              Contacto
              <p>
                Calz. De Becerra 70, Tacubaya, Miguel Hidalgo, 11870 Ciudad de México, CDMX
              </p>
              <p>
              vip.obra@gmail.com
              </p>
            </Col>
            <Col md="4">
            © {new Date().getFullYear()}, por{" "}
              <a
                href="https://vipobra.wixsite.com/vipingenieria"
                target="_blank"
              >
                VIP INGENIERÍA S.A. DE C.V.
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
