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
    src: require("assets/img/img1.jpg"),
    altText: "Zona I",
    caption: "Remodelación y mantenimiento"
  },
  {
    src: require("assets/img/img3.jpg"),
    altText: "Clínica temporal de tratamiento de COVID",
    caption: "Proyecto"
  },
  {
    src: require("assets/img/img4.jpg"),
    altText: "SRE",
    caption: "Remodelación"
  },
  {
    src: require("assets/img/img.jpg"),
    altText: "Centro Migratorio de Tijuana",
    caption: "Remodelación"
  },
  {
    src: require("assets/img/img2.jpg"),
    altText: "Metro Zócalo",
    caption: "Mantenimiento"
  },
  {
    src: require("assets/img/img5.jpg"),
    altText: "Centro Migratorio de Mexicali",
    caption: "Remodelación"
  },
  {
    src: require("assets/img/img6.jpg"),
    altText: "Centro Migratorio Tenosique",
    caption: "Remodelación"
  },
  {
    src: require("assets/img/img7.jpg"),
    altText: "CENDI 'Rosario Castellanos'",
    caption: "Mantenimiento"
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
      <div className="section" id="carousel">
        <Container>
            <h2>Conoce nuestros proyectos</h2>
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
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
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
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
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
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
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
