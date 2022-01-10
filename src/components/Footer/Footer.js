/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <>
      <footer
        style={{ background: "#A5A3A7" }}
        className={"footer" + (props.default ? " footer-default" : "")}
      >
        <Container fluid={props.fluid ? true : false}>
          <nav>
            <div className="button-container">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="default"
                href="/"
                size="lg"
              >
                <i
                  style={{ color: "steelblue", marginTop: "6px" }}
                  className="fab fa-facebook-f fa-3x"
                />
              </Button>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="default"
                href="/"
                size="lg"
              >
                <i
                  style={{ color: "royalblue", marginTop: "6px" }}
                  className="fab fa-linkedin-in fa-3x"
                />
              </Button>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="default"
                href="https://www.google.com/maps/place/3826+Miriam+Dr,+Charlotte,+NC+28205/@35.1974255,-80.796309,21z/data=!4m5!3m4!1s0x88542013b52f1475:0xfaa7872747fe8db7!8m2!3d35.1974011!4d-80.7961843"
                size="lg"
              >
                <i
                  style={{
                    background:
                      "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                    marginTop: "6px",
                  }}
                  className="fab fa-google fa-3x"
                ></i>
              </Button>
            </div>
            <br />
          </nav>
          <div
            style={{
              color: "#A3533E",
              marginTop: "4vh",
              background: "white",
              borderRadius: "15px",
              boxShadow:
                "-1px -1px 2px 2px hsl(0, 0%, 39%), 2px 2px 2px 1px hsl(0, 0%, 79%)",
            }}
            className="copyright"
          >
            &copy; {1900 + new Date().getYear()},{" "}
            <a
              style={{ color: "#A3533E" }}
              href="https://www.srm-inc.net//"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOUTHERN RESTORATION MAINTENANCE, INC.
            </a>{" "}
            &nbsp;{" "}
            <a
              style={{ color: "#A3533E" }}
              href="tel:7043347663"
              target="_blank"
              rel="noopener noreferrer"
            >
              (704)3347663
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
