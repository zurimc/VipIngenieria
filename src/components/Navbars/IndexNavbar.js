import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
               to="/index" 
               tag={Link}
              id="navbar-brand"
            >
              Vip Ingeniería
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  to="/index" 
                  tag={Link}
                >
                  <i className="now-ui-icons business_bank"></i>
                  <p>Inicio</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Proyectos</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/profile-page" tag={Link}>
                    Gubernamental
                  </DropdownItem>
                  <DropdownItem
                   to="/private-page" tag={Link}
                  >
                    Privado
                  </DropdownItem>
                  <DropdownItem to="/hospital" tag={Link}>
                  Sector Salud
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  to="/landing-page" 
                  tag={Link}
                >
                  <i className="now-ui-icons business_bulb-63"></i>
                  <p>Quiénes somos</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                   to="/contact-us" 
                   tag={Link}
                >
                  <i className="now-ui-icons travel_info"></i>
                  <p>Contacto</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
