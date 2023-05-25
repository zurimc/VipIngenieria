import React from "react";
import { useLocation } from "react-router-dom";

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
    path: "/projects-2020/1",
    title: "Centro de Atención Temporal COVID-19",
    client: "---",
    typeProject: "Anteproyecto arquitectónico",
    location: "---",
    surface: "2111.41 M2",
    description:
        " Se denominan Centros de Atención Temporal COVID-19 (CAT-COVID19) "+
        " a los módulos provisionales habilitados durante la contingencia por " +
        " SARS-CoV2 (COVID19), ubicados en estacionamientos, espacios aledaños o alternativos " +
        "a un hospital de reconversión. Tienen la función de ampliar la capacidad "+
        "de atención del hospital a pacientes y de permitir la diferenciación entre "+
        "pacientes con sospecha y confirmados de COVID-19 de otras patologías, con el fin de brindarles la mejor atención.",
      image1: require("assets/img/VIP/6. TEMPORAL COVID/Imagen8.png"),  
      image2: require("assets/img/VIP/6. TEMPORAL COVID/Imagen9.png"), 
      image3: require("assets/img/VIP/6. TEMPORAL COVID/Imagen10.png"),
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
      "Se realizó el anteproyecto arquitectónico de un centro de Primera Acogida para "+ 
      "niñas, niños y adolescentes no acompañados en situacion de migración. El proyecto "+
      "consta de dormitorios, baños, regaderas, vestidores, comedor, cocina y la remodelación de sus oficinas.",
      image1: require("assets/img/VIP/9. CENTRO PRIMERA ACOGIDA/Diapositiva1.PNG"),  
      image2: require("assets/img/VIP/9. CENTRO PRIMERA ACOGIDA/Diapositiva2.PNG"), 
      image3: require("assets/img/VIP/9. CENTRO PRIMERA ACOGIDA/Diapositiva3.PNG"), 
      image4: require("assets/img/VIP/9. CENTRO PRIMERA ACOGIDA/Diapositiva4.PNG"), 
      image5: require("assets/img/VIP/9. CENTRO PRIMERA ACOGIDA/Diapositiva5.PNG"), 

}
]

function Projects2020(props) {
const location = useLocation();
const currentPath = location.pathname;
const privateIndustry = ProjectsData.find(
  (p) => p.path === currentPath
);


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
                          src={privateIndustry.image3}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={privateIndustry.image5}
                        ></img>
                      </Col>

                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={privateIndustry.image2}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={privateIndustry.image4}
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

export default Projects2020;
