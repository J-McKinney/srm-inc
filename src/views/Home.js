/*eslint-disable*/
import React from "react";
import Carousel from "../components/FadeEffectCarousel/FadeEffectCarousel";
// import HCFX from "../components/CardHoverFX/CardHover";
import Styles from "./style.module.css";
import ELC from "../assets/img/ELC.png";
import BC from "../assets/img/BC.png";
import CLC from "../assets/img/CLC.png";
import BB from "../assets/img/BB.png";
import DPPD from "../assets/img/DPPD.png";
import WTD from "../assets/img/WTD.png";
import DBAP from "../assets/img/DBAP.png";
import FB from "../assets/img/FB.png";
import HCC from "../assets/img/HCC.png";
import DFS from "../assets/img/DFS.png";
import CIS from "../assets/img/CIS.png";
import FBC from "../assets/img/FBC.png";
import BPC from "../assets/img/BPC.png";
import DCDC from "../assets/img/DCDC.png";
import FSNM from "../assets/img/FSNM.png";
import WW from "../assets/img/whiteWall.jpg";
import SW from "../assets/img/stoneWall.jpg";
import RT from "../assets/img/roofTruss.jpg";
import WP from "../assets/img/waterProofing.png";
import PC from "../assets/img/pourConcrete.jpg";
import WB from "../assets/img/whiteBuilding.jpg";
import SS from "../assets/img/smokeStack.jpg";
import Draw from "../assets/img/draw.jpg";
import Arc from "../assets/img/arc.jpg";

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

        {/* <HCFX /> */}

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
                              src={SW}
                              alt="MVC Crew"
                            />
                            <p>
                              When it comes to historic masonry restoration,
                              through analysis of mortar and brick masonry is
                              essential to the success of any restoration
                              project.
                            </p>
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
                              src={RT}
                              alt="MVC Crew"
                            />
                            <p>
                              An important part of every building envelope; the
                              roof is primarily the first line of defense for
                              water intrusion into any structure.
                            </p>
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
                              src={WP}
                              alt="Julian Peckich"
                            />
                            <p>
                              A fundamental part of any building envelope,
                              waterproofing includes caulking and sealants that
                              provides protection against moisture infiltration,
                              assists in climate control, and allows proper
                              expansion and contraction of building materials.
                            </p>
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
                              src={WB}
                              alt="MVC Crew"
                            />
                            <p>
                              Choosing the proper coating material requires
                              evaluation of each surface being treated. This
                              ensures that the product being selected will both
                              properly protect the building façade and provide a
                              durable long lasting coating.
                            </p>
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
                              src={SS}
                              alt="MVC Crew"
                            />
                            <p>
                              No matter the shape, size or use of a structure;
                              regular scheduled inspections and maintenance is a
                              necessity to preclude water infiltration and
                              failure of building components.
                            </p>
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
                              src={PC}
                              alt="Julian Peckich"
                            />
                            <p>
                              One of the most durable building materials,
                              concrete is susceptible to water infiltration
                              through cracking; this leads to corrosion of
                              reinforcing bars, freeze/ thaw; both of which
                              causes spelling and deterioration of concrete
                              surfaces.{" "}
                            </p>
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
                // background: "white",
                backgroundImage: `url(${WW})`,
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
                  <img
                    style={{
                      height: "95%",
                    }}
                    className={Styles.DIC}
                    src={Draw}
                    alt="Dog looking out car window"
                  />
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
                  <img
                    style={{
                      height: "95%",
                    }}
                    className={Styles.DIC}
                    src={Arc}
                    alt="Dog looking out car window"
                  />
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
                            <img
                              className={Styles.cc}
                              src={ELC}
                              alt="Cat in suit case"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Ebenezer Lutheran Church
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.cc}
                              src={BC}
                              alt="Cat in suit case"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Benedict College{" "}
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.cc}
                              src={CLC}
                              alt="Cat in suit case"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Christiana Lutheran Church
                            </h3>
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
                            <img
                              className={Styles.bsd}
                              src={BB}
                              alt="Dog in a hatchback"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Belk Building
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.cc}
                              src={DPPD}
                              alt="Cat in suit case"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Discovery Place Parking Deck
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.hd}
                              src={WTD}
                              alt="Dog hitchhiking"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Wilson Train Depot
                            </h3>
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
                            <img
                              className={Styles.bsd}
                              src={DBAP}
                              alt="Dog in a hatchback"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Durham Bulls Athletic PArk
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.cc}
                              src={FB}
                              alt="Cat in suit case"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              F & M Bank
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.hd}
                              src={HCC}
                              alt="Dog hitchhiking"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Holmes Convocation Center
                            </h3>
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
                            <img
                              className={Styles.bsd}
                              src={DFS}
                              alt="Dog in a hatchback"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Dowdy-Ficklen Stadium
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.cc}
                              src={CIS}
                              alt="Cat in suit case"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Cameron Indoor Stadium
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.hd}
                              src={FBC}
                              alt="Dog hitchhiking"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              First Baptist Church
                            </h3>
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
                            <img
                              className={Styles.bsd}
                              src={BPC}
                              alt="Dog in a hatchback"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Bathesda Presbyterian Church
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.cc}
                              src={DCDC}
                              alt="Cat in suit case"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Durham County Detention Center
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.hd}
                              src={FSNM}
                              alt="Dog hitchhiking"
                            />
                            <h3
                              style={{
                                color: "black",
                                fontWeight: "900",
                              }}
                              id={Styles.h3}
                            >
                              Fort Sumter National Monument
                            </h3>
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
