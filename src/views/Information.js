/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Label,
  FormGroup,
  Input,
} from "reactstrap";
import Styles from "./style.module.css";
import VCOM from "../assets/img/VCOM.png";
import YCC from "../assets/img/YCC.png";
import JCC from "../assets/img/JCC.png";
import ACC from "../assets/img/ACC.png";
import HCCO from "../assets/img/HCCO.png";

function Dashboard() {
  return (
    <>
      <div style={{ marginTop: "15vh" }} className="content">
        {/*  */}
        <Row style={{ marginBottom: "15vh" }}>
          <Col xs={1} md={1} lg={1} />
          <Col xs={10} md={10} lg={10}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle
                  style={{ color: "#A3533E", textAlign: "center" }}
                  tag="h1"
                >
                  Southern Restoration Maintenance, Inc.
                </CardTitle>
                <CardTitle
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "900",
                  }}
                  tag="h3"
                >
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{
                    paddingRight: "30px",
                    paddingLeft: "30px",
                    textAlign: "center",
                  }}
                >
                  <h4>
                    As one of the industry leaders in top quality restoration
                    services in building preservation; it is our mission to
                    provide our clients with the latest in technology, combined
                    with research directed at the special needs for each
                    individual project. As a result, each building owner can be
                    assured that their project has been restored using the
                    latest in quality materials and workmanship, that will
                    endure the test of time and elements, while returning your
                    building to its original beauty and luster.
                  </h4>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <Row style={{ marginBottom: "5vh" }}>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle style={{ textAlign: "center" }} tag="h4">
                  VCOM
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "48vh" }}
                  className="chart-area"
                >
                  <h3 style={{ margin: "30px" }} id={Styles.h3}>
                    The chimney is constructed from solid brick masonry. Masonry
                    walls are approximately four feet thick at the bottom and
                    thirty inches thick at the top. The "mushroom" base at the
                    bottom of the chimney extends four feet above grade and is
                    twelve feet wide at the bottom of the foundation. The
                    chimney moves two inches back and forth each day, during the
                    expansion and contraction from the heat of daylight hours.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                {/* <CardTitle tag="h4">International Travel</CardTitle> */}
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "52vh" }}
                  className="chart-area"
                >
                  <img
                    className={Styles.pp}
                    style={{
                      width: "90%",
                      height: "50vh",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={VCOM}
                    alt="Passport cheers"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* checklist///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Row style={{ marginBottom: "15vh" }}>
          <Col xs={1} md={1} />
          <Col xs={10} md={10}>
            <Card id={Styles.bs} className="card-tasks">
              <CardHeader>
                <CardTitle tag="h4">Scope Of Work</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>1) </strong>Cracks in the perimeter concrete
                            cap on the top of the chimney were filled with
                            epoxy. The cap was coated using Sitka 144. A vented
                            aluminum cap was lowered into place using a crane.
                            This cap covered the entire top of the chimney.
                            Anchor bolts were embedded into epoxy in the
                            concrete to secure the cap.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>2) </strong>
                            The mortar joints in the top sixty feet of the
                            chimney were cut out 100%and joints were then
                            solidly repointed to match the existing mortar.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>3) </strong>Approximately 300 brick masonry
                            units were replaced in the top of the chimney.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>4) </strong>The remaining 142 feet of
                            chimney was spot pointed.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* checklist////////////////////////////////////////////////////////////////////////////////////////// */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <Row style={{ marginBottom: "5vh" }}>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                {/* <CardTitle tag="h4">Requirements</CardTitle> */}
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "52vh" }}
                  className="chart-area"
                >
                  <img
                    className={Styles.cnd}
                    style={{
                      width: "90%",
                      height: "48vh",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={YCC}
                    alt="girl with dog"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle style={{ textAlign: "center" }} tag="h4">
                  York Co. Courthouse
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "48vh" }}
                  className="chart-area"
                >
                  <h3 style={{ margin: "30px" }} id={Styles.h3}>
                    This site has been the location of York County Courthouse
                    since 1825. The original courthouse was replaced with this
                    "new" structure in 1915. In 2016, extensive renovations were
                    made to the interior and exterior. SRM, Inc. performed the
                    exterior restoration work.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* checklist///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Row style={{ marginBottom: "15vh" }}>
          <Col xs={1} md={1} />
          <Col xs={10} md={10}>
            <Card id={Styles.bs} className="card-tasks">
              <CardHeader>
                <CardTitle tag="h4">Scope Of Work</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>1) </strong>All exterior brick masonry,
                            terra-cotta, limestone, and granite were cleaned.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>2) </strong>
                            Brick masonry mortar joints were inspected and spot
                            pointed. All terra-cotta, limestone, and granite
                            mortar joints were 100% tuck pointed.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>3) </strong>All terra-cotta surfaces were
                            coated using Edison Coating.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>4) </strong>Limestone base walls were
                            treated using Keim Consolidation treatment.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>5) </strong>Damaged terra-cotta elements on
                            the Crier's Porch were fabricated and replaced.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>6) </strong>
                            Basement walls were excavated and new waterproofing
                            membrane was installed.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>7) </strong>
                            All brick masonry surfaces were treated using clear
                            water repellent.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginBottom: "5vh" }}>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle style={{ textAlign: "center" }} tag="h4">
                  Jackson Co. Courthouse
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "48vh" }}
                  className="chart-area"
                >
                  <h3 style={{ margin: "30px" }} id={Styles.h3}>
                    The Jackson County Courthouse was built in early 1900 and
                    was placed on this hill overlooking the town of Sylva. There
                    are 198 steps leading up the hill to the Courthouse. The
                    weight of the cupola on top of the Courthouse is 46,000
                    pounds and has been rebuilt several times.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                {/* <CardTitle tag="h4">International Travel</CardTitle> */}
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "52vh" }}
                  className="chart-area"
                >
                  <img
                    className={Styles.pp}
                    style={{
                      width: "90%",
                      height: "50vh",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={JCC}
                    alt="Passport cheers"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* checklist///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Row style={{ marginBottom: "15vh" }}>
          <Col xs={1} md={1} />
          <Col xs={10} md={10}>
            <Card id={Styles.bs} className="card-tasks">
              <CardHeader>
                <CardTitle tag="h4">Scope Of Work</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>1) </strong>Approximately 500 cubic feet of
                            deteriorated concrete in the steps. leading up to
                            the courthouse was cut out and repaired using Sika
                            123.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>2) </strong>
                            Once all concrete repairs were complete, surfaces
                            were treated using Sika 144.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>3) </strong>Exterior walls of the Courthouse
                            were spot pointed and coated.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>4) </strong>The cupola was removed and
                            lowered into an adjacent parking lot.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>5) </strong>The cupola was totally stripped
                            down to the structural wood framing.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>6) </strong>
                            Deteriorated wood framing was replaced, new siding
                            and new roof were installed.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>7) </strong>
                            The cupola was then lifted back into place and
                            secured to the structure.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* checklist////////////////////////////////////////////////////////////////////////////////////////// */}
        <Row style={{ marginBottom: "5vh" }}>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                {/* <CardTitle tag="h4">Requirements</CardTitle> */}
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "52vh" }}
                  className="chart-area"
                >
                  <img
                    className={Styles.cnd}
                    style={{
                      width: "90%",
                      height: "48vh",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={ACC}
                    alt="girl with dog"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle style={{ textAlign: "center" }} tag="h4">
                  Anson Co. Courthouse
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "48vh" }}
                  className="chart-area"
                >
                  <h3 style={{ margin: "30px" }} id={Styles.h3}>
                    Construction on the original Anson County Courthouse began
                    in 1910 and work was completed in 1912. The original cost to
                    construct the Courthouse was $990,000,00, back in 1912.
                    Recent restoration to the exterior of the Courthouse cost
                    over one million dollars. The recent restoration project was
                    the first time since 1912 any work had been done on the
                    exterior of the building.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* checklist///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Row style={{ marginBottom: "15vh" }}>
          <Col xs={1} md={1} />
          <Col xs={10} md={10}>
            <Card id={Styles.bs} className="card-tasks">
              <CardHeader>
                <CardTitle tag="h4">Scope Of Work</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>1) </strong>All brick, terra-cotta, concrete
                            and granite steps were cleaned.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>2) </strong>
                            Brick masonry mortar joints were spot pointed. All
                            terra-cotta and concrete mortar joints were cut out
                            100% and solidly re-pointed.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>3) </strong>All terra-cotta and concrete
                            surfaces were coated with Keim Mineral Coatings.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>4) </strong>Broken and spalled brick masonry
                            units were replaced.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>5) </strong>Brick masonry surfaces were
                            treated using clear masonry sealer.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>6) </strong>
                            Spalled areas in the granite steps were cut out and
                            new granite dutchman installed.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>7) </strong>
                            Bronze plaques and statue were refinished.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>8) </strong>All concrete sidewalks were
                            replaced.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>9) </strong>Sandstone walls around a gazebo
                            area were re-pointed and finished with Keim Mineral
                            Coatings.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>10) </strong>Terra-cotta roofing was
                            replaced with new terra-cotta tiles.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>11) </strong>Wood windows were replaced with
                            new aluminum windows, matching the existing for
                            historical accuracy.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>12) </strong>New wood doors replaced the
                            existing doors; also matching the existing for
                            historical accuracy.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginBottom: "5vh" }}>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle style={{ textAlign: "center" }} tag="h4">
                  Henderson Co. Courthouse
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "48vh" }}
                  className="chart-area"
                >
                  <h3 style={{ margin: "30px" }} id={Styles.h3}>
                    Construction on the Henderson County Courthouse was
                    completed in 1923. It sat abandoned for many years before a
                    total renovation was started in 2006. The building was then
                    converted into a mix use property used by the town of
                    Hendersonville.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                {/* <CardTitle tag="h4">International Travel</CardTitle> */}
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "52vh" }}
                  className="chart-area"
                >
                  <img
                    className={Styles.pp}
                    style={{
                      width: "90%",
                      height: "50vh",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={HCCO}
                    alt="Passport cheers"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* checklist///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Row style={{ marginBottom: "15vh" }}>
          <Col xs={1} md={1} />
          <Col xs={10} md={10}>
            <Card id={Styles.bs} className="card-tasks">
              <CardHeader>
                <CardTitle tag="h4">Scope Of Work</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>1) </strong>All brick and stone walls were
                            cleaned.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>2) </strong>Masonry walls were tuckpointed.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>3) </strong>There were 14 brick stucco
                            columns. All stucco was removed down to the brick
                            masonry substrate and new stucco applied.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>4) </strong>Portions of the capitals on top
                            of the columns were missing. Sections were removed
                            and replacement pieces were cast and reinstalled.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>5) </strong>Stucco columns, concrete water
                            tables, and concrete trim were coated using
                            elastomeric coatings.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-left">
                          <p>
                            <strong>6) </strong>All brick masonry walls were
                            treated using a clear masonry sealer.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
