import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
 
  {
    src: require("assets/img/VIP/11. BIBLIOTECA ESCOLAR/Imagen7.png"),
    altText: "Biblioteca Escolar",
    caption: "Anteproyecto Arquitectónico"
  },
  {
    src: require("assets/img/VIP/12. GIMNASIO ESCOLAR/Imagen15.png"),
    altText: "Gimnasio Escolar",
    caption: "Anteproyecto Arquitectónico"
  },
  {
    src: require("assets/img/VIP/13. CAMPO DE TIRO TECHADO/Imagen21.png"),
    altText: "Campo de Tiro Techado",
    caption: "Anteproyecto Arquitectónico"
  },
  {
    src: require("assets/img/VIP/14. TORRE DE ENTRENAMIENTO/Imagen7.png"),
    altText: "Torre de entrenamiento múltiple",
    caption: "Anteproyecto Arquitectónico"
  },
  {
    src: require("assets/img/VIP/15. TORRE DORMITORIO ESCOLAR/Imagen15.png"),
    altText: "Torre de dormitorios Escolar",
    caption: "Anteproyecto Arquitectónico"
  },
  {
    src: require("assets/img/VIP/22. REMODELACION OFICINA/3.jpg"),
    altText: "Remodelación oficina",
    caption: "Proyecto Arquitectónico"
  },
  {
    src: require("assets/img/VIP/23. LUDOTECA/Imagen24.jpg"),
    altText: "Ludoteca",
    caption: "Proyecto Arquitectónico"
  },
  {
    src: require("assets/img/VIP/24. MANTENIMIENTO RESIDENCIAL/12.jpg"),
    altText: "Mantenimiento residencial",
    caption: "Proyecto Arquitectónico"
  },
  {
    src: require("assets/img/VIP/25. REMODELACION ROOF GARDEN/13.jpg"),
    altText: "Remodelacion Roof Garden",
    caption: "Proyecto Arquitectónico"
  }
];

function Projects() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div  >
        <Container>
            <h2 className="title" style={{textAlign:"center"}}>Conoce nuestros proyectos</h2>
          <Row >
            <Col lg="12" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img className="category text-info" src={item.src} alt={item.altText} />
                      <div className="carousel-caption description">
                        <h3>{item.altText}</h3>
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="fa fa-angle-double-left fa-4x" style={{color: "#000"}}></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="fa fa-angle-double-right fa-4x" style={{color: "#000"}}></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Projects;
