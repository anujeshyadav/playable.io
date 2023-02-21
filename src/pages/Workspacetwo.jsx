import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, Label, Row, Card } from "reactstrap";
import {
  AiOutlineArrowRight,
  AiFillPlusSquare,
  AiOutlineUsergroupAdd,
  AiOutlineAppstoreAdd,
  AiOutlineCamera,
} from "react-icons/ai";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import FacebookLogin from "react-facebook-login";

import { CiFlag1 } from "react-icons/ci";
import { TbPlugConnected } from "react-icons/tb";
import { FaTiktok, FaDiaspora } from "react-icons/fa";
import DropZoneImage from "./DropZoneImage";
import {
  AiFillCloseCircle,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
} from "react-icons/ai";
// import InstagramLogin from "react-instagram-login";
import { InstagramLogin } from "@amraneze/react-instagram-login";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { GoogleLogin } from "react-google-login";
import "./Workspacetwo.scss";
import { Link } from "react-router-dom";
import { CloudLightning } from "react-feather";
import axios from "axios";
import TwitterLogin from "react-twitter-login";

import LinkedInPage from "./LinkedInPage";
// import { useLinkedIn } from "react-linkedin-login-oauth2";

function Workspacetwo(args) {
  const componentClicked = (e) => {
    console.log(e);
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modalgl, setModalgl] = useState(false);
  const togglegl = () => setModalgl(!modalgl);
  const [modalli, setModalli] = useState(false);
  const toggleli = () => setModalli(!modalli);
  const [modaltw, setModaltw] = useState(false);
  const toggletw = () => setModaltw(!modaltw);
  const [modalin, setModalin] = useState(false);
  const togglein = () => setModalin(!modalin);

  const [modalone, setModalone] = useState(false);
  const toggleone = () => setModalone(!modalone);
  const [modalyt, setModalyt] = useState(false);
  const toggleyt = () => setModalyt(!modalyt);

  const [first, setfirst] = useState("");
  const [allData, setAllData] = useState("");
  const hiddenFileInput = React.useRef(null);

  useEffect(() => {
    console.log("ids", args.match.params.id);
    const id = args.match.params.id;
    axios
      .get(`http://13.127.168.84:3000/user/viewone_workspace/${id}`)
      .then((resp) => {
        console.log(resp.data.data);
        setAllData(resp.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  const handleClick = (event) => {
    console.log(hiddenFileInput);
    hiddenFileInput.current.click();
  };
  const onSuccess = (response) => {
    console.log(response);
  };

  const onFailed = (error) => {
    console.log(error);
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };
  const responseInstagram = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const authHandler = (err, data) => {
    console.log(err, data);
  };

  const responseGoogle = (response) => {
    console.log(response);
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
            <h3>Connect {allData.workspacename} pages</h3>
          </div>

          <p className="parawork">
            Add the social media pages related to this brand. And don't worry,
            you can always add more later.
          </p>
        </div>
        <div className="centrrs">
          <Row>
            {/* facebook card and modal */}
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
                          <p className="modaltexthead">Connect Facebook Page</p>
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
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <CiFlag1 className="bsfacebook" size={35} />
                                </div>
                                <div className="facebookname modalfacebookname">
                                  <span className="facebooklogin">
                                    <FacebookLogin
                                      returnScopes="true"
                                      appId="2149160251958615"
                                      fields="name,email,picture"
                                      scope="public_profile,user_friends,user_actions.books"
                                      onClick={componentClicked}
                                      cssClass="my-facebook-button-class favebook"
                                      callback={responseFacebook}
                                    />
                                    {/* <FacebookLogin
                                      useRedirect
                                      loginOptions={{
                                        return_scopes: true,
                                      }}
                                      scope="public_profile, email"
                                      fields='name,email,picture'
                                      appId="1088597931155576"
                                      onSuccess={(response) => {
                                        console.log("Login Success!", response);
                                      }}
                                      onFail={(error) => {
                                        console.log("Login Failed!", error);
                                      }}
                                      onProfileSuccess={(response) => {
                                        console.log(
                                          "Get Profile Success!",
                                          response
                                        );
                                      }}
                                    /> */}
                                  </span>
                                </div>

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
                                  <AiOutlineUsergroupAdd
                                    className="bsfacebook"
                                    size={35}
                                  />
                                </div>
                                <div className="facebookname modalfacebookname">
                                  <div className="facebookname modalfacebookname">
                                    <span className="facebooklogin fblogiigroup">
                                      <FacebookLogin
                                        returnScopes="true"
                                        appId="2149160251958615"
                                        fields="name,email,picture"
                                        scope="public_profile,user_friends,user_actions.books"
                                        onClick={componentClicked}
                                        cssClass="my-facebook-button-class favebook sosst"
                                        callback={responseFacebook}
                                      />
                                    </span>
                                  </div>
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
            {/* twittor card and modal */}
            <Col lg="3">
              <Card onClick={toggletw} className="cardmainworktwitor">
                <Modal isOpen={modaltw} toggle={toggletw} {...args}>
                  <ModalHeader toggle={toggletw}>
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
                          <p className="modaltexthead">Connect Twittor pages</p>
                          <h2 className="modaltextheads">
                            Select what type of pages you want to connect
                          </h2>
                        </Col>
                        <Col lg="1">
                          <AiFillCloseCircle
                            className="aifilsclosemodal"
                            onClick={toggletw}
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
                              <a
                              // href="http://13.127.168.84:3000/login/fb"
                              >
                                <div className="maincont">
                                  <div className="Twittorcard">
                                    <CiFlag1 className="bsfacebook" size={35} />
                                  </div>
                                  <div className="facebookname modalfacebookname">
                                    {/* <a href="http://13.127.168.84:3000/login/fb"> */}
                                    <span className="facebooklogin">
                                      {/* <TwitterLogin
                                        authCallback={authHandler}
                                        consumerKey="OJW2dPMR1yUBuosKxMYfwi4pc"
                                        consumerSecret="xosmBnv31qBe26OEpc0ePBIPQllfJiOXBDQntDMS1oLT3hTlTf"
                                      /> */}
                                    </span>
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
            {/* instagram card and modal */}
            <Col lg="3">
              {/* instagram model */}
              <Card onClick={togglein} className="cardmainworkinsta">
                <Modal isOpen={modalin} toggle={togglein} {...args}>
                  <ModalHeader toggle={togglein}>
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
                          <p className="modaltexthead">
                            Connect instagram pages
                          </p>
                          <h2 className="modaltextheads">
                            Select what type of pages you want to connect
                          </h2>
                        </Col>
                        <Col lg="1">
                          <AiFillCloseCircle
                            className="aifilsclosemodal"
                            onClick={togglein}
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
                              <a
                              // href="http://13.127.168.84:3000/login/fb"
                              >
                                <div className="maincont">
                                  <div className="Twittorcard">
                                    <CiFlag1 className="bsfacebook" size={35} />
                                  </div>
                                  <div className="facebookname modalfacebookname">
                                    {/* <a href="http://13.127.168.84:3000/login/fb"> */}
                                    <span className="facebooklogin instalogin">
                                      <InstagramLogin
                                        clientId="5fd2f11482844c5eba963747a5f34556"
                                        buttonText="Insta-Login"
                                        cssClass="my-facebook-button-class favebook instalogin"
                                        onSuccess={responseInstagram}
                                        onFailure={responseInstagram}
                                        redirectUri="REDIRECT_URL"
                                      />
                                    </span>
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
                            <Card className="cardmainworktwitor ">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <AiOutlineUsergroupAdd
                                    className="bsfacebook"
                                    size={35}
                                  />
                                </div>
                                <div className="facebookname modalfacebookname">
                                  {/* <span>Add groups</span> */}
                                  <div className="facebookname modalfacebookname">
                                    {/* <a href="http://13.127.168.84:3000/login/fb"> */}
                                    <span className="facebooklogin fblogiigroup">
                                      <InstagramLogin
                                        clientId="5fd2f11482844c5eba963747a5f34556"
                                        buttonText="Add Pages"
                                        cssClass="my-facebook-button-class favebook instalogin"
                                        onSuccess={responseInstagram}
                                        onFailure={responseInstagram}
                                        redirectUri="REDIRECT_URL"
                                      />
                                    </span>
                                    {/* </a> */}
                                  </div>
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
                            <Card className="cardmainworktwitor ">
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
            {/* Linkedin card and modal */}
            <Col lg="3">
              <Card onClick={toggleli} className="cardmainworklink">
                <Modal isOpen={modalli} toggle={toggleli} {...args}>
                  <ModalHeader toggle={toggleli}>
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
                          <p className="modaltexthead">Connect Linkedin page</p>
                          <h2 className="modaltextheads">
                            Select what type of pages you want to connect
                          </h2>
                        </Col>
                        <Col lg="1">
                          <AiFillCloseCircle
                            className="aifilsclosemodal"
                            onClick={toggleli}
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
                              <a
                              // href="http://13.127.168.84:3000/login/fb"
                              >
                                <div className="maincont">
                                  <div className="Twittorcard">
                                    <CiFlag1 className="bsfacebook" size={35} />
                                  </div>
                                  <div className="facebookname modalfacebookname">
                                    {/* <a href="http://13.127.168.84:3000/login/fb"> */}
                                    <span className="facebooklogin instalogin">
                                      <LinkedInPage className="linkedinpage" />
                                    </span>
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
                            <Card className="cardmainworktwitor ">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <AiOutlineUsergroupAdd
                                    className="bsfacebook"
                                    size={35}
                                  />
                                </div>
                                <div className="facebookname modalfacebookname">
                                  {/* <span>Add groups</span> */}
                                  <div className="facebookname modalfacebookname">
                                    {/* <a href="http://13.127.168.84:3000/login/fb"> */}
                                    <span className="facebooklogin fblogiigroup">
                                      <LinkedInPage className="linkedinpage" />
                                    </span>
                                    {/* </a> */}
                                  </div>
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
                            <Card className="cardmainworktwitor ">
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
            {/* google card and modal */}
            <Col lg="3">
              <Card onClick={togglegl} className="cardmainworkgoogle">
                <Modal isOpen={modalgl} toggle={togglegl} {...args}>
                  <ModalHeader toggle={togglegl}>
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
                          <p className="modaltexthead">Connect Google page</p>
                          <h2 className="modaltextheads">
                            Select what type of pages you want to connect
                          </h2>
                        </Col>
                        <Col lg="1">
                          <AiFillCloseCircle
                            className="aifilsclosemodal"
                            onClick={togglegl}
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
                              <a
                              // href="http://13.127.168.84:3000/login/fb"
                              >
                                <div className="maincont">
                                  <div className="Twittorcard">
                                    <CiFlag1 className="bsfacebook" size={35} />
                                  </div>
                                  <div className="facebookname modalfacebookname googleloginheight">
                                    {/* <a href="http://13.127.168.84:3000/login/fb"> */}
                                    <span className="facebooklogin instalogin googleloginheight">
                                      <GoogleLogin
                                        className="googlelogin"
                                        clientId="921296865820-drbaqfoqkftuhaicl6r38pl1lneclgtb.apps.googleusercontent.com"
                                        buttonText="Google Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        scope="https://www.googleapis.com/auth/cloud-platform"
                                      />
                                    </span>
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
                            <Card className="cardmainworktwitor ">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <AiOutlineUsergroupAdd
                                    className="bsfacebook"
                                    size={35}
                                  />
                                </div>
                                <div className="facebookname modalfacebookname googleloginheight">
                                  {/* <span>Add groups</span> */}
                                  <div className="facebookname modalfacebookname googlename googleloginheight">
                                    {/* <a href="http://13.127.168.84:3000/login/fb"> */}
                                    <span className="facebooklogin fblogiigroup">
                                      <GoogleLogin
                                        className="googlelogin"
                                        clientId="921296865820-drbaqfoqkftuhaicl6r38pl1lneclgtb.apps.googleusercontent.com"
                                        buttonText="Google Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        // cookiePolicy={"single_host_origin"}
                                      />
                                    </span>
                                    {/* </a> */}
                                  </div>
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
                            <Card className="cardmainworktwitor ">
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
                  <div className="facebookmaincardgoogle">
                    <AiFillGoogleCircle className="bsfacebook" size={40} />
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
            {/* youtube card and modal */}
            <Col lg="3">
              <Card onClick={toggleyt} className="cardmainworkyou">
                <Modal isOpen={modalyt} toggle={toggleyt} {...args}>
                  <ModalHeader toggle={toggleyt}>
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
                            onClick={toggleyt}
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
                            <Card className="cardmainworktwitor">
                              <div className="maincont">
                                <div className="Twittorcard">
                                  <CiFlag1 className="bsfacebook" size={35} />
                                </div>
                                <div className="facebookname modalfacebookname">
                                  <span className="facebooklogin">
                                    <FacebookLogin
                                      returnScopes="true"
                                      appId="2149160251958615"
                                      fields="name,email,picture"
                                      scope="public_profile,user_friends,user_actions.books"
                                      onClick={componentClicked}
                                      cssClass="my-facebook-button-class favebook"
                                      callback={responseFacebook}
                                    />
                                  </span>
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
            {/* tiktok card and modal */}
            <Col lg="3">
              <Card onClick={toggle} className="cardmainwork tiktok">
                <div className="maincont">
                  <div className="facebookmaincard tiktok">
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
            {/* generic card and modal */}
            <Col lg="3">
              <Card onClick={toggleone} className="cardmainwork ">
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
                                {/* <AiOutlineCamera
                                  onClick={handleClick}
                                  className="aioutlinecmera"
                                  size={30}
                                /> */}
                                <DropZoneImage />
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
                  <div className="facebookmaincard ">
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
              <Link to="/Workspace">
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
