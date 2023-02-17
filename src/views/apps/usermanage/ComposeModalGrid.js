import React from "react";
import {
  Card,
  CardBody,
  Input,
  Label,
  CardHeader,
  CardTitle,
} from "reactstrap";
import axiosConfig from "../../../configs/axiosConfig";
import Select from "react-select";
import Dropzone from "react-dropzone";
import Dropdown from "react-bootstrap/Dropdown";
import classnames from "classnames";
import { BsStopwatch } from "react-icons/bs";
import imgdemo from "../../../assets/img/pages/graphic-2.png";
import Multiselect from "multiselect-react-dropdown";

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
// import Select from "react-select";

import url from "availity-reactstrap-validation/lib/AvValidator/url";
import "../../../assets/scss/pages/usersocial.scss";
import TimezoneSelect from "react-timezone-select";
import Workflowthird from "../../../pages/Workflowthird";
import ComposeWork from "../../../pages/ComposeWork";
import DropzoneProgrammatically from "./Dropzonecompose";
import Axios from "axios";
import MediaSidebar from "./sidemodal/MediaSidebar";
import swal from "sweetalert";

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

const colourOptions = [
  { value: "facebook", label: "facebook" },
  { value: "Twittor", label: "Twittor" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "InstaGram", label: "InstaGram" },
  { value: "Google", label: "Google" },
  { value: "Youtube", label: "Youtube" },
];
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
    Addlabeltext: "",
    addLabel: "",
    addLabelurl: "",
    SelectedTimezone: {},
    acceptedfilupload: {},
    Text: "",
    status: "",
    uploadfile: "",
    datetime: "",
    futuretime: "",
    selectedOption: null,
    imageuploadedUrl: "",

    options: [
      { value: "facebook", label: "facebook" },
      { value: "Twittor", label: "Twittor" },
      { value: "LinkedIn", label: "LinkedIn" },
      { value: "InstaGram", label: "InstaGram" },
      { value: "Google", label: "Google" },
      { value: "Youtube", label: "Youtube" },
    ],
  };

  handleCallback = (childData) => {
    console.log(childData);
    this.setState({ imageuploadedUrl: childData });
  };
  onSelect(selectedList, selectedItem) {
    console.log(selectedList);
    const selectItem1 = [];

    for (let i = 0; i < selectedList.length; i++) {
      selectItem1.push(selectedList[i].label);
    }
    console.log("aaaa", selectItem1);

    // this.setState({ selectedOption: selectItem1 });
  }

  onRemove(selectedList, removedItem) {}

  handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
    console.log(this.state.selectedOption);
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

  handleUploadmedia = () => {
    console.log(
      "desc",
      this.state.Text,
      "file",
      this.state.acceptedfilupload,
      "url",
      this.state.addLabelurl,
      "uploaded images id",
      this.state.imageuploadedUrl,
      "label",
      this.state.Addlabeltext,
      "datetime",
      this.state.datetime,
      "futuretime",
      this.state.futuretime,

      "selectedOption",
      this.state.selectedOption
    );
    const alldata = new FormData();
    alldata.append("media_img", this.state.acceptedfilupload);

    alldata.append("url", this.state.addLabelurl);
    alldata.append("uploaded_img", this.state.imageuploadedUrl);
    alldata.append("desc", this.state.Text);
    alldata.append("date", this.state.datetime.split("T")[0]);
    alldata.append("time", this.state.datetime.split("T")[1]);
    alldata.append("label", "63ee0b8e64e3d694a6ec401e");
    // alldata.append("label", this.state.Addlabeltext);
    alldata.append("platform", this.state.selectedOption);

    Axios.post(`http://13.127.168.84:3000/user/add_compose`, alldata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.message == "success") {
          swal("Post Created Sucessfully");
          this.setState({ acceptedfilupload: "" });
          this.setState({ addLabelurl: "" });
          this.setState({ imageuploadedUrl: "" });
          this.setState({ Text: "" });
          this.setState({ datetime: "" });
          this.setState({ Addlabeltext: "" });
          this.setState({ selectedOption: "" });
        }
      });
  };
  onDrop = (acceptedFiles) => {
    this.setState({ acceptedfilupload: acceptedFiles[0] });
    console.log(acceptedFiles[0]);
    if (acceptedFiles.length > 0) {
      this.setState({
        uploadfile: acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      });
    }
    const data = new FormData();
    data.append("media_img", acceptedFiles[0]);

    Axios.post(`http://13.127.168.84:3000/user/upload_media`, data)
      .then((res) => {
        console.log(res.data.data.media_img[0]);
        // this.setState({ imageuploadedUrl: res.data.data.media_img[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const maxSize = 1 * 1024 * 1024;
    return (
      <>
        <Button
          className="btn btn-success ft-1 colotbtn"
          onClick={this.toggleModal}
        >
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
              <Col lg="2">
                <div className=" componylog">
                  <img
                    src={avatar}
                    width="60px"
                    style={{ borderRadius: "10px" }}
                    height="68px"
                    alt="image"
                  />
                </div>
              </Col>
              <Col lg="10">
                <p className="selectSocial">
                  Select Social Media to Upload Post
                </p>

                {/* <Multiselect
                  options={this.state.options} // Options to display in the dropdown
                  selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                  onSelect={this.onSelect} // Function will trigger on select event
                  className="React"
                  onRemove={this.onRemove} // Function will trigger on remove event
                  displayValue="label" // Property name to display in the dropdown options
                /> */}
                <Select
                  defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  value={this.state.selectedOption}
                  name="social Media"
                  onChange={this.handleChange}
                  options={colourOptions}
                  classNamePrefix="select "
                />
              </Col>
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
                  rows="3"
                ></textarea>
              </div>
            </Row>
            <Row className="iconuploads">
              <Col className="colicon" lg="4">
                <span className="d-flex ">
                  {/* <MediaSidebar /> */}
                  <Dropzone
                    title="Add from Media"
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
                    <MediaSidebar parentCallback={this.handleCallback} />
                  </span>
                  <span className="mtsspan">
                    <ImLink
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add URL"
                      color="#7367f0"
                      className="cgcarousel mx-1"
                      size={18}
                      onClick={() => this.setState({ addURl: "url" })}
                    >
                      Add URL
                    </ImLink>
                  </span>
                </span>
              </Col>
              <Col lg="8">
                <small className="labelurl">Add Date and time Here</small>

                <input
                  type="datetime-local"
                  id="Posttime"
                  name="settime"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ datetime: e.target.value });
                  }}
                />
              </Col>
            </Row>
            <Row className="d-flex ">
              {this.state.addURl == "url" ? (
                <>
                  <div className="urlimpu d-flex">
                    <div className="controlinput">
                      <Row>
                        <Col lg="3">
                          <Label className="labelurls ">Enter URL here</Label>
                        </Col>
                        <Col lg="4">
                          <input
                            size="sm"
                            value={this.state.addLabelurl}
                            onChange={(e) =>
                              this.setState({ addLabelurl: e.target.value })
                            }
                            placeholder="https://www.myweb.com"
                            type="url"
                            className=" form-control input-sm"
                          />
                        </Col>
                        <Col lg="2">
                          <div className="btncssadd dfdf">
                            <Button
                              size="sm"
                              onClick={() => this.setState({ addURl: "" })}
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

          <div className="modalfootercompse">
            <Row className="rowofmodalfooter">
              <Col lg="6">
                <span>
                  {/* <div className="dt12">
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
                                                value={this.state.futuretime}
                                                onChange={(e) =>
                                                  this.setState({
                                                    futuretime: e.target.value,
                                                  })
                                                }
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
                                                    value={
                                                      this.state.Addlabeltext
                                                    }
                                                    onChange={(e) =>
                                                      this.setState({
                                                        Addlabeltext:
                                                          e.target.value,
                                                      })
                                                    }
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
                                        />
                                      </div>
                                      <div className="inputcoc">
                                        <Label className="labelnew">
                                          Workspace timezone
                                        </Label>
                                        <p>
                                          <TimezoneSelect
                                            value={this.state.SelectedTimezone}
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
                                    </div>
                                  </div>
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
                      </Dropdown.Menu>
                    </Dropdown>
                  </div> */}
                </span>
              </Col>
              <Col lg="6" className="text-right  mt-3">
                <Button
                  color="primary"
                  size="sm"
                  onClick={this.handleUploadmedia}
                  className="mr-1"
                >
                  Upload
                </Button>

                <Button color="primary" size="sm" onClick={this.toggleModal}>
                  close
                </Button>
              </Col>{" "}
            </Row>
          </div>
        </Modal>
      </>
    );
  }
}
export default ComposeModalGrid;
