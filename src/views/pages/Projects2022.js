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
    path: "/projects-2022/1",
    title: "Remodelación Oficina",
    client: "Particular",
    typeProject: "Proyecto arquitectónico y remodelación",
    location: "Ciudad de México",
    surface: "32 M2",
    description:
        "Con el fin de brindar una mayor estética y rehabilitar las escaleras exteriores del "+
        "edificio, se realizó el proyecto arquitectónico y de interiorismo para la remodelación " +
        "de la fachada y la oficina principal del sitio, la cual cuenta con un medio baño que " +
        "también fue remodelado. De igual manera se realizo el anteproyecto del diseño de su "+
        "roof garde.",
      image1: require("assets/img/VIP/22. REMODELACION OFICINA/FACHADA PROPUESTA A.jpg"),  
      image2: require("assets/img/VIP/22. REMODELACION OFICINA/FACHADA PROPUESTA B.jpg"), 
      image3: require("assets/img/VIP/22. REMODELACION OFICINA/INTERIOR 3 A.jpg"), 
      image4: require("assets/img/VIP/22. REMODELACION OFICINA/INTERIOR A.jpg"), 
      image5: require("assets/img/VIP/22. REMODELACION OFICINA/ROOF 2.jpg"), 
      image6: require("assets/img/VIP/22. REMODELACION OFICINA/ROOF 3.jpg"), 
      image7: require("assets/img/VIP/22. REMODELACION OFICINA/SANITARIO F.jpg"), 
      image8: require("assets/img/VIP/22. REMODELACION OFICINA/1.jpg"),
      image9: require("assets/img/VIP/22. REMODELACION OFICINA/2.jpg"), 
      image10: require("assets/img/VIP/22. REMODELACION OFICINA/3.jpg"), 
},
{
  Id: "2",
  path: "/projects-2022/2",
  title: "Ludoteca",
  client: "---",
  typeProject: "Proyecto Arquitectónico y remodelación",
  location: "---",
  surface: "90 M2",
  description:
      "Como parte de la iniciativa de incorporar espacios infantiles en edificios "+
      "existentes se realizó el diseño de proyecto arquitectónico de la remodelación " +
      "de un área en desuso para la implementación de una ludoteca infantil con áreas " +
      "para realizar actividades que incentivan las habilidades motrices finas y gruesas ",
    image1: require("assets/img/VIP/23. LUDOTECA/Imagen15.jpg"),  
    image2: require("assets/img/VIP/23. LUDOTECA/Imagen16.jpg"), 
    image3: require("assets/img/VIP/23. LUDOTECA/Imagen17.jpg"), 
    image4: require("assets/img/VIP/23. LUDOTECA/Imagen18.jpg"), 
    image5: require("assets/img/VIP/23. LUDOTECA/Imagen19.jpg"), 
    image6: require("assets/img/VIP/23. LUDOTECA/Imagen20.jpg"), 
    image7: require("assets/img/VIP/23. LUDOTECA/Imagen21.jpg"), 
    image8: require("assets/img/VIP/23. LUDOTECA/Imagen22.jpg"),
    image9: require("assets/img/VIP/23. LUDOTECA/Imagen23.jpg"),
},
{
  Id: "3",
  path: "/projects-2022/3",
  title: "Mantenimiento Residencial",
  client: "Particular",
  typeProject: "Anteproyecto arquitectónico",
  location: "Ciudad de México",
  surface: "",
  description:
      "Con el fin de proveer condiciones óptimas de hostilidad para los "+
      "futuros inquilinos de la residencia tipo departamento, se presentaron " +
      "propuestas de remodelación de roof garden y se realizaon trabajos " +
      "de mantenimiento preventivo que incluyeron desmotaje de mobiliario, resanes, pintura "+
      "en plafones, muros y estructuras, limpieza y pulido de pisos y cancelerías, asi como "+
      "reparaciones en sistemas de desagüe y obra exterior.",
    image1: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/1.jpg"),  
    image2: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/2.jpg"), 
    image3: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/3.jpeg"), 
    image4: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/4.jpg"), 
    image5: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/5.jpg"), 
    image6: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/6.jpg"), 
    image7: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/7.jpeg"), 
    image8: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/8.jpg"),
    image9: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/9.jpg"), 
    image10: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/10.jpg"), 
    image11: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/11.jpg"),
},
{
  Id: "4",
  path: "/projects-2022/4",
  title: "Remodelación Roof Garden",
  client: "Particular",
  typeProject: "Mantenimiento y remodelación",
  location: "Ciudad de México",
  surface: "95 M2",
  description:
      "Se realizó la remodelación de roof garden con trabajos que incluyeron mantenimiento "+
      "a piso y plafón de madera deck de cumarú, instalación de doble cubierta con lámina " +
      "translucida, así como aplanados en muros y puntura vínilica y reparaciones en sistemas " +
      "de desagüe y jardineras. Ademas se realizó la adecuación de un nuevo sanitario y se "+
      "remodeló el existete con cambios en acabados y revisión de instalaciones hidrosanitarias.",
    image1: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/1.png"),  
    image2: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/2.jpeg"), 
    image3: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/Imagen3.jpg"), 
    image4: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/4.jpg"), 
    image5: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/5.jpeg"), 
    image6: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/6.jpeg"), 
    image7: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/7.jpeg"), 
    image8: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/8.jpeg"),
    image9: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/9.jpeg"), 
    image10: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/10.jpeg"), 
    image11: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/11.jpeg"), 
    image12: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/12.jpeg"),
},

]

function Projects2022() {

const location = useLocation();
const currentPath = location.pathname;
const privateIndustry = ProjectsData.find(
  (p) => p.path === currentPath
);
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
                        <img
                          alt="..."
                          className="img-raised"
                          src={privateIndustry.image7}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={privateIndustry.image9}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={privateIndustry.image11}
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
                        <img
                          alt="..."
                          className="img-raised"
                          src={privateIndustry.image8}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={privateIndustry.image10}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={privateIndustry.image12}
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

export default Projects2022;
