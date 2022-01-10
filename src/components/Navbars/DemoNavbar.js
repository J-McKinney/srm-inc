import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import Star from "../../assets/img/star.png";
import Circle from "../../assets/img/circle.png";
import Styles from "../../views/style.module.css";

function DemoNavbar(props) {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("white");
    }
    setIsOpen(!isOpen);
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("white");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
  }, []);
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <>
      <Navbar
        style={{ background: "black !important" }}
        expand="lg"
        className={
          props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="MVCLogo">
              <Link to="/srm-inc/home" className="nav-link">
                <img
                  className={Styles.logo}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    margin: "0",
                  }}
                  src={Star}
                  alt="Logo"
                />
                <img
                  className={Styles.logo}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    margin: "0",
                  }}
                  src={Circle}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <NavbarToggler onClick={toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          {/* Right side of top nav bar on mobile */}
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav navbar>
              {/* Home */}
              <NavItem>
                <Link to="/srm-inc/home" className="nav-link">
                  <h5
                    style={{
                      color: "#A3533E",
                      fontSize: "2em",
                      fontWeight: "600",
                    }}
                    id={Styles.h5}
                  >
                    Home
                  </h5>
                  {/* <p> */}
                  <span
                    style={{
                      color: "#A3533E",
                      fontSize: "2em",
                      fontWeight: "600",
                    }}
                    className="d-lg-none d-md-block"
                  >
                    <i
                      style={{
                        color: "#A3533E",
                        fontSize: "1em",
                        fontWeight: "600",
                      }}
                      className="now-ui-icons shopping_shop"
                    />{" "}
                    Home
                  </span>
                  {/* </p> */}
                </Link>
              </NavItem>
              {/* Location */}
              <NavItem>
                <Link to="/srm-inc/maps" className="nav-link">
                  <h5
                    style={{
                      color: "#A3533E",
                      fontSize: "2em",
                      fontWeight: "600",
                    }}
                    id={Styles.h5}
                  >
                    Location
                  </h5>
                  <p>
                    <span
                      style={{
                        color: "#A3533E",
                        fontSize: "2em",
                        fontWeight: "600",
                      }}
                      className="d-lg-none d-md-block"
                    >
                      <i
                        style={{
                          color: "#A3533E",
                          fontSize: "1em",
                          fontWeight: "600",
                        }}
                        className="now-ui-icons location_pin"
                      />{" "}
                      Location
                    </span>
                  </p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/srm-inc/information" className="nav-link">
                  <h5
                    style={{
                      color: "#A3533E",
                      fontSize: "2em",
                      fontWeight: "600",
                    }}
                    id={Styles.h5}
                  >
                    Projects
                  </h5>
                  <p>
                    <span
                      style={{
                        color: "#A3533E",
                        fontSize: "2em",
                        fontWeight: "600",
                      }}
                      className="d-lg-none d-md-block"
                    >
                      <i
                        style={{
                          color: "#A3533E",
                          fontSize: "1em",
                          fontWeight: "600",
                        }}
                        className="now-ui-icons users_single-02"
                      />{" "}
                      Projects
                    </span>
                  </p>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DemoNavbar;
