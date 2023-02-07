import React from "react";
import { Card, CardBody, Input, Label } from "reactstrap";

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

class ComposeModalGrid extends React.Component {
  state = {
    modal: false,
    addURl: "",
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
                {/* <AiOutlineFileGif
                  color="green"
                  className="aioutline mx-1"
                  size={30}
                /> */}
                <span>
                  <Dropzonecompose />
                </span>
                <AiFillFolderAdd
                  data-placement="top"
                  title="  Add GIF"
                  color="#878721d9"
                  className="aifillfolderas mx-1"
                  size={35}
                >
                  Add GIF
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
            <Row>
              {this.state.addURl == "url" ? (
                <>
                  <div className="urlimpu">
                    <div className="controlinput">
                      <Label className="labelurl">Enter URL here</Label>
                      <input
                        placeholder="https://www.myweb.com"
                        type="url"
                        className="inputurlinput form-control"
                      />
                      <div className="btncssadd">
                        <Button className="linksubmitbtn" color="success">
                          Ok
                        </Button>
                        <Button
                          onClick={() => this.setState({ addURl: "" })}
                          className="linksubmitbtn btnsdanger"
                          color="danger"
                        >
                          cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </Row>
            {/* <Row>
              <Button
                style={{ position: "absolute" }}
                color="primary"
                id="UncontrolledExample"
              >
                Controlled
              </Button>
              <UncontrolledTooltip
                style={{ position: "relative" }}
                placement="top"
                target="UncontrolledExample"
              >
                Hello Worldddddddddddd !
              </UncontrolledTooltip>
            </Row> */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Accept
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default ComposeModalGrid;
