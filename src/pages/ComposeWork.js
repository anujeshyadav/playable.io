import React from "react";
import { Button, Col, Label, Row, Card, CustomInput, Alert } from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineCheckCircle, AiFillLock } from "react-icons/ai";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { MdOutlineStars } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import "./ComposeWork.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ComposeWork = () => {
  const [first, setFirst] = useState("");

  const handleoptional = (value) => {
    setFirst(value);
    console.log(value);
  };
  return (
    <div>
      <div className="centrsssr ">
        <div className="mainworkflowthired">
          <div className="headinge">
            <div className="approvaltext">
              <h2>Approval workflow</h2>
            </div>
            <div className="approvaltext">
              <p className="appretexto">
                Choose a suitable approval workflow for this workspaces. You can
                change this later in the workspace settings.
              </p>
            </div>
          </div>
          <div className="cardarea">
            <Row>
              <Col onClick={() => handleoptional("None")} lg="3">
                <Card className="cardmainhead">
                  <Row className=" none">
                    <div className="noneall">
                      <Row className="rowocon">
                        <Col lg="9">
                          <BsCircle size={15} />
                        </Col>
                        <Col className="hiddenic" lg="3">
                          <AiFillCheckCircle className="hiddenicon" size={20} />
                        </Col>
                      </Row>

                      <h2 className="nonetext"> None</h2>
                      <p className="nonepara">
                        Approvals are disabled and not needed for publishing
                      </p>
                    </div>
                  </Row>
                </Card>
              </Col>
              <Col onClick={() => handleoptional("Optional")} lg="3">
                <Card className="cardmainhead">
                  <Row className=" none">
                    <div className="noneall">
                      <Row className="rowocon">
                        <Col lg="9">
                          <AiFillCheckCircle color="green" size={20} />
                        </Col>
                        <Col className="hiddenic" lg="3">
                          <AiFillCheckCircle className="hiddenicon" size={20} />
                        </Col>
                      </Row>

                      <h2 className="nonetext"> Optional</h2>
                      <p className="nonepara">
                        Approvals are enabled, but not required for publishing
                      </p>
                    </div>
                  </Row>
                </Card>
              </Col>
              <Col onClick={() => handleoptional("Required")} lg="3">
                <Card className="cardmainhead">
                  <Row className=" none">
                    <div className="noneall">
                      <Row className="rowocon">
                        <Col lg="9">
                          <HiOutlineCheckCircle color="green" size={20} />
                        </Col>
                        <Col className="hiddenic" lg="3">
                          <AiFillCheckCircle className="hiddenicon" size={20} />
                        </Col>
                      </Row>

                      <h2 className="nonetext">
                        {" "}
                        Required{" "}
                        <MdOutlineStars
                          className="mdoutlinestars"
                          color="#3e00ff"
                          size={12}
                        />
                        <span className="proname" style={{ color: "#3e00ff" }}>
                          <b>PRO</b>
                        </span>
                      </h2>
                      <p className="nonepara">
                        A member has to approve the content before publishing
                      </p>
                    </div>
                  </Row>
                </Card>
              </Col>
              <Col onClick={() => handleoptional("Multilevel")} lg="3">
                <Card className="cardmainhead">
                  <Row className=" none">
                    <div className="noneall">
                      <Row className="rowocon">
                        <Col lg="9">
                          <AiOutlineCheckCircle fill="green" size={15} />
                          -
                          <AiOutlineCheckCircle fill="green" size={15} />
                          -
                          <AiOutlineCheckCircle fill="green" size={15} />
                        </Col>
                        <Col className="hiddenic" lg="3">
                          <AiFillCheckCircle className="hiddenicon" size={20} />
                        </Col>
                      </Row>

                      <h2 className="nonetext">
                        Multi-level
                        <MdOutlineStars
                          className="mdoutlinestars"
                          color="#ffce00   "
                          size={20}
                        />
                        <span className="proname" style={{ color: "#ffce00 " }}>
                          <b> ENT</b>
                        </span>
                      </h2>
                      <p className="nonepara">
                        2+ members need to approve content before publishing
                      </p>
                    </div>
                  </Row>
                </Card>
              </Col>
            </Row>
            {first == "Optional" ? (
              <>
                <div className="optionlsshow optionalshrink">
                  <Row className="rowofoftion">
                    <Col className="rowofshowoptionls" lg="8">
                      <BsStopwatch className="csstopwatch" size={18} /> Schedule
                      posts automatically on approval
                    </Col>

                    <Col className="rowofshowoptionls" lg="4">
                      <CustomInput
                        className="custom-switch-success mr-1 mb-2"
                        type="switch"
                        id="success"
                        name="success"
                        inline
                      >
                        {/* <span className="mb-0 switch-label">Success</span> */}
                      </CustomInput>
                    </Col>
                  </Row>
                  <Row className="rowofoftion">
                    <Col className="rowofshowoptionls" lg="8">
                      <AiFillLock className="csstopwatch" size={18} /> Lock
                      content after approval
                    </Col>
                    <Col lg="4">
                      <CustomInput
                        className="custom-switch-success mr-1 mb-2"
                        type="switch"
                        id="successs"
                        name="successs"
                        inline
                      >
                        {/* <span className="mb-0 switch-label">Success</span> */}
                      </CustomInput>
                    </Col>
                  </Row>
                </div>
              </>
            ) : null}
            {first == "Required" ? (
              <>
                <div className="requiredalerts">
                  {/* <Alert color="primary">
                    <div className="alert-heading">
                      <MdOutlineStars
                        className="mdoutlinestars"
                        color="#3e00ff"
                        Required
                        size={25}
                      />{" "}
                      Required approvals is available in the Pro plan
                    </div>
                    <div className="textalertr">
                      Selecting required approvals in your workspace means no
                      post can be scheduled or published without the green light
                      from at least one approver.
                    </div>
                  </Alert> */}
                </div>
                <div className="optionlsshow optionalshrink">
                  <Row className="rowofoftion">
                    <Col className="rowofshowoptionls" lg="8">
                      <BsStopwatch className="csstopwatch" size={18} /> Schedule
                      posts automatically on approval
                    </Col>

                    <Col className="rowofshowoptionls" lg="4">
                      <CustomInput
                        className="custom-switch-success mr-1 mb-2"
                        type="switch"
                        id="success"
                        name="success"
                        inline
                      >
                        {/* <span className="mb-0 switch-label">Success</span> */}
                      </CustomInput>
                    </Col>
                  </Row>
                  <Row className="rowofoftion">
                    <Col className="rowofshowoptionls" lg="8">
                      <AiFillLock className="csstopwatch" size={18} /> Lock
                      content after approval
                    </Col>
                    <Col lg="4">
                      <CustomInput
                        className="custom-switch-success mr-1 mb-2"
                        type="switch"
                        id="successs"
                        name="successs"
                        inline
                      >
                        {/* <span className="mb-0 switch-label">Success</span> */}
                      </CustomInput>
                    </Col>
                  </Row>
                </div>
              </>
            ) : null}
            {first == "Multilevel" ? (
              <>
                <div className="warning">
                  {/* <Alert color="warning">
                    <div className="alert-heading">
                      <MdOutlineStars
                        className="mdoutlinestars"
                        color="#f8ca0b "
                        size={25}
                      />
                      Multi-level approvals is available in the Enterprise plan
                    </div>
                    <div className="textalert">
                      Selecting multi-level approvals in your workspace means
                      you can set up multiple approval layers & multiple
                      approvers on each layer.
                    </div>
                  </Alert> */}
                </div>
                <div className="optionlsshow optionalshrink">
                  <Row className="rowofoftion">
                    <Col className="rowofshowoptionls" lg="8">
                      <BsStopwatch className="csstopwatch" size={18} /> Schedule
                      Posts automatically on approval
                    </Col>

                    <Col className="rowofshowoptionls" lg="4">
                      <CustomInput
                        className="custom-switch-success mr-1 mb-2"
                        type="switch"
                        id="success"
                        name="success"
                        inline
                      >
                        {/* <span className="mb-0 switch-label">Success</span> */}
                      </CustomInput>
                    </Col>
                  </Row>
                  <Row className="rowofoftion">
                    <Col className="rowofshowoptionls" lg="8">
                      <AiFillLock className="csstopwatch" size={18} /> Lock
                      content after approval
                    </Col>
                    <Col lg="4">
                      <CustomInput
                        className="custom-switch-success mr-1 mb-2"
                        type="switch"
                        id="successs"
                        name="successs"
                        inline
                      >
                        {/* <span className="mb-0 switch-label">Success</span> */}
                      </CustomInput>
                    </Col>
                  </Row>
                </div>
              </>
            ) : null}
            {/* <div className="optionlsshow">
              <Row className="rowofoftion">
                <Col className="rowofshowoptionls" lg="8">
                  <BsStopwatch className="csstopwatch" size={18} /> Schedule
                  posts automatically on approval
                </Col>

                <Col className="rowofshowoptionls" lg="4">
                  <CustomInput
                    className="custom-switch-success mr-1 mb-2"
                    type="switch"
                    id="success"
                    name="success"
                    inline
                  ></CustomInput>
                </Col>
              </Row>
              <Row className="rowofoftion">
                <Col className="rowofshowoptionls" lg="8">
                  <AiFillLock className="csstopwatch" size={18} /> Lock content
                  after approval
                </Col>
                <Col lg="4">
                  <CustomInput
                    className="custom-switch-success mr-1 mb-2"
                    type="switch"
                    id="successs"
                    name="successs"
                    inline
                  ></CustomInput>
                </Col>
              </Row>
            </div> */}
          </div>
          <div className="inputcoc intutbtn">
            <div className="btnnextform">
              <Button className="worktwobtng0o">
                <Link>
                  <span className="worktwobtngo12 mx-2"> Success</span>{" "}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeWork;
