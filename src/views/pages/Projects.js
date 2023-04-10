import React from "react";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function Projects() {
  //Menu de hamburguesa cuando la resolucion cambia
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div
          className="page-header clear-filter page-header-small"
          filter-color="blue"
        >
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/somos3.jpg") + ")"
            }}
          ></div>
          <Container>
            <div className="photo-container">
              <img alt="..." src={require("assets/img/bg3.jpg")}></img>
            </div>
            <h3 className="title">PROYECTOS GUBERNAMENTALES</h3>
          
          </Container>
      </div>
        <div className="section">
          <Container>
            <h5 className="description text-justify">
              La Secretaría de Relaciones Exteriores a través de la Agencia
              Mexicana de Cooperación Internacional para el Desarrollo, ha 
              impulsado el fortalecimiento en la modernización de la infraestructura
              y prestación de los servicios migratorios mediante el mejoramiento de la
              Estación Migratoria de Mexicali para el cual se trabajó en el diseño de 
              anteproyecto, desarrollo de proyecto ejecutivo y ejecución de trabajos de 
              remodelación, con el fin de mejorar el funcionamiento  y aumentar la
              capacidad de personas por alojar, priorizando la seguridad de los mismos.
            </h5>
            <Container >
              <ul className="description text-justify" >
                <li>Centro migratorio de Mexicali.</li>
                <li >Centro migratorio de Tijuana.</li>
                <li >Centro migratorio de Tenosique.</li>
                <li >Metro Zócalo.</li>
                <li >Secretaría de Relaciones Exteriores.</li>
              </ul>
            </Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">Remodelaciones</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("5");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/mexicali/1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/mexicali/2.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/mexicali/5.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/mexicali/3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/mexicali/4.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/mexicali/6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/CENDI/1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/CENDI/4.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/CENDI/5.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/CENDI/2.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/CENDI/3.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/CENDI/6.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/CENDI/7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tenosique/1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tenosique/2.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tenosique/3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tenosique/4.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tenosique/5.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tenosique/6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills4">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tijuana/1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tijuana/2.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tijuana/3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/Tijuana/4.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills5">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/metro/1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/metro/2.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/metro/3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/metro/4.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/metro/5.jpg")}
                        ></img>
                      
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Projects;