import React from "react";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/usersocial.scss";
import { FacebookEmbed } from "react-social-media-embed";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axiosConfig from "../../../configs/axiosConfig";
import { Oval } from "react-loader-spinner";

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
import { BiBarChart } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineSetting, AiFillDelete, AiOutlineDown } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

import Dropdown from "react-bootstrap/Dropdown";
import classnames from "classnames";
import {
  Code,
  Edit,
  Eye,
  Facebook,
  Instagram,
  Linkedin,
  PlusSquare,
  Twitter,
  Youtube,
} from "react-feather";
import { BsGoogle } from "react-icons/bs";
import { FaHourglassEnd, FaTiktok } from "react-icons/fa";
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
import { Link } from "react-router-dom";
// import UserListView from "./user-list/UserListView";

const colourOptions = [
  { value: "Feed", label: "Feed" },
  { value: "Grid", label: "Grid" },
  { value: "List", label: "List" },
  { value: "Calender", label: "Calender" },
];
const mediaOptions = [
  { value: "all Media", label: "All Media" },
  { value: "Unused Media", label: "Unused Media" },
  { value: "Deleted Media", label: "Deleted Media" },
];

class UserSocialList extends React.Component {
  state = {
    active: "1",
    selectedOptions: "Feed",
    workspace: [],
    workspacename: "",
    loader: false,
    // modal: false,
  };

  toggle = (tab) => {
    if (this.state.active !== tab) {
      this.setState({ active: tab });
    }
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOptions: selectedOption.value });
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    let { id } = this.props.match.params;

    axiosConfig
      .get(`user/viewone_workspace/${id}`)
      .then((resp) => {
        if (resp.data.data.workspacename !== this.state.workspacename) {
          this.setState({ workspacename: resp?.data?.data?.workspacename });
        }
        //  this.setState({ loader: false });
      })
      .catch((error) => {
        console.log("Error", error);
      });

    // console.log(id);

    // this.setState({ loader: true });
  }

  componentDidMount() {
    let { id } = this.props.match.params;

    axiosConfig
      .get(`/user/workSpace_list`)
      .then((resp) => {
        console.log(resp.data.data);
        this.setState({ workspace: resp?.data?.data });
      })
      .catch((error) => {
        console.log("Error", error);
      });
    axiosConfig
      .get(`user/viewone_workspace/${id}`)
      .then((resp) => {
        this.setState({ workspacename: resp?.data?.data?.workspacename });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  render() {
    return (
      <Row className="app-user-list">
        <Col sm="12">
          <Card>
            <Row className="d-flex justify-content-center mt-2">
              {/* {this.state.loader == false ? (
                <>
                  <p>WorkSpace Name:- {this.state.workspacename}</p>
                </>
              ) : (
                <>
                  <Oval
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={this.state.loader}
                    ariaLabel="oval-loading"
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </>
              )} */}
              <h5>WorkSpace Name:- {this.state.workspacename}</h5>
            </Row>
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
                    <Col md="5">
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
                              <FcGoogle size={25} />
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
                    <Col lg="2">
                      <span className="togledropdownnew">
                        <div className="dt12 dtaa">
                          <Dropdown className="dropdownbtn newbtndropdown">
                            <Dropdown.Toggle
                              size="sm"
                              // variant="success"
                              className="combtn dropdown-basic newbtn"
                            >
                              Workspaces <AiOutlineDown size="14" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropmenitms">
                              {this.state.workspace !== "" ? (
                                <>
                                  {this.state.workspace?.map((value) => (
                                    <Dropdown.Item
                                      key={value?._id}
                                      className="dropmenuitemss"
                                      href="#"
                                    >
                                      <Link
                                        className="workspacenametext"
                                        to={`/app/usermanage/usersociallist/${value?._id}`}
                                      >
                                        <MdSpaceDashboard
                                          size={18}
                                          className="mr-1"
                                          color="#3e2dea"
                                        />

                                        <span className="workspacetext">
                                          {value?.workspacename}
                                        </span>
                                      </Link>
                                    </Dropdown.Item>
                                  ))}
                                </>
                              ) : null}

                              {/* <Dropdown.Item
                                className="dropmenuitemss"
                                href="#/action-3"
                              >
                                <BiBarChart size={20} /> Manage Label
                              </Dropdown.Item>
                              <Dropdown.Item
                                className="dropmenuitemss"
                                href="#/action-3"
                              >
                                <BsPeople size={20} />
                                Manage People
                              </Dropdown.Item>
                              <Dropdown.Item
                                className="dropmenuitemss"
                                href="#/action-3"
                              >
                                <AiOutlineSetting size={20} />
                                Setting
                              </Dropdown.Item>
                              <hr />
                              <Dropdown.Item
                                className="dropmenuitemss"
                                href="#/action-3"
                              >
                                <FcApproval size={20} />
                                Approval setting
                              </Dropdown.Item>
                              <Dropdown.Item
                                className="dropmenuitemss"
                                href="#/action-3"
                              >
                                <AiFillDelete
                                  // key={value._id}
                                  fill="red"
                                  className="redfah"
                                  size={20}
                                />
                                Delete
                              </Dropdown.Item> */}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </span>
                    </Col>
                    <Col md="2">
                      <ComposeModalGrid />

                      <div className="mx-1 mr-1 sideevent">
                        <SideEventSidebar />
                      </div>
                      {/* <div className=" mx-1"> */}
                      {/* <Button
                          // onClick={this.toggleModal}
                          className="ft-filter"
                        >
                          <FcGallery size={18} className="mr-i" color="blue" />
                          Media
                        </Button> */}
                      {/* <MediaSidebar /> <span>Media</span> */}
                      {/* </div> */}
                    </Col>

                    <Col md="12" className="mt-10">
                      <TabContent activeTab={this.state.active}>
                        <TabPane tabId="1">
                          {this.state.selectedOptions === "Feed" ? (
                            <>
                              <ProfileFeed />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Calender" ? (
                            <>
                              <CalendarSocial />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Grid" ? (
                            <>
                              <FileGrid />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "List" ? (
                            <>
                              <UserListView />
                            </>
                          ) : null}
                        </TabPane>
                        <TabPane tabId="2">
                          {this.state.selectedOptions === "Feed" ? (
                            <>
                              <ProfileFeed />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Calender" ? (
                            <>
                              <CalendarSocial />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Grid" ? (
                            <>
                              <FileGrid />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "List" ? (
                            <>
                              <UserListView />
                            </>
                          ) : null}
                        </TabPane>
                        <TabPane tabId="3">
                          {this.state.selectedOptions === "Feed" ? (
                            <>
                              <ProfileFeed />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Calender" ? (
                            <>
                              <CalendarSocial />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Grid" ? (
                            <>
                              <FileGrid />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "List" ? (
                            <>
                              <UserListView />
                            </>
                          ) : null}
                        </TabPane>
                        <TabPane tabId="4">
                          {this.state.selectedOptions === "Feed" ? (
                            <>
                              <ProfileFeed />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Calender" ? (
                            <>
                              <CalendarSocial />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Grid" ? (
                            <>
                              <FileGrid />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "List" ? (
                            <>
                              <UserListView />
                            </>
                          ) : null}
                        </TabPane>
                        <TabPane tabId="5">
                          {this.state.selectedOptions === "Feed" ? (
                            <>
                              <ProfileFeed />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Calender" ? (
                            <>
                              <CalendarSocial />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Grid" ? (
                            <>
                              <FileGrid />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "List" ? (
                            <>
                              <UserListView />
                            </>
                          ) : null}
                        </TabPane>
                        <TabPane tabId="6">
                          {this.state.selectedOptions === "Feed" ? (
                            <>
                              <ProfileFeed />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Calender" ? (
                            <>
                              <CalendarSocial />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Grid" ? (
                            <>
                              <FileGrid />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "List" ? (
                            <>
                              <UserListView />
                            </>
                          ) : null}
                        </TabPane>
                        <TabPane tabId="7">
                          {this.state.selectedOptions === "Feed" ? (
                            <>
                              <ProfileFeed />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Calender" ? (
                            <>
                              <CalendarSocial />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "Grid" ? (
                            <>
                              <FileGrid />
                            </>
                          ) : null}
                          {this.state.selectedOptions === "List" ? (
                            <>
                              <UserListView />
                            </>
                          ) : null}
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default UserSocialList;
