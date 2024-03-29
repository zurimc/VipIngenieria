import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function AboutUs() {
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
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">¿Quiénes somos?</h2>
                <h3 className="title">Antecedentes</h3>
                <h5 className="description" style={{textAlign: "center"}}>
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
                <Col md="6">
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
        <div className="section-team text-center">
          <Container>
            <h2 className="title">Filosofía</h2>
            <div className="team">
              <Row>
                <Col md="6">
                  <div className="team-player">
                    
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
              <h5 className="category text-info">
               Profesionalismo:
              </h5>
              <p className="description">Contamos con un equipo de especialistas calificado para desarrrollar
                de la mejor manera, todo tipo de proyectos.
              </p>
              <h5 className="category text-info">
               Compromiso:
              </h5>
              <p className="description">Garantizamos siempre los mejores resultados en el desarrollo de nuestros 
                trabajos.
              </p>
              <h5 className="category text-info">
               Honestidad:
              </h5>
              <p className="description">Transmitimos confianza a nuestros clientes y colaboradores basándonos
                siempre en la integridad y honradez en nuestro ámbito profesional.
              </p>
              <h5 className="category text-info">
               Calidad:
              </h5>
              <p className="description">Gracias a nuestro equipo de especialistas y a la gran experiencia que tiene
                la empresa, grantizamos la mejor calidad en todos nuestros servicios.
              </p>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons tech_laptop"></i>
                <i className="now-ui-icons gestures_tap-01"></i>
                <i className="now-ui-icons ui-1_calendar-60"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons ui-2_settings-90"></i>
                <i className="now-ui-icons design_app"></i>
                <i className="now-ui-icons users_single-02"></i>
                <i className="now-ui-icons travel_istanbul"></i>
                <i className="now-ui-icons shopping_delivery-fas"></i>
                <i className="now-ui-icons education_paper"></i>
                <i className="now-ui-icons education_glasses"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons design-2_ruler-pencil"></i>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      
        <DarkFooter />
      </div>
    </>
  );
}

export default AboutUs;
