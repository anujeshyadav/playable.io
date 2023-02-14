import React from "react";
import { Row, Col, Container } from "reactstrap";
import "../../../../assets/scss/pages/usersocial.scss";
import { Link } from "react-router-dom";
import { CheckCircle, Clock } from "react-feather";
import { BiCommand, BiComment } from "react-icons/bi";
import imgdemo from "../../../../assets/img/pages/graphic-2.png";
import axios from "axios";

class FileGrid extends React.Component {
  state = {
    active: "1",
    post: [],
  };
  componentDidMount() {
    axios
      .get(`http://13.127.168.84:3000/user/history`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ post: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <React.Fragment>
        <>
          <Container>
            <Row>
              {this.state.post !== "" ? (
                <>
                  {this.state.post?.map((value) => (
                    <Col key={value?.id} md="3">
                      <div className="imgbox">
                        <div className="contentimg">
                          <Link>
                            <div className="content-overlay"></div>
                            <img src={value?.mediaUrls} alt="" width="100%" />
                            <div className="content-details fadeIn-bottom">
                              <div className="text-left">
                                <img
                                  src={value?.mediaUrls}
                                  alt=""
                                  className="img-round"
                                />
                              </div>
                              <p className="content-text">
                                {value?.post}
                                {/* Can't have the blues once you taste the greens
                                Guaranteed. Have you tried our Jusco... */}
                              </p>
                              <div className="text-right">
                                <Link>
                                  <CheckCircle size={25} className="gt-1" />
                                </Link>
                                <Link>
                                  <Clock size={25} className="gt-1" />
                                </Link>
                                <Link>
                                  <BiComment size={25} className="gt-1" />
                                  <span className="">5</span>
                                </Link>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  ))}
                </>
              ) : null}
              <Col md="3">
                <div className="imgbox">
                  <div className="contentimg">
                    <Link>
                      <div className="content-overlay"></div>
                      <img src={imgdemo} alt="" width="100%" />
                      <div className="content-details fadeIn-bottom">
                        <div className="text-left">
                          <img src={imgdemo} alt="" className="img-round" />
                        </div>
                        <p className="content-text">
                          Can't have the blues once you taste the greens
                          Guaranteed. Have you tried our Jusco...
                        </p>
                        <div className="text-right">
                          <Link>
                            <CheckCircle size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <Clock size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <BiComment size={25} className="gt-1" />
                            <span className="">5</span>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="imgbox">
                  <div className="contentimg">
                    <Link>
                      <div className="content-overlay"></div>
                      <img src={imgdemo} alt="" width="100%" />
                      <div className="content-details fadeIn-bottom">
                        <div className="text-left">
                          <img src={imgdemo} alt="" className="img-round" />
                        </div>
                        <p className="content-text">
                          Can't have the blues once you taste the greens
                          Guaranteed. Have you tried our Jusco...
                        </p>
                        <div className="text-right">
                          <Link>
                            <CheckCircle size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <Clock size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <BiComment size={25} className="gt-1" />
                            <span className="">5</span>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="imgbox">
                  <div className="contentimg">
                    <Link>
                      <div className="content-overlay"></div>
                      <img src={imgdemo} alt="" width="100%" />
                      <div className="content-details fadeIn-bottom">
                        <div className="text-left">
                          <img src={imgdemo} alt="" className="img-round" />
                        </div>
                        <p className="content-text">
                          Can't have the blues once you taste the greens
                          Guaranteed. Have you tried our Jusco...
                        </p>
                        <div className="text-right">
                          <Link>
                            <CheckCircle size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <Clock size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <BiComment size={25} className="gt-1" />
                            <span className="">5</span>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="imgbox">
                  <div className="contentimg">
                    <Link>
                      <div className="content-overlay"></div>
                      <img src={imgdemo} alt="" width="100%" />
                      <div className="content-details fadeIn-bottom">
                        <div className="text-left">
                          <img src={imgdemo} alt="" className="img-round" />
                        </div>
                        <p className="content-text">
                          Can't have the blues once you taste the greens
                          Guaranteed. Have you tried our Jusco...
                        </p>
                        <div className="text-right">
                          <Link>
                            <CheckCircle size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <Clock size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <BiComment size={25} className="gt-1" />
                            <span className="">5</span>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="imgbox">
                  <div className="contentimg">
                    <Link>
                      <div className="content-overlay"></div>
                      <img src={imgdemo} alt="" width="100%" />
                      <div className="content-details fadeIn-bottom">
                        <div className="text-left">
                          <img src={imgdemo} alt="" className="img-round" />
                        </div>
                        <p className="content-text">
                          Can't have the blues once you taste the greens
                          Guaranteed. Have you tried our Jusco...
                        </p>
                        <div className="text-right">
                          <Link>
                            <CheckCircle size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <Clock size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <BiComment size={25} className="gt-1" />
                            <span className="">5</span>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="imgbox">
                  <div className="contentimg">
                    <Link>
                      <div className="content-overlay"></div>
                      <img src={imgdemo} alt="" width="100%" />
                      <div className="content-details fadeIn-bottom">
                        <div className="text-left">
                          <img src={imgdemo} alt="" className="img-round" />
                        </div>
                        <p className="content-text">
                          Can't have the blues once you taste the greens
                          Guaranteed. Have you tried our Jusco...
                        </p>
                        <div className="text-right">
                          <Link>
                            <CheckCircle size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <Clock size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <BiComment size={25} className="gt-1" />
                            <span className="">5</span>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="imgbox">
                  <div className="contentimg">
                    <Link>
                      <div className="content-overlay"></div>
                      <img src={imgdemo} alt="" width="100%" />
                      <div className="content-details fadeIn-bottom">
                        <div className="text-left">
                          <img src={imgdemo} alt="" className="img-round" />
                        </div>
                        <p className="content-text">
                          Can't have the blues once you taste the greens
                          Guaranteed. Have you tried our Jusco...
                        </p>
                        <div className="text-right">
                          <Link>
                            <CheckCircle size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <Clock size={25} className="gt-1" />
                          </Link>
                          <Link>
                            <BiComment size={25} className="gt-1" />
                            <span className="clr">5</span>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      </React.Fragment>
    );
  }
}

export default FileGrid;
