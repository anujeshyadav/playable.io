import React from "react";
import {
  Card,
  CardBody,
  Input,
  Label,
  CardHeader,
  CardTitle,
} from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import classnames from "classnames";
import { BsStopwatch } from "react-icons/bs";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { BiBarChart } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdLabel } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

import { BsPeople } from "react-icons/bs";

import { Check, Edit } from "react-feather";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  UncontrolledTooltip,
  Col,
} from "reactstrap";
import { FcAddImage } from "react-icons/fc";
import { AiOutlineFileGif } from "react-icons/ai";
import { AiFillFolderAdd } from "react-icons/ai";
import { CgCarousel } from "react-icons/cg";
import avatar from "../../images/avatar.jpg";
import Dropzonecompose from "./Dropzonecompose";
import url from "availity-reactstrap-validation/lib/AvValidator/url";
import "../../../assets/scss/pages/usersocial.scss";

import Workflowthird from "../../../pages/Workflowthird";

// import Select from "react-select";
// const collapseItems = [
//   {
//     id: 1,
//     title: "Accordion Item 1",
//     content:
//       "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy.",
//   },
// ];

// const colourOptions = [
//   { value: "Set Preffered Time", label: "Set Preffered Time" },
//   { value: "Day After Tomorrow", label: "Day After Tomorrow" },
//   {
//     value: "Select a custom date & Time",
//     label: "Select a custom date & Time",
//   },
//   { value: "Change Workspace Time", label: "Change Workspace Time" },
// ];

class ComposeModalGrid extends React.Component {
  state = {
    modal: false,
    modalone: false,
    modaltime: false,
    addURl: "",
    collapseID: "",
    selectchange: "",
    active: "1",
  };
  toggleCollapse = (collapseID) => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };
  toggle = (tab) => {
    if (this.state.active !== tab) {
      this.setState({ active: tab });
    }
  };
  toggleModalone = () => {
    this.setState((prevState) => ({
      modalone: !prevState.modalone,
    }));
  };
  toggleModaltime = () => {
    this.setState((prevState) => ({
      modaltime: !prevState.modaltime,
    }));
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  fixedOnChange = (value) => {
    console.log(value.label);
    this.setState({ selectchange: value.label });
  };

  render() {
    return (
      <>
        <Button className="btn btn-success ft-1" onClick={this.toggleModal}>
          <Edit size={16} className="mr-i" />
          COMPOSE
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className="modal-dialog-centered"
          modal-lg
          fade={false}
        >
          <ModalHeader toggle={this.toggleModal}>Compose your post</ModalHeader>
          <ModalBody className="">
            <Row>
              <div className="mx-1 componylog">
                <img src={avatar} width="35px" alt="image" />
              </div>
            </Row>
            <Row className="inputfileds mt-1 mb-2">
              <div className="mx-1 componylog">
                <textarea
                  name="textarea"
                  placeholder="write something..."
                  className="textaeraofcompose form-control"
                  id=""
                  cols="90"
                  rows="6"
                ></textarea>
              </div>
            </Row>
            <Row className="iconuploads">
              <Col className="colicon">
                <span>
                  <Dropzonecompose />
                </span>
                <AiFillFolderAdd
                  data-placement="top"
                  title=" Add From Media Library"
                  color="#878721d9"
                  className="aifillfolderas mx-1"
                  size={36}
                >
                  Add From Media Library
                </AiFillFolderAdd>

                <CgCarousel
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add URL"
                  color="blue"
                  className="cgcarousel mx-1"
                  size={30}
                  onClick={() => this.setState({ addURl: "url" })}
                >
                  Add URL
                </CgCarousel>
              </Col>
            </Row>
            <Row className="d-flex ">
              {this.state.addURl == "url" ? (
                <>
                  <div className="urlimpu d-flex">
                    <div className="controlinput">
                      <Row>
                        <Col lg="3">
                          <Label className="labelurl">Enter URL here</Label>
                        </Col>
                        <Col lg="4">
                          {" "}
                          <input
                            placeholder="https://www.myweb.com"
                            type="url"
                            className="inputurlinput form-control"
                          />
                        </Col>
                        <Col lg="2">
                          <div className="btncssadd dfdf">
                            <Button
                              size="sm"
                              className="linksubmitbtn"
                              color="success"
                            >
                              Ok
                            </Button>
                          </div>
                        </Col>
                        <Col lg="2">
                          {" "}
                          <span className="cancelbtnmargin">
                            <Button
                              size="sm"
                              onClick={() => this.setState({ addURl: "" })}
                              className="linksubmitbtn btnsdanger"
                              color="danger"
                            >
                              cancel
                            </Button>
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </>
              ) : null}
            </Row>
          </ModalBody>

          <hr />
          <div className="modalfootercompse">
            <Row className="rowofmodalfooter">
              <Col lg="6">
                {/* <Select
                  
                  name="colors"
                  className="React"
                  classNamePrefix="select"
                  onChange={this.fixedOnChange}
                  options={colourOptions}
                /> */}

                <span>
                  <div className="dt12">
                    <Dropdown className="dropdownbtn">
                      <Dropdown.Toggle
                        variant="success"
                        className="combtn dropdown-basic"
                        size="sm"
                      >
                        <BsStopwatch size={20} />
                        <span className="mx-1">Select Date and Time</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropmenitms">
                        <hr />
                        <Dropdown.Item
                          onClick={this.toggleModalone}
                          className="dropmenuitemss"
                        >
                          <Modal
                            isOpen={this.state.modalone}
                            toggle={this.toggleModalone}
                            className={this.props.className}
                          >
                            <ModalHeader toggle={this.toggleModalone}>
                              Select Custom Date
                            </ModalHeader>
                            <ModalBody>
                              <div className="datetime mx-2 mt-1">
                                <Label className="labelurl">
                                  Add Date and time Here
                                </Label>
                                <input
                                  type="datetime-local"
                                  id="Posttime"
                                  name="settime"
                                />
                              </div>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="primary"
                                onClick={this.toggleModalone}
                              >
                                Confirm
                              </Button>{" "}
                            </ModalFooter>
                          </Modal>
                          <SlCalender size={25} />
                          <span className="mx-1">
                            Select a Custom-Date
                          </span>{" "}
                        </Dropdown.Item>
                        <Dropdown.Item onClick={this.toggleModaltime}>
                          <Modal
                            isOpen={this.state.modaltime}
                            toggle={this.toggleModaltime}
                            className="modal-dialog-centered  modalcustom modal-lg"
                          >
                            <ModalHeader
                              className="modalheadercustom"
                              toggle={this.toggleModaltime}
                            >
                              Sveltose
                            </ModalHeader>
                            <ModalBody>
                              <Nav
                                tabs
                                className="justify-content-center modal-dialog-centered modal-lg"
                              >
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: this.state.active === "1",
                                    })}
                                    onClick={() => {
                                      this.toggle("1");
                                    }}
                                  >
                                    <BsStopwatch size={20} />
                                    <span className="mx-1"> Time Table</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: this.state.active === "2",
                                    })}
                                    onClick={() => {
                                      this.toggle("2");
                                    }}
                                  >
                                    <MdLabel size={25} />

                                    <span className="mx-1"> Labels</span>
                                  </NavLink>
                                </NavItem>

                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: this.state.active === "3",
                                    })}
                                    onClick={() => {
                                      this.toggle("3");
                                    }}
                                  >
                                    <AiOutlineSetting size={25} />

                                    <span className="mx-1"> Setting</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: this.state.active === "4",
                                    })}
                                    onClick={() => {
                                      this.toggle("4");
                                    }}
                                  >
                                    <Check size={25} />

                                    <span className="mx-1"> Approvals</span>
                                  </NavLink>
                                </NavItem>
                              </Nav>
                              <TabContent activeTab={this.state.active}>
                                <TabPane tabId="1">
                                  <div className="container">
                                    <div className="mainheadingmodaltime">
                                      <Row>
                                        <h2 className="d-flex justify-content-center">
                                          <div className="headingaddtime">
                                            Add your preferred publishing times
                                            for faster scheduling
                                          </div>
                                        </h2>
                                      </Row>
                                    </div>
                                    <Row>
                                      {" "}
                                      <div className="btnhandletimset d-flex justify-content-center">
                                        <Button
                                          className="md d-flex justify-content-center"
                                          color="primary"
                                        >
                                          Add Time
                                        </Button>
                                      </div>
                                    </Row>
                                  </div>
                                </TabPane>
                                <TabPane tabId="2">
                                  <div className="container">
                                    <div className="mainheadingmodaltime">
                                      <Row>
                                        <h2 className="d-flex justify-content-center">
                                          <div className="headingaddtime">
                                            Create labels to categorize posts
                                            and organize your campaigns better
                                          </div>
                                        </h2>
                                      </Row>
                                    </div>
                                    <Row>
                                      {" "}
                                      <div className="btnhandletimset d-flex justify-content-center">
                                        <Button
                                          className="md d-flex justify-content-center"
                                          color="primary"
                                        >
                                          Create Label
                                        </Button>
                                      </div>
                                    </Row>
                                  </div>
                                </TabPane>
                                <TabPane tabId="3">
                                  Carrot cake dragée chocolate. Lemon drops ice
                                  cream wafer gummies dragée. Chocolate bar
                                  liquorice cheesecake cookie chupa chups
                                  marshmallow oat cake biscuit. Dessert toffee
                                  fruitcake ice cream powder tootsie roll cake.
                                </TabPane>
                                <TabPane tabId="4">
                                  {/* <Workspacetwo /> */}
                                  <Workflowthird />
                                </TabPane>
                              </TabContent>
                            </ModalBody>
                          </Modal>
                          <BiBarChart size={20} />
                          <span className="mx-1">
                            Set a Preffered Time
                          </span>{" "}
                        </Dropdown.Item>

                        <Dropdown.Item className="dropmenuitemss">
                          <BsPeople size={20} />
                          Change Workspace time Zone
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </span>
                {/* <Row>
                  {this.state.selectchange == "Select a custom date & Time" ? (
                    <>
                      <div className="datetime mx-2 mt-1">
                        <input
                          type="datetime-local"
                          id="Posttime"
                          name="settime"
                        />
                      </div>
                    </>
                  ) : null}
                </Row> */}
              </Col>
              <Col lg="1"></Col>
              <Col lg="2">
                <Button color="primary" size="sm" onClick={this.toggleModal}>
                  Accept
                </Button>{" "}
              </Col>
              <Col lg="2">
                <Button color="primary" size="sm" onClick={this.toggleModal}>
                  close
                </Button>
              </Col>{" "}
            </Row>
            {/* <Row>
              {this.state.selectchange == "Set Preffered Time" ? (
                <>
                  <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                  >
                    <ModalHeader>Compose your post</ModalHeader>
                    <ModalBody className="">
                      <Row></Row>
                      <Row>
                        <h2></h2>
                      </Row>
                      <Row> Add Time</Row>
                    </ModalBody>
                  </div>
                </>
              ) : null}
            </Row> */}
          </div>
        </Modal>
      </>
    );
  }
}
export default ComposeModalGrid;
