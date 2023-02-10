import React from "react";

import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/usersocial.scss";

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

import FileGrid from "./filegridview/FileGrid";
import ProfileFeed from "./profilesocial/ProfileFeed";
import ComposeModalGrid from "./ComposeModalGrid";
import DropZone from "./DropZone";
import SideEventSidebar from "./sidemodal/SideEventSidebar";
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
    // modal: false,
  };

  toggle = (tab) => {
    if (this.state.active !== tab) {
      this.setState({ active: tab });
    }
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

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
                        className="React"
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
                              <Facebook size={20} />
                              <p className="mb-0">Jusco</p>
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
                              <Twitter size={20} />
                              <p>Jusco</p>
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
                              <Linkedin size={20} />
                              <p>Jusco</p>
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
                              <Instagram size={20} />
                              <p>Jusco</p>
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
                              <BsGoogle size={20} />
                              <p>Jusco</p>
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
                              <Youtube size={20} />
                              <p>Jusco</p>
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
                              <FaTiktok size={20} />
                              <p>Jusco</p>
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
                              <PlusSquare size={20} />
                              <p className="mb-0">Jusco</p>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </div>
                    </Col>
                    <Col md="3">
                      <ComposeModalGrid />
                      {/* <NavLink>
                        <span className="mediatag">
                          <span>
                            {" "}
                            <FcGallery
                              size={25}
                              className="mr-i"
                              color="blue"
                            />
                            Media
                          </span>
                        </span>
                        <Modal
                          isOpen={this.state.modal}
                          toggle={this.toggleModal}
                          className=""
                        >
                          <ModalHeader toggle={this.toggleModal}>
                            Upload Media
                          </ModalHeader>
                          <ModalBody className="">
                            <DropZone />
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={this.toggleModal}>
                              Submit
                            </Button>{" "}
                            <Button color="primary" onClick={this.toggleModal}>
                              close
                            </Button>{" "}
                          </ModalFooter>
                        </Modal>
                      </NavLink> */}
                      <div className="text-right">
                        <SideEventSidebar />

                        <Button
                          onClick={this.toggleModal}
                          className="ft-filter"
                        >
                          {" "}
                          <FcGallery size={18} className="mr-i" color="blue" />
                          Media
                        </Button>
                      </div>
                    </Col>

                    <Col md="12" className="mt-10">
                      <TabContent activeTab={this.state.active}>
                        <TabPane tabId="1">
                          <CalendarSocial />
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
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className=" modal-dialog-centered modal-lg"
        >
          <ModalHeader toggle={this.toggleModal}>Upload Media</ModalHeader>
          <ModalBody className="">
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
        </Modal>
      </Row>
    );
  }
}

export default UserSocialList;
