import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
//importar mapa
import {Maps} from "components/Maps/index.js"

function ContactUs() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);

  let pageHeader = React.createRef();

  React.useEffect(() => {
    //Efecto del scroll cuando baja el navbar cambia de color.
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
    //Menu de hamburguesa cuando la pagina cambia de resolucion aparece el menu.
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
//Pins de las oficinas en el mapa importado.
  const offices = [
    {
      ubi: [-99.18724973305474, 19.396930263392687],
      title: "OFICINA CENTRAL CDMX",
      description: "Teléfono: +52 55 5611 8558",
      img: ""
    },
    {
      ubi: [-100.38322180713631, 25.664657650573528],
      title: "OFICINA MONTERREY",
      description: "Teléfono: +81 8335-9208",
      img: ""
    }, 
    {
      ubi: [-77.03383918520282, -12.093024786961486],
      title: "OFICINA LIMA PERÚ",
      description: "Teléfono: +51 1719 2079",
      img: ""
    }
  ];
  return (
    <>
    <IndexNavbar />
    <div filter-color="gray"  ref={pageHeader}>
      <div className="wrapper">
        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/edificio5.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px",
          }}
          id="signup-section"
        >
          <Container>
            <Row>
              <Col lg="6" md="12">
                <Card className="card-signup" data-background-color="gray">

                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <CardTitle className="title-up" tag="h3">
                        Contáctenos
                      </CardTitle>
                      <h5 className="title text-justify">Póngase en contacto con VIP INGENIERÍA para conocer más sobre nuestros servicios.</h5>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border" + (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Nombre"
                          type="text"
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border" + (emailFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="text"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border" + (emailFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons tech_mobile"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Teléfono"
                          type="text"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border" + (emailFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons location_pin"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Dirección"
                          type="text"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border" + (emailFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons files_paper"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Asunto"
                          type="text"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border" + (emailFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-2_chat-round"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Escribe tu mensaje aquí..."
                          type="textArea"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        ></Input>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-info btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        Enviar
                      </Button>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card> <Maps marcadores={offices} /></Card>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
        </div>
    </div>
    </>
  );
}

export default ContactUs;
