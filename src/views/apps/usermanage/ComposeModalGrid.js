import React from "react";
import {
  Card,
  CardBody,
  Input,
  Label,
  CardHeader,
  CardTitle,
} from "reactstrap";
import Select from "react-select";
import Dropzone from "react-dropzone";
import Dropdown from "react-bootstrap/Dropdown";
import classnames from "classnames";
import { BsStopwatch } from "react-icons/bs";
import imgdemo from "../../../assets/img/pages/graphic-2.png";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CustomInput,
} from "reactstrap";
import { BiBarChart } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdLabel } from "react-icons/md";
import { ImLink } from "react-icons/im";
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
import DropZone from "../usermanage/DropZone.jsx";
import Dropzonecompose from "./Dropzonecompose";

import url from "availity-reactstrap-validation/lib/AvValidator/url";
import "../../../assets/scss/pages/usersocial.scss";
import TimezoneSelect from "react-timezone-select";
import Workflowthird from "../../../pages/Workflowthird";
import ComposeWork from "../../../pages/ComposeWork";
import DropzoneProgrammatically from "./Dropzonecompose";
import axios from "axios";
import MediaSidebar from "./sidemodal/MediaSidebar";

const mediaOptions = [
  { value: "all Media", label: "All Media" },
  { value: "Unused Media", label: "Unused Media" },
  { value: "Deleted Media", label: "Deleted Media" },
];
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
    modalmedia: false,
    addURl: "",
    collapseID: "",
    selectchange: "",
    active: "1",
    addTime: "",
    addLabel: "",
    SelectedTimezone: {},
    Text: "",
    status: "",
    uploadfile: "",
    datetime: "",
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
  toggleModalmedia = () => {
    this.setState((prevState) => ({
      modalmedia: !prevState.modalmedia,
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

  handleok = () => {
    // this.setState({ status: "ok" });
    console.log(this.state.Text, this.state.uploadfile);
    axios
      .post(`http://13.127.168.84:3000/user/add_fb_post`, {
        post: this.state.Text,
        mediaUrls: this.state.uploadfile,
      })
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length > 0) {
      this.setState({
        uploadfile: acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      });
    }
  };

  render() {
    const maxSize = 4 * 1024 * 1024;
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
                  value={this.state.Text}
                  onChange={(e) => this.setState({ Text: e.target.value })}
                  cols="90"
                  rows="6"
                ></textarea>
              </div>
            </Row>
            <Row className="iconuploads">
              <Col className="colicon">
                <span className="d-flex ">
                  <Dropzone
                    className="dropzonenew"
                    onDrop={this.onDrop}
                    accept="image/png,image/jpeg,image/gif,image/jpg"
                    minSize={1}
                    maxSize={maxSize}
                  >
                    {({ getRootProps, getInputProps, open }) => (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {/* {console.log("SelectedFile" + { ...getRootProps() })} */}
                        {/* {console.log("uploadFile" + this.state.uploadfile)} */}
                        <FcAddImage
                          data-placement="top"
                          title="Add images,GIF & video"
                          // onClick={open}
                          color="green"
                          id="fcadd"
                          size={25}
                        >
                          {" "}
                          Add Images & video
                        </FcAddImage>
                        {/* {this.state.uploadfile ? (
                            <p>Selected file: {this.state.uploadfile}</p>
                          ) : null} */}
                      </div>
                    )}
                  </Dropzone>
                  <span className="mx-1">
                    {/* <AiFillFolderAdd
                      data-placement="top"
                      title=" Add From Media Library"
                      color="#878721d9"
                      className="aifillfolderas mx-1"
                      size={36}
                      // onClick={this.toggleModalmedia}
                    >
                      Add From Media Library
                    </AiFillFolderAdd> */}
                    <MediaSidebar />
                  </span>
                  <span className="mtsspan">
                    <ImLink
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add URL"
                      color="blue"
                      className="cgcarousel mx-1"
                      size={18}
                      onClick={() => this.setState({ addURl: "url" })}
                    >
                      Add URL
                    </ImLink>
                  </span>
                  {/* <Dropzonecompose
                    text={this.state.Text}
                    status={this.state.status}
                  /> */}
                </span>
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
                          <input
                            size="sm"
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
                                  onChange={(e) => {
                                    this.setState({ datetime: e.target.value });
                                  }}
                                />
                                {this.state.datetime}
                                {console.log(this.state.datetime)}
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
                            className="modal-dialog-centered modal-xl"
                          >
                            <ModalHeader
                              className="modalheadercustom"
                              toggle={this.toggleModaltime}
                            >
                              Sveltose
                            </ModalHeader>
                            <ModalBody className="opencompsesetnew">
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
                                  <div className=" maindata metanewdata">
                                    <div className="mainheadingmodaltime">
                                      <Row>
                                        <div className="headingfirst d-flex justify-content-center">
                                          <h2 className="d-flex justify-content-center">
                                            Add your preferred publishing times
                                            for faster scheduling
                                          </h2>
                                        </div>
                                      </Row>
                                    </div>
                                    <Row>
                                      <Col lg="4">
                                        {" "}
                                        <div className="btnhandletimset d-flex justify-content-center">
                                          <Button
                                            onClick={() =>
                                              this.setState({
                                                addTime: "addTime",
                                              })
                                            }
                                            className="md d-flex justify-content-center"
                                            color="primary"
                                          >
                                            Add Time
                                          </Button>
                                        </div>
                                      </Col>
                                      <Col lg="6">
                                        {this.state.addTime == "addTime" ? (
                                          <>
                                            {" "}
                                            <div className="datetime newadtime mx-2  btnhandletimset d-flex justify-content-center">
                                              <Label className="labelurl">
                                                Add Date and time Here
                                              </Label>
                                              <input
                                                type="datetime-local"
                                                id="Posttime"
                                                name="settime"
                                              />
                                              <Button
                                                size="sm"
                                                className="md mx-2 "
                                                color="primary"
                                              >
                                                Add
                                              </Button>
                                            </div>
                                          </>
                                        ) : null}
                                      </Col>
                                    </Row>
                                  </div>
                                </TabPane>
                                <TabPane tabId="2">
                                  <div className=" maindata metanewdata">
                                    <div className="mainheadingmodaltime">
                                      <Row>
                                        <div className="headingfirst d-flex justify-content-center">
                                          <h2 className="d-flex justify-content-center">
                                            Create labels to categorize posts
                                            and organize your campaigns better
                                          </h2>
                                        </div>
                                      </Row>
                                    </div>
                                    <Row>
                                      <Col lg="4">
                                        {" "}
                                        <div className="btnhandletimset d-flex justify-content-center">
                                          <Button
                                            onClick={() =>
                                              this.setState({
                                                addLabel: "addLabel",
                                              })
                                            }
                                            className="md d-flex justify-content-center"
                                            color="primary"
                                          >
                                            Create Label
                                          </Button>
                                        </div>
                                      </Col>
                                      <Col lg="8">
                                        {this.state.addLabel == "addLabel" ? (
                                          <>
                                            <Row>
                                              <Col lg="3">
                                                <div className="datetime newadtime   btnhandletimset d-flex justify-content-center">
                                                  {" "}
                                                  <Label className="labelurl">
                                                    Add Label here
                                                  </Label>
                                                </div>
                                              </Col>
                                              <Col lg="4">
                                                <div className="datetime newadtime   btnhandletimset d-flex justify-content-center">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="text"
                                                    id="exampleEmail"
                                                    placeholder="with a placeholder"
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg="4">
                                                <div className="datetime newadtime   btnhandletimset d-flex justify-content-center">
                                                  <Button
                                                    size="sm"
                                                    className="md mx-2 "
                                                    color="primary"
                                                  >
                                                    Add label
                                                  </Button>
                                                </div>
                                              </Col>
                                            </Row>
                                          </>
                                        ) : null}
                                      </Col>
                                    </Row>
                                  </div>
                                </TabPane>
                                <TabPane tabId="3">
                                  <div className="dashboard-sectionss dashboard-main">
                                    <div className="centrr ">
                                      <div className="inputcoc">
                                        <Label className="labelnew">
                                          Workspace name
                                        </Label>
                                        <input
                                          required
                                          type="text"
                                          id="fname"
                                          placeholder="Nutella"
                                          className="form-control"
                                          //   value={workspace}
                                          //   onChange={(e) => setWorkspace(e.target.value)}
                                        />
                                      </div>
                                      <div className="inputcoc">
                                        <Label className="labelnew">
                                          Workspace timezone
                                        </Label>
                                        <p>
                                          <TimezoneSelect
                                            value={this.state.SelectedTimezone}
                                            //   onChange={setSelectedTimezone}
                                            onChange={
                                              this.setState.SelectedTimezone
                                            }
                                          />
                                        </p>
                                      </div>
                                      <Row>
                                        <Col lg="10">
                                          <div className="create">
                                            Create new posts as internal
                                          </div>
                                        </Col>
                                        <Col lg="2">
                                          <CustomInput
                                            type="switch"
                                            className="mr-1 mb-2"
                                            id="primary"
                                            name="primary"
                                            inline
                                          ></CustomInput>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <div className="composetext">
                                          <p>
                                            Remove workspace Remove this
                                            workspace and erase all data (posts,
                                            comments, pages etc.). This action
                                            is irreversible.
                                          </p>
                                          <a href="">Remove It</a>
                                        </div>
                                      </Row>
                                      {/* <div onClick={handlelogin} className="inputcoc intutbtn"></div> */}
                                    </div>
                                  </div>
                                  {/* <Composeworkclass /> */}
                                  {/* <ComposeWorkspace /> */}
                                </TabPane>
                                <TabPane tabId="4">
                                  <ComposeWork />
                                </TabPane>
                              </TabContent>
                            </ModalBody>
                          </Modal>
                          <BiBarChart size={20} />
                          <span className="mx-1">
                            Set a Preffered Time
                          </span>{" "}
                        </Dropdown.Item>

                        {/* <Dropdown.Item className="dropmenuitemss">
                          <BsPeople size={20} />
                          Change Workspace time Zone
                        </Dropdown.Item> */}
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
                <Button color="primary" size="sm" onClick={this.handleok}>
                  Upload
                </Button>
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
        {/* <Modal
          isOpen={this.state.modalmedia}
          toggle={this.toggleModalmedia}
          className=" modal-dialog-centered modal-lg"
        >
          <ModalHeader toggle={this.toggleModalmedia} className="bg-primary">
            Upload Media
          </ModalHeader>
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
            <Button color="primary" onClick={this.toggleModalmedia}>
              Accept
            </Button>{" "}
          </ModalFooter>
        </Modal> */}
      </>
    );
  }
}
export default ComposeModalGrid;
