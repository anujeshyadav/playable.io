import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, Label, Row, Card } from "reactstrap";
import {
  AiOutlineArrowRight,
  AiFillPlusSquare,
  AiOutlineUsergroupAdd,
  AiOutlineAppstoreAdd,
  AiOutlineCamera,
} from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";
import { TbPlugConnected } from "react-icons/tb";
import { FaTiktok, FaDiaspora } from "react-icons/fa";

import {
  AiFillCloseCircle,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

import "./Workspacetwo.scss";
import { Link } from "react-router-dom";
import { CloudLightning } from "react-feather";
import axios from "axios";

function Workspacetwo(args) {
  const HandleFaceLogin = () => {
    axios
      .get(`http://13.127.168.84:3000/login/fb`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modalone, setModalone] = useState(false);
  const toggleone = () => setModalone(!modalone);

  const [first, setfirst] = useState("");

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    console.log(hiddenFileInput);
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };

  return (
    <div>
      <div className="row cancelbtn">
        <Link to="/dashboard">
          <span>
            <AiFillCloseCircle size={35} />
          </span>
        </Link>
      </div>
      <div className="dashboard-sectionss dashboard-main">
        <div className="container">
          <div className="workspace">
            <h3>Connect user's pages</h3>
          </div>

          <p className="parawork">
            Add the social media pages related to this brand. And don't worry,
            you can always add more later.
          </p>
        </div>
        <div className="centrrs">
          <Row>
            <Col lg="3">
              <Card onClick={toggle} className="cardmainwork">
                <Modal isOpen={modal} toggle={toggle} {...args}>
                  <ModalHeader toggle={toggle}>
                    <div className="modalheader">
                      <Row>
                        <Col lg="1">
                          <TbPlugConnected
                            className="bsfacebook mt-1"
                            color="blue"
                            size={35}
                          />
                        </Col>
                        <Col lg="10">
                          <p className="modaltexthead">Connect pages</p>
                          <h2 className="modaltextheads">
                            Select what type of pages you want to connect
                          </h2>
                        </Col>
                        <Col lg="1">
                          <AiFillCloseCircle
                            className="aifilsclosemodal"
                            onClick={toggle}
                            size={35}
                          />
                        </Col>
                      </Row>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className="madalbodymain">
                      <div className="contenthead">
                        <Row>
                          {/* <Col lg="4">
                            <Card className="cardmainworktwitor">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <CiFlag1 className="bsfacebook" size={35} />
                                </div>
                                <div className="facebookname">
                                  <span>Add Page</span>
                                </div>
                                <div className="facebookpage twittorpage">
                                  <span>Profile</span>
                                </div>
                                <div className="connect">
                                  <span className="connectin">Connect</span>
                                </div>
                              </div>
                            </Card>
                          </Col> */}
                          <Col lg="4">
                            <Card
                              // onClick={HandleFaceLogin}
                              className="cardmainworktwitor"
                            >
                              <a href="http://13.127.168.84:3000/login/fb">
                                <div className="maincont">
                                  <div className="Twittorcard">
                                    <CiFlag1 className="bsfacebook" size={35} />
                                  </div>
                                  <div className="facebookname modalfacebookname">
                                    {/* <a href="http://13.127.168.84:3000/login/fb"> */}
                                    <span>Add page</span>
                                    {/* </a> */}
                                  </div>
                                  {/* <div className="facebookpage twittorpage">
                                  <span>Profile</span>
                                </div> */}
                                  <div className="connect">
                                    {/* <span className="connectin">Connect</span> */}
                                  </div>
                                </div>
                              </a>
                            </Card>
                          </Col>
                          <Col lg="4">
                            <Card className="cardmainworktwitor">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <AiOutlineUsergroupAdd
                                    className="bsfacebook"
                                    size={35}
                                  />
                                </div>
                                <div className="facebookname modalfacebookname">
                                  <span>Add groups</span>
                                </div>
                                {/* <div className="facebookpage twittorpage">
                                  <span>Profile</span>
                                </div> */}
                                <div className="connect">
                                  {/* <span className="connectin">Connect</span> */}
                                </div>
                              </div>
                            </Card>
                          </Col>
                          <Col lg="4">
                            <Card className="cardmainworktwitor">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <FaDiaspora
                                    className="bsfacebook"
                                    size={35}
                                  />
                                </div>
                                <div className="facebookname">
                                  <span>Add Page</span>
                                </div>
                                <div className="facebookpage twittorpage">
                                  <span>Profile</span>
                                </div>
                                <div className="connect">
                                  {/* <span className="connectin">Connect</span> */}
                                </div>
                              </div>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      // onClick={toggle}
                    >
                      Connect Pages
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
                <div className="maincont">
                  <div className="facebookmaincard">
                    <BsFacebook className="bsfacebook" size={35} />
                  </div>
                  <div className="facebookname">
                    <span>Facebook</span>
                  </div>
                  <div className="facebookpage">
                    <span>Page or Group</span>
                  </div>
                  <div className="connect">
                    <span className="connectin">Connect</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3">
              <Card onClick={toggle} className="cardmainworktwitor">
                <div className="maincont">
                  <div className="Twittorcard">
                    <AiFillTwitterCircle className="bsfacebook" size={40} />
                  </div>
                  <div className="facebookname">
                    <span>Twittor</span>
                  </div>
                  <div className="facebookpage twittorpage">
                    <span>Profile</span>
                  </div>
                  <div className="connect">
                    <span className="connectin">Connect</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3">
              <Card onClick={toggle} className="cardmainworkinsta">
                <div className="maincont">
                  <div className="facebookmaincardinsta">
                    <BsInstagram className="bsfacebook" size={35} />
                  </div>
                  <div className="facebookname">
                    <span>instagram</span>
                  </div>
                  <div className="facebookpage">
                    <span>Business Account and Profile</span>
                  </div>
                  <div className="connect">
                    <span className="connectin">Connect</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3">
              <Card onClick={toggle} className="cardmainworklink">
                <div className="maincont">
                  <div className="facebookmaincardlink">
                    <BsLinkedin className="bsfacebook" size={35} />
                  </div>
                  <div className="facebookname">
                    <span>Linkedin</span>
                  </div>
                  <div className="facebookpage">
                    <span>Business Account and Profile</span>
                  </div>
                  <div className="connect">
                    <span className="connectin">Connect</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3">
              <Card onClick={toggle} className="cardmainworkgoogle">
                <div className="maincont">
                  <div className="facebookmaincardgoogle">
                    <AiFillGoogleCircle className="bsfacebook" size={35} />
                  </div>
                  <div className="facebookname">
                    <span>Google Business Profile</span>
                  </div>
                  <div className="facebookpage">
                    <span>Business Location</span>
                  </div>
                  <div className="connect">
                    <span className="connectin">Connect</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3">
              <Card onClick={toggle} className="cardmainworkyou">
                <div className="maincont">
                  <div className="facebookmaincardyou">
                    <BsYoutube className="bsfacebook" size={35} />
                  </div>
                  <div className="facebookname">
                    <span>Youtube</span>
                  </div>
                  <div className="facebookpage">
                    <span>Chennel</span>
                  </div>
                  <div className="connect">
                    <span className="connectin">Connect</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3">
              <Card onClick={toggle} className="cardmainwork">
                <div className="maincont">
                  <div className="facebookmaincard">
                    <FaTiktok className="bsfacebook" size={35} />
                  </div>
                  <div className="facebookname">
                    <span>Tiktok</span>
                  </div>
                  <div className="facebookpage">
                    <span>Account</span>
                  </div>
                  <div className="connect">
                    <span className="connectin">Connect</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3">
              <Card onClick={toggleone} className="cardmainwork">
                <Modal isOpen={modalone} toggle={toggleone} {...args}>
                  <ModalHeader toggle={toggleone}>
                    <div className="modalheader">
                      <Row>
                        <Col lg="1">
                          <AiOutlineAppstoreAdd
                            className="bsfacebook"
                            color="black"
                            size={35}
                          />
                        </Col>
                        <Col lg="10">
                          <p className="modaltexthead newmodalhtext">
                            Create a page for any type of content
                          </p>
                          {/* <h2 className="modaltextheads">
                            Select what type of pages you want to connect
                          </h2> */}
                        </Col>
                        <Col lg="1">
                          <AiFillCloseCircle
                            className="aifilsclosemodal"
                            onClick={toggleone}
                            size={35}
                          />
                        </Col>
                      </Row>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className="madalbodymain">
                      <div className="contenthead">
                        <div className="addpagemainhead">
                          <Row>
                            <div className="prodileupload">
                              <div className="imputfile">
                                <AiOutlineCamera
                                  onClick={handleClick}
                                  className="aioutlinecmera"
                                  size={30}
                                />

                                <input
                                  type="file"
                                  ref={hiddenFileInput}
                                  onChange={handleChange}
                                  style={{ display: "none" }}
                                />
                                {/* <input
                                  className="inputload"
                                  type="file"
                                  style={{ display: "block" }}
                                /> */}
                              </div>

                              <span className="addprofilepic">
                                Add profile picture
                              </span>
                            </div>
                          </Row>
                          <Row>
                            <Label>Page name</Label>
                            <input
                              type="text"
                              placeholder="eg block"
                              className="form-control"
                            />
                          </Row>
                          <Row></Row>
                          <Row className="createbtn">
                            <div className="createpagebttn">
                              <Button outline color="info">
                                Create Page
                              </Button>
                            </div>
                          </Row>
                          <Row>
                            {/* <Col lg="4">
                            <Card className="cardmainworktwitor">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <CiFlag1 className="bsfacebook" size={35} />
                                </div>
                                <div className="facebookname modalfacebookname">
                                  <span>Add groups</span>
                                </div>
                               
                                <div className="connect">
                                 
                                </div>
                              </div>
                            </Card>
                          </Col>
                          <Col lg="4">
                            <Card className="cardmainworktwitor">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <AiOutlineUsergroupAdd
                                    className="bsfacebook"
                                    size={35}
                                  />
                                </div>
                                <div className="facebookname modalfacebookname">
                                  <span>Add groups</span>
                                </div>
                              
                                <div className="connect">
                                  
                                </div>
                              </div>
                            </Card>
                          </Col>
                          <Col lg="4">
                            <Card className="cardmainworktwitor">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <FaDiaspora
                                    className="bsfacebook"
                                    size={35}
                                  />
                                </div>
                                <div className="facebookname">
                                  <span>Add Page</span>
                                </div>
                                <div className="facebookpage twittorpage">
                                  <span>Profile</span>
                                </div>
                                <div className="connect">
                                 
                                </div>
                              </div>
                            </Card>
                          </Col> */}
                          </Row>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                  {/* <ModalFooter>
                    <Button
                      color="primary"
                      // onClick={toggle}
                    >
                      Connect
                    </Button>{" "}
                  </ModalFooter> */}
                </Modal>
                <div className="maincont">
                  <div className="facebookmaincard">
                    <AiFillPlusSquare className="bsfacebook" size={35} />
                  </div>
                  <div className="facebookname">
                    <span>Generic content</span>
                  </div>
                  <div className="facebookpage">
                    <span>Page</span>
                  </div>
                  <div className="connect">
                    <span className="connectin">Connect</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          {/* <div className="inputcoc">
            <Label className="labelnew">Workspace name</Label>
            <input
              type="text"
              id="fname"
              placeholder="Nutella"
              className="form-control"
            />
          </div>
          <div className="inputcoc">
            <Label className="labelnew">Workspace timezone (optional)</Label>
            <p>
              <select className="wide form-control">
                <option className="valuesofsle" value="india">
                  India
                </option>
                <option className="valuesofsle" value="italy">
                  Italy
                </option>
                <option className="valuesofsle" value="spain">
                  Spain
                </option>
                <option className="valuesofsle" value="france">
                  France
                </option>
                <option className="valuesofsle" value="brazil">
                  Brazil
                </option>
                <option className="valuesofsle" value="india">
                  India
                </option>
                <option className="valuesofsle" value="italy">
                  Italy
                </option>
                <option className="valuesofsle" value="spain">
                  Spain
                </option>
              </select>
            </p>
          </div> */}
          <div className="inputcoc intutbtn">
            <div className="btnnextform">
              <Link to="/workspace">
                <Button className="worktwobtngo">
                  <span className="worktwobtngo1">Go Back</span>{" "}
                </Button>
              </Link>
              <Link to="/workspacetwo">
                <Button className="worktwobtngo">
                  <span className="worktwobtngo1"> Connect Later</span>{" "}
                </Button>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspacetwo;
