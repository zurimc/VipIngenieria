import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">¿Quiénes somos?</h2>
                <h3 className="title">Antecedentes</h3>
                <h5 className="description">
                  Empresa 100% mexicana, con sede en la Ciudad de México. Fundada en 1992, con una
                  trayectoria de más de 27 años desarrollando proyectos arquitectónicos, construccion,
                  gerencia, supervisión y mantenimiento.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/somos4.jpg") + ")"
                    }}
                  >
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/somos6.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/somos5.jpg") + ")"
                    }}
                  ></div>
                  <p>
                    Tenemos presencia a nivel nacional gracias a que contamos con personal
                    capacitado para diseñar, planear, coordinar y ejecutar proyectos de 
                    todo tipo, garantizando la mejor atención, una ejecución correcta y la
                    mejor calidad, cumpliendo con las expectativas de nuestros clientes.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Filosofía</h2>
            <div className="team">
              <Row>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/somos8.jpg")}
                    ></img>
                    <p className="category text-info">Misión</p>
                    <p className="description">
                      Ofrecer siempre la mejor calidad en cada uno de nuestros
                      trabajos, superando las expectativas de nuestros clientes,
                      logrando asi su satisfacción.
                    </p>
                   
                  </div>
                </Col>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/somos8.jpg")}
                    ></img>
                    <p className="category text-info">Visión</p>
                    <p className="description">
                      Ampliar nuestra presencia en el país, para crecer en el
                      sector de la construcción hasta llegar a ser la principal
                      empresa de proyectos y construcción del país.
                    </p>
                    
                  </div>
                </Col>
              
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Valores</h2>
              <h5 className="description">
               Profesionalismo:
              </h5>
              <p>Contamos con un equipo de especialistas calificado para desarrrollar
                de la mejor manera, todo tipo de proyectos.
              </p>
              <h5 className="description">
               Compromiso:
              </h5>
              <p>Garantizamos siempre los mejores resultados en el desarrollo de nuestros 
                trabajos.
              </p>
              <h5 className="description">
               Honestidad:
              </h5>
              <p>Transmitimos confianza a nuestros clientes y colaboradores basándonos
                siempre en la integridad y honradez en nuestro ámbito profesional.
              </p>
              <h5 className="description">
               Calidad:
              </h5>
              <p>Gracias a nuestro equipo de especialistas y a la gran experiencia que tiene
                la empresa, grantizamos la mejor calidad en todos nuestros servicios.
              </p>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Servicios</h2>
            <p className="description">Your project is very important to us.</p>
           
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Clientes actuales y anteriores</h2>
            <p className="description">Con quiénes hemos trabajado</p>
           
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
