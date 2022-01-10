/*eslint-disable*/
import React from "react";
import Carousel from "../components/FadeEffectCarousel/FadeEffectCarousel";
import Styles from "./style.module.css";
import CatDog from "../assets/img/catDog.png";
import DIC from "../assets/img/dogInCrate.jpg";
import Crew from "../assets/img/GroupOfficePic.jpg";
import JP from "../assets/img/JPeckich.jpg";
import BSD from "../assets/img/backSeatDog.jpg";
import CC from "../assets/img/catCase.jpg";
import HD from "../assets/img/hikerDog.jpg";

import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Container,
} from "reactstrap";

function Home() {
  return (
    <>
      <div className={Styles.wrapper}>
        <Carousel
          style={{
            height: "89.99vh !important",
            marginTop: "0.01vh",
            position: "relative",
          }}
        />
        <div style={{ marginTop: "10vh" }} className="content">
          <Row
            style={{
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center",
              justifySelf: "center",
            }}
          >
            <Col
              lg={12}
              md={12}
              xs={12}
              style={{ marginTop: "10vh", marginBottom: "10vh" }}
            >
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  borderRadius: "15px",
                }}
              >
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col md={6} className="ml-auto mr-auto text-center">
                        <CardHeader>
                          <CardTitle
                            style={{
                              color: "#A3533E",
                              fontWeight: "900",
                              fontSize: "40px",
                            }}
                            tag="h1"
                          >
                            Services
                          </CardTitle>
                        </CardHeader>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={12} lg={12} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <CardTitle
                              style={{
                                color: "black",
                                fontWeight: "900",
                                fontSize: "28px",
                              }}
                              tag="h4"
                            >
                              Masonry
                            </CardTitle>
                            <img
                              className={Styles.crew}
                              src={Crew}
                              alt="MVC Crew"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <CardTitle
                              style={{
                                color: "black",
                                fontWeight: "900",
                                fontSize: "28px",
                              }}
                              tag="h4"
                            >
                              Roofing
                            </CardTitle>
                            <img
                              className={Styles.crew}
                              src={Crew}
                              alt="MVC Crew"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <CardTitle
                              style={{
                                color: "black",
                                fontWeight: "900",
                                fontSize: "28px",
                              }}
                              tag="h4"
                            >
                              Water Proofing
                            </CardTitle>
                            <img
                              className={Styles.jp}
                              src={JP}
                              alt="Julian Peckich"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={12} lg={12} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <CardTitle
                              style={{
                                color: "black",
                                fontWeight: "900",
                                fontSize: "28px",
                              }}
                              tag="h4"
                            >
                              Coatings
                            </CardTitle>
                            <img
                              className={Styles.crew}
                              src={Crew}
                              alt="MVC Crew"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <CardTitle
                              style={{
                                color: "black",
                                fontWeight: "900",
                                fontSize: "28px",
                              }}
                              tag="h4"
                            >
                              General
                            </CardTitle>
                            <img
                              className={Styles.crew}
                              src={Crew}
                              alt="MVC Crew"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <CardTitle
                              style={{
                                color: "black",
                                fontWeight: "900",
                                fontSize: "28px",
                              }}
                              tag="h4"
                            >
                              Concrete
                            </CardTitle>
                            <img
                              className={Styles.jp}
                              src={JP}
                              alt="Julian Peckich"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Container
              style={{
                paddingTop: "2vh",
                background: "white",
              }}
              fluid
            >
              <Row
                style={{
                  textAlign: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  justifySelf: "center",
                }}
              >
                <Col className="align-self-center" lg={6} md={12} xs={12}>
                  <CardTitle
                    style={{
                      color: "#A3533E",
                      fontWeight: "900",
                      fontSize: "40px",
                    }}
                    tag="h4"
                  >
                    Services
                  </CardTitle>
                  <h3
                    id={Styles.h3}
                    style={{ textAlign: "center", alignContent: "center" }}
                  >
                    As one of the industry leaders in top quality restoration
                    services in building preservation; it is our mission to
                    provide our clients with the latest in technology, combined
                    with research directed at the special needs for each
                    individual project. As a result, each building owner can be
                    assured that their project has been restored using the
                    latest in quality materials and workmanship, that will
                    endure the test of time and elements, while returning your
                    building to its original beauty and luster.
                  </h3>
                </Col>
                <Col className="ml-auto mr-auto" lg={6} md={12} xs={12}>
                  <Card
                    style={{
                      boxShadow:
                        "-1px -1px 2px 2px hsl(0, 0%, 0%), 5px 5px 5px 3px hsl(0, 0%, 0%) !important",
                      borderRadius: "15px",
                    }}
                  >
                    <img
                      className={Styles.DIC}
                      src={DIC}
                      alt="Dog looking out car window"
                    />
                  </Card>
                </Col>
                <Col className="align-self-center" lg={6} md={12} xs={12}>
                  <CardTitle
                    style={{
                      color: "#A3533E",
                      fontWeight: "900",
                      fontSize: "40px",
                    }}
                    tag="h4"
                  >
                    About
                  </CardTitle>
                  <h3
                    id={Styles.h3}
                    style={{ textAlign: "center", alignContent: "center" }}
                  >
                    At Southern Restoration Maintenance, we have a passion for
                    providing top-quality building preservation with conceptual
                    integrity and efficiency. With over 40 years of experience
                    in waterproofing and roofing, we are able to provide a
                    thorough inspection to resolve issues, including: masonry,
                    waterproofing, roofing, concrete, coatings, exterior
                    restoration, and general contracting services. Licensed in
                    both North Carolina and South Carolina, our team of
                    experienced field personnel is trained in a wide range of
                    skills to ensure prompt, reliable service that comes with a
                    full-guarantee. We are confident that we can integrate our
                    skills and expertise into your next project - big or small,
                    that will translate into an overall positive customer
                    experience.
                  </h3>
                </Col>
                <Col className="ml-auto mr-auto" lg={6} md={12} xs={12}>
                  <Card
                    style={{
                      boxShadow:
                        "-1px -1px 2px 2px hsl(0, 0%, 0%), 5px 5px 5px 3px hsl(0, 0%, 0%) !important",
                      borderRadius: "15px",
                    }}
                  >
                    <img
                      className={Styles.DIC}
                      src={DIC}
                      alt="Dog looking out car window"
                    />
                  </Card>
                </Col>
              </Row>
            </Container>

            {/*/////////////////////////////////////////////////////////////////////////////////////////////*/}
            <Col
              lg={12}
              md={12}
              xs={12}
              style={{ marginTop: "10vh", marginBottom: "10vh" }}
            >
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  borderRadius: "15px",
                }}
              >
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col md={6} className="ml-auto mr-auto text-center">
                        <CardTitle
                          style={{
                            color: "#A3533E",
                            fontWeight: "900",
                            fontSize: "40px",
                          }}
                          tag="h4"
                        >
                          Projects
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xl={12}
                        lg={12}
                        md={12}
                        xs={12}
                        className="ml-auto mr-auto"
                      >
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Ebenezer Lutheran Church
                            </h3>
                            <img
                              className={Styles.cc}
                              src={CC}
                              alt="Cat in suit case"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Benedict College{" "}
                            </h3>
                            <img
                              className={Styles.cc}
                              src={CC}
                              alt="Cat in suit case"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Christiana Lutheran Church
                            </h3>
                            <img
                              className={Styles.cc}
                              src={CC}
                              alt="Cat in suit case"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xl={12}
                        lg={12}
                        md={12}
                        xs={12}
                        className="ml-auto mr-auto"
                      >
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Belk Building
                            </h3>
                            <img
                              className={Styles.bsd}
                              src={BSD}
                              alt="Dog in a hatchback"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Discovery Place Parking Deck
                            </h3>
                            <img
                              className={Styles.cc}
                              src={CC}
                              alt="Cat in suit case"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Wilson Train Depot
                            </h3>
                            <img
                              className={Styles.hd}
                              src={HD}
                              alt="Dog hitchhiking"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xl={12}
                        lg={12}
                        md={12}
                        xs={12}
                        className="ml-auto mr-auto"
                      >
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Durham Bulls Athletic PArk
                            </h3>
                            <img
                              className={Styles.bsd}
                              src={BSD}
                              alt="Dog in a hatchback"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              F & M Bank
                            </h3>
                            <img
                              className={Styles.cc}
                              src={CC}
                              alt="Cat in suit case"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Holmes Convocation Center
                            </h3>
                            <img
                              className={Styles.hd}
                              src={HD}
                              alt="Dog hitchhiking"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xl={12}
                        lg={12}
                        md={12}
                        xs={12}
                        className="ml-auto mr-auto"
                      >
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Dowdy-Ficklen Stadium
                            </h3>
                            <img
                              className={Styles.bsd}
                              src={BSD}
                              alt="Dog in a hatchback"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Cameron Indoor Stadium
                            </h3>
                            <img
                              className={Styles.cc}
                              src={CC}
                              alt="Cat in suit case"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              First Baptist Church
                            </h3>
                            <img
                              className={Styles.hd}
                              src={HD}
                              alt="Dog hitchhiking"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xl={12}
                        lg={12}
                        md={12}
                        xs={12}
                        className="ml-auto mr-auto"
                      >
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Bathesda Presbyterian Church
                            </h3>
                            <img
                              className={Styles.bsd}
                              src={BSD}
                              alt="Dog in a hatchback"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Durham County Detention Center
                            </h3>
                            <img
                              className={Styles.cc}
                              src={CC}
                              alt="Cat in suit case"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Fort Sumter National Monument
                            </h3>
                            <img
                              className={Styles.hd}
                              src={HD}
                              alt="Dog hitchhiking"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
            {/* Fourth Row */}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Home;
