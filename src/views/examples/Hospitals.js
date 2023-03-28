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

function ProfilePage() {
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
            <h3 className="title">PROYECTOS SECTOR SALUD</h3>
          
          </Container>
      </div>
        <div className="section">
          <Container>
            <h5 className="description text-justify">
            Se denominan Centros de Atención Temporal COVID-19 (CAT-COVID19) a 
            los módulos provisionales habilitados durante la contingencia por 
            SARS-CoV-2 (COVID19), ubicados en estacionamientos o espacios aledaños 
            o alternativos a un hospital de reconversión. Tienen la función de 
            ampliar la capacidad de atención del hospital a pacientes y de permitir 
            la diferenciación entre pacientes con sospecha o confirmados COVID-19 y 
            de otras patologías con el fin de brindarles la mejor atención.
            </h5>
            <ul className="description text-justify">
              <li >Clinica temporal de tratamiento de COVID.</li>
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
                          src={require("assets/img/VIP/clinica/1.jpg")}
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

export default ProfilePage;
