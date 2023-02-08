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

import { BsStopwatch } from "react-icons/bs";

import { BiBarChart } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

import { BsPeople } from "react-icons/bs";

import { Edit } from "react-feather";
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
const collapseItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy.",
  },
];

class ComposeModalGrid extends React.Component {
  state = {
    modal: false,
    addURl: "",
    collapseID: "",
  };
  toggleCollapse = (collapseID) => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
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
                  cols="70"
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
                  size={35}
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
                <select className="custom-select ">
                  <option className="firstitme mt-2 mb-2">
                    Select Date and time
                  </option>

                  <option value="fa fa-bell" class="fa">
                    &#xf0f3; bell
                  </option>
                  <option value="fa fa-bookmark" class="fa">
                    &#xf02e; bookmark
                  </option>
                  <option value="fa fa-building" class="fa">
                    &#xf1ad; building
                  </option>
                </select>

                <span>
                  <div className="dt12">
                    <Dropdown className="dropdownbtn">
                      <Dropdown.Toggle
                        variant="success"
                        className="combtn dropdown-basic"
                      >
                        <BsStopwatch size={25} />
                        <span className="mx-1">Select Date and time</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropmenitms">
                        <Dropdown.Item className="dropmenuitemss">
                          <BsStopwatch size={25} />
                          <span className="mx-1">Tomorrow</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropmenuitemss">
                          <BsStopwatch size={25} />
                          <span className="mx-1">Monday</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropmenuitemss">
                          <BsStopwatch size={20} />
                          <span className="mx-1">Day after Tomarrow</span>
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item className="dropmenuitemss">
                          <SlCalender size={25} />
                          <span className="mx-1">
                            Select a Custom -Date
                          </span>{" "}
                        </Dropdown.Item>
                        <Dropdown.Item className="dropmenuitemss">
                          <BiBarChart size={20} /> Set a Preffered Time
                        </Dropdown.Item>

                        <Dropdown.Item className="dropmenuitemss">
                          <BsPeople size={20} />
                          Change Workspace time Zone
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </span>
              </Col>
              <Col lg="2">
                <Button color="primary" onClick={this.toggleModal}>
                  Accept
                </Button>{" "}
              </Col>
              <Col lg="2">
                <Button color="primary" onClick={this.toggleModal}>
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
