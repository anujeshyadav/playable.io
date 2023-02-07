import React from "react";
import { Row, Col, Card, CardBody, FormGroup, Input, Label } from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import demoimg from "../../../assets/img/pages/demo-img.png";
import "../../../assets/scss/pages/filemanager.scss";
import {
  Delete,
  Edit,
  Eye,
  Filter,
  Image,
  Search,
  Trash,
  Video,
} from "react-feather";
import { Progress } from "reactstrap";
import { Link } from "react-router-dom";

class FileManagerList extends React.Component {
  handleFileUpload = (event) => {
    console.log(event.target.files[0].name);
  };

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="File Manager"
          breadCrumbParent="Home"
          breadCrumbActive="File Manager"
        />
        <Card>
          <CardBody>
            <Row>
              <Col lg="12">
                <div className="text-right mb-2">
                  <input
                    ref="fileInput"
                    onChange={this.handleFileUpload}
                    type="file"
                    style={{ display: "none" }}
                    // multiple={false}
                  />
                  <button
                    onClick={() => this.refs.fileInput.click()}
                    className="btn btn-success"
                  >
                    Upload File
                  </button>
                  <button className="btn btn-primary ml-1">Select All</button>
                  <button className="btn ">
                    <Trash size={22} className="icolor-3" />
                  </button>
                </div>
              </Col>
              <Col md="8">
                <Row>
                  <Col md="4">
                    <div className="file-1 mb-2">
                      <div className="img-box">
                        <img src={demoimg} alt="" width="100%" />
                        <div className="text-box">
                          <form>
                            <input type="checkbox" className="chk-1"></input>
                          </form>
                          <Link>
                            <Eye size={22} className="icolor-2" />
                          </Link>
                          <Link>
                            <Edit size={22} className="icolor-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="file-1 mb-2">
                      <div className="img-box">
                        <img src={demoimg} alt="" width="100%" />
                        <div className="text-box">
                          <form>
                            <input type="checkbox" className="chk-1"></input>
                          </form>
                          <Link>
                            <Eye size={22} className="icolor-2" />
                          </Link>
                          <Link>
                            <Edit size={22} className="icolor-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="file-1 mb-2">
                      <div className="img-box">
                        <img src={demoimg} alt="" width="100%" />
                        <div className="text-box">
                          <form>
                            <input type="checkbox" className="chk-1"></input>
                          </form>
                          <Eye size={22} className="icolor-2" />
                          <Edit size={22} className="icolor-2" />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="file-1 mb-2">
                      <div className="img-box">
                        <img src={demoimg} alt="" width="100%" />
                        <div className="text-box">
                          <form>
                            <input type="checkbox" className="chk-1"></input>
                          </form>
                          <Eye size={22} className="icolor-2" />
                          <Edit size={22} className="icolor-2" />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="file-1 mb-2">
                      <div className="img-box">
                        <img src={demoimg} alt="" width="100%" />
                        <div className="text-box">
                          <form>
                            <input type="checkbox" className="chk-1"></input>
                          </form>
                          <Eye size={22} className="icolor-2" />
                          <Edit size={22} className="icolor-2" />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="file-1 mb-2">
                      <div className="img-box">
                        <img src={demoimg} alt="" width="100%" />
                        <div className="text-box">
                          <form>
                            <input type="checkbox" className="chk-1"></input>
                          </form>
                          <Eye size={22} className="icolor-2" />
                          <Edit size={22} className="icolor-2" />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="file-1 mb-2">
                      <div className="img-box">
                        <img src={demoimg} alt="" width="100%" />
                        <div className="text-box">
                          <form>
                            <input type="checkbox" className="chk-1"></input>
                          </form>
                          <Eye size={22} className="icolor-2" />
                          <Edit size={22} className="icolor-2" />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="file-1 mb-2">
                      <div className="img-box">
                        <img src={demoimg} alt="" width="100%" />
                        <div className="text-box">
                          <form>
                            <input type="checkbox" className="chk-1"></input>
                          </form>
                          <Eye size={22} className="icolor-2" />
                          <Edit size={22} className="icolor-2" />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="4">
                <div className="right-side">
                  <h4>
                    <Filter size={16} className="mr-1" /> Filter Media
                  </h4>
                  <form className="mt-2">
                    <FormGroup className="position-relative">
                      <Input
                        className="search-product"
                        placeholder="Enter keywork..."
                      />
                      <div className="form-control-position">
                        <Search size={22} />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label>Media Type</Label>
                      <Input
                        type="select"
                        className="mt-1"
                        name="select"
                        id="exampleSelect"
                      >
                        <option>--All Media--</option>
                        <option>Nightcrawler</option>
                        <option>Donnie Darko</option>
                      </Input>
                    </FormGroup>
                  </form>

                  <div>
                    <h4> Media info</h4>
                    <p className="mt-1">20MB / 100MB</p>
                    <Progress className="progress-lg" value="25" color="danger">
                      25%
                    </Progress>
                  </div>

                  <div className="file-list mb-1">
                    <div className="file-img">
                      <Image size={25} />
                    </div>
                    <div className="file-content">
                      <h4>Images</h4>
                      <small>23 files</small>
                      <span>12MB</span>
                    </div>
                  </div>
                  <div className="file-list mb-1">
                    <div className="file-img">
                      <Video size={25} />
                    </div>
                    <div className="file-content">
                      <h4>Videos</h4>
                      <small>23 files</small>
                      <span>12MB</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default FileManagerList;
