import React, { Component } from "react";
import { FaComment, FaCross, FaDochub } from "react-icons/fa";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { Button, Col, NavLink, Row } from "reactstrap";
import "../../../../assets/scss/pages/usersocial.scss";
import Dropzone from "react-dropzone";
import { FcAddImage } from "react-icons/fc";

import { AiOutlineClose } from "react-icons/ai";
import imgdemo from "../../../../assets/img/pages/graphic-2.png";

import {
  Bookmark,
  Calendar,
  Check,
  CheckCircle,
  Clock,
  File,
  Filter,
  Image,
  User,
} from "react-feather";
import Select from "react-select";
import Accordion from "react-bootstrap/Accordion";
import { FcGallery } from "react-icons/fc";
import axios from "axios";

// import Button from "react-bootstrap/Button";
import DropZone from "../DropZone";

const mediaOptions = [
  { value: "First scheduled date", label: "First scheduled date" },
  { value: "Last scheduled date", label: "Last scheduled date" },
  { value: "Recent comments", label: "Recent comments" },
];

export default class MediaSidebar extends Component {
  state = {
    uploadfile: "",
  };
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false,
    });
  }
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
      <OffCanvas
        width={380}
        transitionDuration={370}
        effect={"parallax"}
        isMenuOpened={this.state.isMenuOpened}
        position={"right"}
      >
        {/* <Button> Click here</Button> */}
        <div className="kt">
          {/* <Button className="ft-media" onClick={this.handleClick.bind(this)}>
            <Filter size={18} /> Filter
          </Button> */}
          <Button onClick={this.handleClick.bind(this)} className="ft-filter">
            <FcGallery size={25} className="mr-i" color="blue" />
          </Button>
        </div>
        <OffCanvasBody
          className=""
          // className={styles.bodyClass}
          style={{ fontSize: "30px" }}
        ></OffCanvasBody>
        <OffCanvasMenu className="side-off">
          <div className="text-right">
            <Button onClick={this.handleClick.bind(this)} className="bt-cls">
              {" "}
              <AiOutlineClose size={25} />
            </Button>
          </div>
          <div className="sidenav-content text-left">
            <div className="main-text ">
              <Row>
                <h4 className="mx-4">Upload Your Media</h4>
                <Col md="12">
                  <div className="mt-4">
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
                          <h2>Add Your Image</h2>
                          <FcAddImage
                            data-placement="top"
                            title="Add images,GIF & video"
                            // onClick={open}
                            color="green"
                            id="fcadd"
                            size={45}
                          >
                            {" "}
                            Add Images & video
                          </FcAddImage>
                          <hr />

                          {/* {this.state.uploadfile ? (
                            <p>Selected file: {this.state.uploadfile}</p>
                          ) : null} */}
                        </div>
                      )}
                    </Dropzone>
                  </div>
                </Col>
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
                    <Col md="6" className="mb-2">
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
                    <Col md="6" className="mb-2">
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
                    <Col md="6" className="mb-2">
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
                    <Col md="6" className="mb-2">
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
                    <Col md="6" className="mb-2">
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
                    <Col md="6" className="mb-2">
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
                    <Col md="6" className="mb-2">
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
                    <Col md="6" className="mb-2">
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
                    <Col md="6" className="mb-2">
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
                    <Col md="6" className="mb-2">
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
          </div>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}