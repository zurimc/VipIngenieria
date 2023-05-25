import React from "react";
import { useLocation } from "react-router-dom";

// reactstrap components
import {
  
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
        "Se realizó el diseño de anteproyecto de adaptación de un edificio destinado como "+
        "gimnasio con canchas deportivas para deportes de raqueta a doble altura, para " +
        "convertirlo en una biblioteca escolar. Contemplando un área de consulta, lectura, " +
        "acervo, así como un área administrativa, con la finalidad de albergar a "+
        "aproximadamente 100 personas.",
      image1: require("assets/img/VIP/11. BIBLIOTECA ESCOLAR/Imagen1.png"),  
      image2: require("assets/img/VIP/11. BIBLIOTECA ESCOLAR/Imagen2.png"), 
      image3: require("assets/img/VIP/11. BIBLIOTECA ESCOLAR/Imagen3.png"), 
      image4: require("assets/img/VIP/11. BIBLIOTECA ESCOLAR/Imagen4.png"), 
      image5: require("assets/img/VIP/11. BIBLIOTECA ESCOLAR/Imagen5.png"), 
      image6: require("assets/img/VIP/11. BIBLIOTECA ESCOLAR/Imagen6.png"), 
},
{
  Id: "2",
  path: "/projects-2021/2",
  title: "Gimnasio Escolar",
  client: "---",
  typeProject: "Anteproyecto y proyecto Arquitectónico.",
  location: "---",
  surface: "445.00 M2",
  description:
      "Se realizó la propuesta de proyecto arquitectónico de un gimnasio "+ 
      "techado y al aire libre en un área verde. El proyecto se resolvió "+
      "con una cubierta ligera, estructura de acero y cancelerías, con la intención "+ 
      "de vincular el espacio interior con el exterior.",
      image1: require("assets/img/VIP/12. GIMNASIO ESCOLAR/Imagen7.png"),  
      image2: require("assets/img/VIP/12. GIMNASIO ESCOLAR/Imagen8.png"), 
      image3: require("assets/img/VIP/12. GIMNASIO ESCOLAR/Imagen9.png"), 
      image4: require("assets/img/VIP/12. GIMNASIO ESCOLAR/Imagen10.png"), 
      image5: require("assets/img/VIP/12. GIMNASIO ESCOLAR/Imagen11.png"), 
      image6: require("assets/img/VIP/12. GIMNASIO ESCOLAR/Imagen12.png"),
      image7: require("assets/img/VIP/12. GIMNASIO ESCOLAR/Imagen13.png"), 
      image8: require("assets/img/VIP/12. GIMNASIO ESCOLAR/Imagen14.png"),

},
{
  Id: "3",
  path: "/projects-2021/3",
  title: "Campo de tiro techado",
  client: "---",
  typeProject: "Anteproyecto y proyecto Arquitectónico.",
  location: "---",
  surface: "553.38 M2",
  description:
      "Se realizó la propuesta de remodelación del campo de tiro, con la finalidad "+ 
      "de mejorar las instalaciones y reducir el ruido emitido durante los "+
      "entrenamientos del alumnado, se propuso cerrar el espacio con una nueva cubierta "+ 
      "y muros a base de panales de tabla cemento. Para cubrir las necesidades del "+
      "proyecto, se consideraron materiales que cumplen con el aislamiento acústico requerido.",
      image1: require("assets/img/VIP/13. CAMPO DE TIRO TECHADO/Imagen15.png"),  
      image2: require("assets/img/VIP/13. CAMPO DE TIRO TECHADO/Imagen16.png"), 
      image3: require("assets/img/VIP/13. CAMPO DE TIRO TECHADO/Imagen17.png"), 
      image4: require("assets/img/VIP/13. CAMPO DE TIRO TECHADO/Imagen18.png"), 
      image5: require("assets/img/VIP/13. CAMPO DE TIRO TECHADO/Imagen19.png"), 
      image6: require("assets/img/VIP/13. CAMPO DE TIRO TECHADO/Imagen20.png"),

},
{
  Id: "4",
  path: "/projects-2021/4",
  title: "Torre de entrenamiento múltiple",
  client: "---",
  typeProject: "Anteproyecto y proyecto Arquitectónico.",
  location: "---",
  surface: "358.76 M2",
  description:
      "Se propone una torre de 15 metros de altura, con 6 entrepisos y una azotea "+ 
      "destinada para actividades de entrenamiento, con una serie de aperturas "+
      "dinámicas en las fachadas norte, sur y este. La finalidad de estas medidas "+
      "es abrir o cubrir los vacios a través de muros movibles, adaptados según "+ 
      "los requerimientos de las prácticas y simulando la forma de un edificion. "+  
      "La fachada oeste se contempla con un muro ciego para la práctica de escalada.",
      image1: require("assets/img/VIP/14. TORRE DE ENTRENAMIENTO/Imagen1.png"),  
      image2: require("assets/img/VIP/14. TORRE DE ENTRENAMIENTO/Imagen2.png"), 
      image3: require("assets/img/VIP/14. TORRE DE ENTRENAMIENTO/Imagen3.png"), 
      image4: require("assets/img/VIP/14. TORRE DE ENTRENAMIENTO/Imagen4.png"), 
      image5: require("assets/img/VIP/14. TORRE DE ENTRENAMIENTO/Imagen5.png"), 
      image6: require("assets/img/VIP/14. TORRE DE ENTRENAMIENTO/Imagen6.png"),

},
{
  Id: "5",
  path: "/projects-2021/5",
  title: "Torre de Dormitorio Escolar",
  client: "---",
  typeProject: "Anteproyecto y proyecto Arquitectónico.",
  location: "---",
  surface: "1001.79 M2",
  description:
      "Se realizó la propuesta de anteproyecto de un complejo escolar y el "+ 
      "proyecto arquitectónico de un edificio de tres niveles destinados para "+
      "dormitorios y baños con vestidores con una capacidad de hasta 1000 alumnos. "+
      "Además se integraron aulas, sala de juntas, sala de maestros y aulas de "+ 
      "posgrado en planta alta.",
      image1: require("assets/img/VIP/15. TORRE DORMITORIO ESCOLAR/Imagen7.png"),  
      image2: require("assets/img/VIP/15. TORRE DORMITORIO ESCOLAR/Imagen8.png"), 
      image3: require("assets/img/VIP/15. TORRE DORMITORIO ESCOLAR/Imagen9.png"), 
      image4: require("assets/img/VIP/15. TORRE DORMITORIO ESCOLAR/Imagen10.png"), 
      image5: require("assets/img/VIP/15. TORRE DORMITORIO ESCOLAR/Imagen11.png"), 
      image6: require("assets/img/VIP/15. TORRE DORMITORIO ESCOLAR/Imagen12.png"),
      image7: require("assets/img/VIP/15. TORRE DORMITORIO ESCOLAR/Imagen13.png"), 
      image8: require("assets/img/VIP/15. TORRE DORMITORIO ESCOLAR/Imagen14.png"),

},
]
function Projects2021(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const privateIndustry = ProjectsData.find(
    (p) => p.path === currentPath
  );

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
