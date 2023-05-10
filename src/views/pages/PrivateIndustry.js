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
    title: "Centro de Atención Temporal COVID-19",
    client: "SRE/INM",
    typeProject: "Anteproyecto arquitectónico",
    location: "Ciudad de México"
  
},
{
  Id: "2",
  title: "Oficinas de Representaciòn INM Quintana Roo",
  client: "INM",
  typeProject: "Mantenimiento preventivo y correctivo",
  location: "Quintana Roo"

},
{
  Id: "3",
  title: "Oficinas de Representaciòn INM Yucatán",
  client: "INM",
  typeProject: "Mantenimiento preventivo y correctivo",
  location: "Yucatàn"

},
]

const data = [
  {
    Id: "1",
    Covid: {
      title: "Centro de Primera Acogida 'Huixtla'",
      description:
        " Se realizó el anteproyecto arquitectónico del centro de Primera Acogida para niñas, niños y adolescentes no acompañados en situación"+
        " de migración en el Municipio de Huixtla, Chiapas, para el Sistema Nacional" +
        " Para el Desarrollo Integral de la Familia, a través de la Agencia Mexicana de" +
        " Cooperación Internacional. El proyecto costa de dormitorios, baños, regaderas,"+
        "vestidores, comedor, cocina y la remodelación de sus oficinas.",
      image1: require("assets/img/VIP/sre/1.jpg"),  
      image2: require("assets/img/VIP/sre/2.jpg"), 
      image3: require("assets/img/VIP/sre/3.jpg"), 
      image4: require("assets/img/VIP/sre/4.jpg"), 
      image5: require("assets/img/VIP/sre/5.jpg"), 
      image6: require("assets/img/VIP/sre/6.jpg"), 
      image7: require("assets/img/VIP/sre/7.jpg"), 
      image8: require("assets/img/VIP/sre/8.jpg"),  
    },
    Id: "2",
    galeria: {
      title: "Inter Espacios'",
      description:
      "Mantenimiento correctivo a las instalaciones eléctricas, asi como a la red"+ 
      "de voz y datos de veinte sucursales de la empresa Inter Espacios, ubicadas"+
      "en la Ciudad de México, Estado de México, Puebla, Querétaro y Morelos.",
      image1: require("assets/img/VIP/zona/1.jpg"),  
      image2: require("assets/img/VIP/zona/2.jpg"), 
      image3: require("assets/img/VIP/zona/3.jpg"), 
      image4: require("assets/img/VIP/zona/4.jpg"), 
      image5: require("assets/img/VIP/zona/5.jpg"), 
      image6: require("assets/img/VIP/zona/6.jpg"),
    },
   
  },
]

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
          </Container>
          {ProjectsData.map((product) => {
            return (
          <Container key={product.Id}>
            <div >
            <h2 className="title">{product.title}</h2>
            <p className="category">Cliente: {product.client}</p>
            <p className="category">Tipo de Proyecto: {product.typeProject}</p>
            <p className="category">Ubicaciòn: {product.location}</p>
            </div>
          </Container>
            );
          })}
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
              {data.map((info) => {
            return (
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                    <h1 className="text-center">{info.Covid.title}</h1>
                      <h5 className="description text-justify">
                      {info.Covid.description}
                      </h5>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={info.Covid.image1}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={info.Covid.image2}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={info.Covid.image3}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={info.Covid.image4}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={info.Covid.image5}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={info.Covid.image6}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={info.Covid.image7}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={info.Covid.image8}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                    <h1 className="text-center">{info.galeria.title}</h1>
                      <h5 className="description text-justify">
                        {info.galeria.description}
                      </h5>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={info.galeria.image1}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={info.galeria.image2}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={info.galeria.image3}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={info.galeria.image4}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={info.galeria.image5}
                        ></img>
                         <img
                          alt="..."
                          className="img-raised"
                          src={info.galeria.image6}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
   );
  })}
            </Row>
          </Container>
          
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default PrivateIndustry;
