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

function PrivateIndustry() {
  //menu de hamburguesa cuando se cambia la resolucion
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
            <h3 className="title">PROYECTOS SECTOR PRIVADO</h3>
          
          </Container>
      </div>
        <div className="section">
          <Container>
            <h5 className="description text-justify">
            Se realizaron trabajos de mantenimiento como sustitución de pisos en 
            la Dirección de Cooperación Económica y Organismos Internacionales 
            ubicada en el edificio de la Secretaría de Relaciones Exteriores al 
            centro de la ciudad, con la finalidad de brindarle a los funcionarios 
            las mejores condiciones laborales posibles en uno de los edificios más 
            emblemáticos de la Ciudad.
            </h5>
            <ul className="description text-justify">
              <li >Secretaría de relaciones exteriores</li>
              <li >Zona I</li>
            </ul>
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
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/sre/1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/sre/2.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/sre/5.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/sre/7.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/sre/3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/sre/4.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/sre/6.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/sre/8.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/zona/1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/zona/4.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/zona/5.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/zona/2.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/zona/3.jpg")}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/VIP/zona/6.jpg")}
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

export default PrivateIndustry;
