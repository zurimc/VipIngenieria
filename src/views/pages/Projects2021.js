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

const ProjectsData = [
  {
    Id: "1",
    path: "/projects-2021/1",
    title: "Biblioteca Escolar",
    client: "---",
    typeProject: "Anteproyecto y proyecto arquitectónico",
    location: "---",
    surface: "493.30 M2",
    description:
        " Se denominan Centros de Atención Temporal COVID-19 (CAT-COVID19)"+
        " a los módulos provisionales habilitados durante la contingencia por" +
        " SARS-CoV2 (COVID19), ubicados en estacionamientos, espacios aledaños o alternativos" +
        "a un hospital de reconversión.Tienen la función de ampliar la capacidad"+
        "de atención del hospital a pacientes y de permitir la diferenciación entre"+
        "pacientes con sospecha y confirmados de COVID-19 de otras patologías, con el fin de brindarles la mejor atención.",
      image1: require("assets/img/VIP/sre/1.jpg"),  
      image2: require("assets/img/VIP/sre/2.jpg"), 
      image3: require("assets/img/VIP/sre/3.jpg"), 
      image4: require("assets/img/VIP/sre/4.jpg"), 
      image5: require("assets/img/VIP/sre/5.jpg"), 
      image6: require("assets/img/VIP/sre/6.jpg"), 
      image7: require("assets/img/VIP/sre/7.jpg"), 
      image8: require("assets/img/VIP/sre/8.jpg"),  
  
},
{
  Id: "2",
  path: "/projects-2020/2",
  title: "Centro de Primera Acogida",
  client: "---",
  typeProject: "Propuesta arquitectónica",
  location: "---",
  surface: "646.82 M2",
  description:
      "Se realizó el anteproyecto arquitectónico de un centro de Primera Acogida para"+ 
      "niñas, niños y adolescentes no acompañados en situacion de migración.El proyecto"+
      "consta de dormitorios, baños, regaderas, vestidores, comedor, cocina y la remodelación de sus oficinas.",
      image1: require("assets/img/VIP/zona/1.jpg"),  
      image2: require("assets/img/VIP/zona/2.jpg"), 
      image3: require("assets/img/VIP/zona/3.jpg"), 
      image4: require("assets/img/VIP/zona/4.jpg"), 
      image5: require("assets/img/VIP/zona/5.jpg"), 
      image6: require("assets/img/VIP/zona/6.jpg"),

}
]
function Projects2021() {
  //menu de hamburguesa cuando la resolucio cambia.
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
        </Container>
        {privateIndustry && (
        <Container key={privateIndustry.Id}>
          <div>
            <h2 className="title">{privateIndustry.title}</h2>
            <p className="category">Cliente: {privateIndustry.client}</p>
            <p className="category">Tipo de Proyecto: {privateIndustry.typeProject}</p>
            <p className="category">Ubicación: {privateIndustry.location}</p>
            <p className="category">Ubicación: {privateIndustry.surface}</p>
          </div>
        </Container>
      )}
    </div>
      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <h4 className="title text-center">Galeria de Proyectos</h4>
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
            {privateIndustry && (
            <TabContent className="gallery" activeTab={"pills" + pills}>
              
              <TabPane tabId="pills2">
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <h5 className="description text-justify">
                    {privateIndustry.description}
                    </h5>
                    <Col md="6">
                      <img
                        alt="..."
                        className="img-raised"
                        src={privateIndustry.image1}
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src={privateIndustry.image2}
                      ></img>
                       <img
                        alt="..."
                        className="img-raised"
                        src={privateIndustry.image3}
                      ></img>
                    </Col>
                    <Col md="6">
                      <img
                        alt="..."
                        className="img-raised"
                        src={privateIndustry.image4}
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src={privateIndustry.image5}
                      ></img>
                       <img
                        alt="..."
                        className="img-raised"
                        src={privateIndustry.image6}
                      ></img>
                    </Col>
                  </Row>
                </Col>
              </TabPane>
            </TabContent>
  )}
          </Row>
        </Container>
        
      </div>
      <DarkFooter />
    </div>
  </>
  );
}

export default Projects2021;
