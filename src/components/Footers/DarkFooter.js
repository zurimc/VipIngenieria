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
              Redes sociales
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button>
            </Col>
            <Col md="4">
              Contacto
              <p>
              Mercaderes No. 20, piso 5, Col. San José Insurgentes, Benito Juárez, C.P. 03900, CDMX.
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
