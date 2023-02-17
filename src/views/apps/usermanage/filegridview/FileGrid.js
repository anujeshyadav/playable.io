import React from "react";
import { Row, Col, Container } from "reactstrap";
import "../../../../assets/scss/pages/usersocial.scss";
import { Link } from "react-router-dom";
import { CheckCircle, Clock } from "react-feather";
import { BiCommand, BiComment } from "react-icons/bi";
import imgdemo from "../../../../assets/img/pages/graphic-2.png";
import axiosConfig from "../../../../configs/axiosConfig";

class FileGrid extends React.Component {
  state = {
    // isLoading: false,
    post: [],
  };
  componentDidMount() {
    axiosConfig
      .get(`/user/get_compose`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ post: res.data.data });
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
                    <Col key={value?._id} md="3">
                      <div className="imgbox">
                        <div className="contentimg">
                          <Link>
                            <div className="content-overlay"></div>
                            <img
                              src={value?.media_img[0]}
                              alt=""
                              style={{ borderRadius: "10px" }}
                              height="230px"
                              width="100%"
                            />
                            <div className="content-details fadeIn-bottom">
                              <div className="text-left">
                                <img
                                  height="230px"
                                  width="100%"
                                  src={value?.media_img[0]}
                                  alt=""
                                  className="img-round"
                                />
                              </div>
                              <p className="content-text">{value?.desc}</p>
                              <div className="text-right">
                                <Link>
                                  <CheckCircle size={25} className="gt-1" />
                                </Link>
                                <Link>
                                  <Clock size={25} className="gt-1" />
                                </Link>
                                <Link>
                                  <BiComment size={25} className="gt-1" />
                                  <span className="op-1">5</span>
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
            </Row>
          </Container>
        </>
      </React.Fragment>
    );
  }
}

export default FileGrid;
