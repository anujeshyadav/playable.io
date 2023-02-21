import React from "react";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/usersocial.scss";
import { FacebookEmbed } from "react-social-media-embed";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  Button,
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import {
  Code,
  Edit,
  Eye,
  Facebook,
  Instagram,
  Link,
  Linkedin,
  PlusSquare,
  Twitter,
  Youtube,
} from "react-feather";
import { BsGoogle } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Select from "react-select";
import Gallery from "../../../extensions/swiper/Gallery";
import { FcGallery } from "react-icons/fc";
import CalendarSocial from "./calendar/CalendarSocial";
// import UserListView from "./user-list/UserListView";
import ListView from "../../ui-elements/data-list/ListView";
import UserListView from "./user-list/UserListView";
import imgdemo from "../../../assets/img/pages/graphic-2.png";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsYoutube } from "react-icons/bs";
import instaimg from "../../../../src/assets/img/logo/insta.png";
import FileGrid from "./filegridview/FileGrid";
import ProfileFeed from "./profilesocial/ProfileFeed";
import ComposeModalGrid from "./ComposeModalGrid";
import DropZone from "./DropZone";
import SideEventSidebar from "./sidemodal/SideEventSidebar";
import MediaSidebar from "./sidemodal/MediaSidebar";
// import UserListView from "./user-list/UserListView";

const colourOptions = [
  { value: "Feed", label: "Feed" },
  { value: "Calender", label: "Calender" },
  { value: "Grid", label: "Grid" },
  { value: "List", label: "List" },
];
const mediaOptions = [
  { value: "all Media", label: "All Media" },
  { value: "Unused Media", label: "Unused Media" },
  { value: "Deleted Media", label: "Deleted Media" },
];

class UserSocialList extends React.Component {
  state = {
    active: "1",
    selectedOption: null,
    // modal: false,
  };

  toggle = (tab) => {
    if (this.state.active !== tab) {
      this.setState({ active: tab });
    }
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () => {
      if (this.state.selectedOption.value === "Feed") {
        this.toggle("4");
      } else if (this.state.selectedOption.value === "Calender") {
        this.toggle("1");
      } else if (this.state.selectedOption.value === "List") {
        this.toggle("2");
      } else if (this.state.selectedOption.value === "Grid") {
        this.toggle("3");
      }
    });
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
  }
  render() {
    return (
      <Row className="app-user-list">
        <Col sm="12">
          <Card>
            <CardBody>
              <Row>
                <Col md="12">
                  <Row>
                    <Col md="3">
                      <Select
                        onChange={this.handleChange}
                        className="React customSelect"
                        classNamePrefix="select"
                        defaultValue={colourOptions[0]}
                        name="color"
                        options={colourOptions}
                      />
                    </Col>
                    <Col md="6">
                      <div className="views">
                        <Nav tabs className="justify-content-center">
                          <NavItem className="text-center">
                            <NavLink
                              className={classnames({
                                active: this.state.active === "1",
                              })}
                              onClick={() => {
                                this.toggle("1");
                              }}
                            >
                              <AiFillFacebook
                                size={25}
                                color="##4267B2"
                                fill="#4267B2"
                              />
                            </NavLink>
                          </NavItem>
                          <NavItem className="text-center">
                            <NavLink
                              className={classnames({
                                active: this.state.active === "2",
                              })}
                              onClick={() => {
                                this.toggle("2");
                              }}
                            >
                              <FaTwitterSquare
                                size={25}
                                fill="#1DA1F2"
                                color="#1DA1F2"
                              />
                            </NavLink>
                          </NavItem>
                          <NavItem className="text-center">
                            <NavLink
                              className={classnames({
                                active: this.state.active === "3",
                              })}
                              onClick={() => {
                                this.toggle("3");
                              }}
                            >
                              <AiFillLinkedin size={25} color="#0A66C2" />
                            </NavLink>
                          </NavItem>
                          <NavItem className="text-center">
                            <NavLink
                              className={classnames({
                                active: this.state.active === "4",
                              })}
                              onClick={() => {
                                this.toggle("4");
                              }}
                            >
                              <img src={instaimg} slt="" width={22} />
                            </NavLink>
                          </NavItem>
                          <NavItem className="text-center">
                            <NavLink
                              className={classnames({
                                active: this.state.active === "5",
                              })}
                              onClick={() => {
                                this.toggle("5");
                              }}
                            >
                              <FcGoogle
                                size={25}
                                // color="#EA4335"
                              />
                            </NavLink>
                          </NavItem>
                          <NavItem className="text-center">
                            <NavLink
                              className={classnames({
                                active: this.state.active === "6",
                              })}
                              onClick={() => {
                                this.toggle("6");
                              }}
                            >
                              <BsYoutube size={25} color="#FF0000" />
                            </NavLink>
                          </NavItem>
                          <NavItem className="text-center">
                            <NavLink
                              className={classnames({
                                active: this.state.active === "7",
                              })}
                              onClick={() => {
                                this.toggle("7");
                              }}
                            >
                              <FaTiktok size={22} color="black" />
                            </NavLink>
                          </NavItem>
                          <NavItem className="text-center">
                            <NavLink
                              className={classnames({
                                active: this.state.active === "8",
                              })}
                              onClick={() => {
                                this.toggle("8");
                              }}
                            >
                              <PlusSquare size={25} color="#28c76f" />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </div>
                    </Col>
                    <Col md="3">
                      <ComposeModalGrid />

                      <div className="mx-1 mr-1 sideevent">
                        <SideEventSidebar />
                      </div>
                      <div className=" mx-1">
                        {/* <Button
                          // onClick={this.toggleModal}
                          className="ft-filter"
                        >
                          <FcGallery size={18} className="mr-i" color="blue" />
                          Media
                        </Button> */}
                        {/* <MediaSidebar /> <span>Media</span> */}
                      </div>
                    </Col>

                    <Col md="12" className="mt-10">
                      <TabContent activeTab={this.state.active}>
                        <TabPane tabId="1">
                          <CalendarSocial />
                          {/* {this.state.active == null &&
                          this.state.active == "" ? null : this.state.active ==
                            "1" ? (
                            <>
                              <ProfileFeed />
                            </>
                          ) : this.state.active == "2" ? (
                            <>
                              <CalendarSocial />
                            </>
                          ) : this.state.active == "3" ? (
                            <>
                              <FileGrid />

                              <UserListView />
                            </>
                          ) : (
                            <></>
                          )} */}
                        </TabPane>
                        <TabPane tabId="2">
                          <UserListView />
                        </TabPane>
                        <TabPane tabId="3">
                          <FileGrid />
                        </TabPane>
                        <TabPane tabId="4">
                          <ProfileFeed />
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        {/* <Row></Row> */}
        {/* <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className=" modal-dialog-centered modal-lg"
        >
          <ModalHeader toggle={this.toggleModal}>Upload Media</ModalHeader>
          <ModalBody className="">
            <MediaSidebar />
            <DropZone className="" />
            <div className="main-text">
              <Row>
                <Col md="6" className="text-left mb-2">
                  <p>
                    <span>
                      {" "}
                      <input type="checkbox" className="chk-s mr-1"></input>
                    </span>
                    0 files selected
                  </p>
                </Col>
                <Col md="6">
                  <div className="nt-slt mb-2">
                    <Select
                      className="React nt-slt"
                      classNamePrefix="select"
                      defaultValue={mediaOptions[0]}
                      name="color"
                      options={mediaOptions}
                    />
                  </div>
                </Col>
                <Col md="12">
                  <Row>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                    <Col md="3" className="mb-2">
                      <NavLink to="/">
                        <div className="img-bg">
                          <img src={imgdemo} alt="" width="100%" />
                          <div className="bg-ligt">
                            <div className="text-right">
                              <span>
                                <p className="tag"> 2 post</p>
                                <form>
                                  <input
                                    type="checkbox"
                                    className="chk-p"
                                  ></input>
                                </form>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <small className="file-text">fb Content</small>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Submit
            </Button>{" "}
            <Button color="primary" onClick={this.toggleModal}>
              close
            </Button>{" "}
          </ModalFooter>
        </Modal> */}
      </Row>
    );
  }
}

export default UserSocialList;
