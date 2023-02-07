import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import avatar from "../images/avatar.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { RiUpload2Line } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { FaShare } from "react-icons/fa";

import {
  Star,
  Truck,
  DollarSign,
  ShoppingCart,
  Heart,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Award,
  Clock,
  Shield,
} from "react-feather";
import * as Icon from "react-feather";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../assets/scss/plugins/extensions/editor.scss";
import { Editor } from "react-draft-wysiwyg";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Breacrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb";
// import Breacrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import classnames from "classnames";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";
import "../../assets/scss/pages/app-ecommerce-shop.scss";

const swiperParams = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1600: {
      slidesPerView: 5,
      spaceBetween: 55,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 55,
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 55,
    },
  },
};
class FacebookPage extends React.Component {
  uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID 7e1c3e366d22aa3");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  state = {
    active: "1",
  };

  toggle = (tab) => {
    if (this.state.active !== tab) {
      this.setState({ active: tab });
    }
  };
  state = {
    selectedColor: 1,
  };
  toggleSelectedColor = (color) => this.setState({ selectedColor: color });
  render() {
    const { editorState } = this.state;
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="FaceBook Post"
          breadCrumbParent="Facebook"
          breadCrumbActive="Post"
        />
        <div className="overflow-hidden app-ecommerce-details bg-white">
          {/* <CardBody className="pb-0"> */}
          <Row className=" mt-2">
            <Col className=" mt-1" sm="12" md="3">
              <fieldset className="st-1">
                <input
                  type="search"
                  placeholder="search"
                  class="form-control"
                />
                <Row className="d-flex justify-content-center mt-2">
                  <AiOutlineFileText size={70} color="#28262961" />
                </Row>
                <Row className="d-flex justify-content-center ">
                  <Button.Ripple
                    className="mr-1 mb-1 mt-2 justify-content-center"
                    color="primary"
                  >
                    <span className="d-flex justify-content-center align-item-center">
                      <AiFillPlusSquare size={18} className="mx-0" />
                      Add account
                    </span>
                  </Button.Ripple>
                </Row>
              </fieldset>
              {/* <img src={macbook} alt="Google Home" height="250" width="250" /> */}
            </Col>

            <Col md="5" sm="12">
              <fieldset className="st-1">
                <h4>
                  <Icon.Edit size={25} color="blue" />
                  <span className="mx-2">New Post</span>
                </h4>
                {/* <p className="text-muted mx-1">by Google</p> */}

                {/* <div
                className={classnames("color-radio color-radio-primary mr-50", {
                  selected: this.state.selectedColor === 1,
                })}
                onClick={() => this.toggleSelectedColor(1)}
              >
                <div className="radio-content"></div>
              </div>
              <div
                className={classnames("color-radio color-radio-success mr-50", {
                  selected: this.state.selectedColor === 2,
                })}
                onClick={() => this.toggleSelectedColor(2)}
              >
                <div className="radio-content"></div>
              </div>
              <div
                className={classnames("color-radio color-radio-danger mr-50", {
                  selected: this.state.selectedColor === 3,
                })}
                onClick={() => this.toggleSelectedColor(3)}
              >
                <div className="radio-content"></div>
              </div>
              <div
                className={classnames("color-radio color-radio-info mr-50", {
                  selected: this.state.selectedColor === 4,
                })}
                onClick={() => this.toggleSelectedColor(4)}
              >
                <div className="radio-content"></div>
              </div>
              <div
                className={classnames("color-radio color-radio-warning mr-50", {
                  selected: this.state.selectedColor === 5,
                })}
                onClick={() => this.toggleSelectedColor(5)}
              >
                <div className="radio-content"></div>
              </div>
              <div
                className={classnames("color-radio color-radio-dark", {
                  selected: this.state.selectedColor === 6,
                })}
                onClick={() => this.toggleSelectedColor(6)}
              >
                <div className="radio-content"></div>
              </div> */}
                <hr />
                {/* <p className="my-50">
                <span>Available</span>
                <span className="mx-50">-</span>
                <span className="text-success">In Stock</span>
              </p> */}
                <div className="action-btns">
                  <Nav tabs className="nav-fill">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.active === "1",
                        })}
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        <Icon.Camera size={15} color="blue" />
                        <span className="mx-1">Media</span>
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
                        <Icon.Link2 size={15} color="blue" />
                        <span className="mx-1">Links</span>
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
                        <Icon.FileText size={15} color="blue" />
                        <span className="mx-1">Text</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <hr />
                  <TabContent activeTab={this.state.active}>
                    <TabPane tabId="1">
                      {/* Candy canes donut chupa chups candy canes lemon drops oat
                    cake wafer. Cotton candy candy canes marzipan carrot cake.
                    Sesame snaps lemon drops candy marzipan donut brownie
                    tootsie roll. Icing croissant bonbon biscuit gummi bears. */}
                      {/* <Row> */}
                      <Editor
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        toolbar={{
                          inline: { inDropdown: true },
                          list: { inDropdown: true },
                          textAlign: { inDropdown: true },
                          link: { inDropdown: true },
                          history: { inDropdown: true },
                          image: {
                            uploadCallback: this.uploadImageCallBack,
                            previewImage: true,
                            alt: { present: true, mandatory: true },
                          },
                        }}
                      />
                      {/* </Row> */}
                      <Row>
                        <Col lg="5">
                          <AiFillFolderOpen size={25} />
                          File-Manager
                        </Col>
                        <Col lg="7" className="d-flex justify-content-center">
                          <span>
                            <RiUpload2Line size={25} />{" "}
                          </span>

                          <input className="fileinput" type="file" />
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      {/* Pudding candy canes sugar plum cookie chocolate cake powder
                    croissant. Carrot cake tiramisu danish candy cake muffin
                    croissant tart dessert. Tiramisu caramels candy canes
                    chocolate cake sweet roll liquorice icing cupcake. */}
                      <Row>
                        <input
                          type="password"
                          class="form-control mb-2"
                          placeholder="Enter Your Link here"
                        />
                      </Row>
                      <Row>
                        {" "}
                        <Editor
                          wrapperClassName="demo-wrapper"
                          editorClassName="demo-editor"
                          toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                            image: {
                              uploadCallback: this.uploadImageCallBack,
                              previewImage: true,
                              alt: { present: true, mandatory: true },
                            },
                          }}
                        />
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <textarea
                        id="w3review"
                        name="w3review"
                        rows="6"
                        // cols="60"
                        className="form-control"
                      />
                    </TabPane>
                  </TabContent>

                  <Button.Ripple
                    className="mr-1 mb-1 mt-2 justify-content-center"
                    color="primary"
                  >
                    {/* <ShoppingCart size={15} /> */}
                    <span className="align-middle ml-50">Post Now</span>
                  </Button.Ripple>
                  {/* <Button.Ripple className="mb-1" color="danger" outline>
                  <Heart size={15} />
                  <span className="align-middle ml-50">WISHLIST</span>
                </Button.Ripple> */}
                </div>
                {/* <div className="d-flex flex-wrap social-media-btns">
                <Button.Ripple
                  className="mr-1 btn-icon rounded-circle"
                  color="primary"
                  outline
                >
                  <Facebook size={15} />
                </Button.Ripple>
                <Button.Ripple
                  className="mr-1 btn-icon rounded-circle"
                  color="info"
                  outline
                >
                  <Twitter size={15} />
                </Button.Ripple>
                <Button.Ripple
                  className="mr-1 btn-icon rounded-circle"
                  color="danger"
                  outline
                >
                  <Youtube size={15} />
                </Button.Ripple>
                <Button.Ripple
                  className="btn-icon rounded-circle"
                  color="primary"
                  outline
                >
                  <Instagram size={15} />
                </Button.Ripple>
              </div> */}
              </fieldset>
            </Col>
            <Col md="4" sm="12">
              <fieldset className="st-1">
                <Card>
                  <Row className="d-flex justify-content-center mt-2">
                    <AiFillFacebook size={40} color="blue" />
                  </Row>
                  <hr />
                  <Row>
                    <Col className="" style={{ width: "100%" }} lg="2">
                      <img className="mt-1 mx-1" width={40} src={avatar} />
                    </Col>
                    <Col lg="10">
                      <Row className="mt-1 mx-1">Anonymous</Row>
                      <Row className=" mx-1">
                        Just now-
                        <span className="">
                          {" "}
                          <BsGlobe width={2} color="grey" />
                        </span>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-left mx-2 mt-2 mb-2">
                    dummy text{" "}
                  </Row>
                  <Row width="100%">
                    <img className=" imagefb " src={avatar} width="100%" />
                  </Row>
                  <hr />
                  <Row className="mx-1 mb-2 d-flex justify-content-center">
                    <Col lg="4" className="">
                      <AiOutlineLike size={20} /> Like
                    </Col>
                    <Col lg="4">
                      <GoCommentDiscussion size={20} /> Comment
                    </Col>
                    <Col lg="4">
                      <FaShare size={20} /> Share
                    </Col>
                  </Row>
                </Card>
              </fieldset>
              {/* <div className="action-btns">
                <Button.Ripple className="mr-1 mb-1" color="primary">
                  <ShoppingCart size={15} />
                  <span className="align-middle ml-50">ADD TO CART</span>
                </Button.Ripple>
                <Button.Ripple className="mb-1" color="danger" outline>
                  <Heart size={15} />
                  <span className="align-middle ml-50">WISHLIST</span>
                </Button.Ripple>
              </div>
              <div className="d-flex flex-wrap social-media-btns">
                <Button.Ripple
                  className="mr-1 btn-icon rounded-circle"
                  color="primary"
                  outline
                >
                  <Facebook size={15} />
                </Button.Ripple>
                <Button.Ripple
                  className="mr-1 btn-icon rounded-circle"
                  color="info"
                  outline
                >
                  <Twitter size={15} />
                </Button.Ripple>
                <Button.Ripple
                  className="mr-1 btn-icon rounded-circle"
                  color="danger"
                  outline
                >
                  <Youtube size={15} />
                </Button.Ripple>
                <Button.Ripple
                  className="btn-icon rounded-circle"
                  color="primary"
                  outline
                >
                  <Instagram size={15} />
                </Button.Ripple>
              </div> */}
            </Col>
          </Row>
          {/* </CardBody> */}
          {/* <Row>
            <Col sm="12">
              <Row className="item-features py-5 mt-5">
                <Col className="text-center" md="4" sm="12">
                  <div className="w-50 mx-auto">
                    <Award className="text-primary mb-1" size={42} />
                    <p className="font-medium-2 text-bold-600 mb-0">
                      100% Original
                    </p>
                    <p>
                      Chocolate bar candy canes ice cream toffee cookie halvah.
                    </p>
                  </div>
                </Col>
                <Col className="text-center" md="4" sm="12">
                  <div className="w-50 mx-auto">
                    <Clock className="text-primary mb-1" size={42} />
                    <p className="font-medium-2 text-bold-600 mb-0">
                      10 Day Replacement
                    </p>
                    <p>Marshmallow biscuit donut dragée fruitcake wafer.</p>
                  </div>
                </Col>
                <Col className="text-center" md="4" sm="12">
                  <div className="w-50 mx-auto">
                    <Shield className="text-primary mb-1" size={42} />
                    <p className="font-medium-2 text-bold-600 mb-0">
                      1 Year Warranty
                    </p>
                    <p>Cotton candy gingerbread cake I love sugar sweet.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row> */}
          {/* <CardBody>
            <Row>
              <Col className="details-page-swiper text-center mt-5" sm="12">
                <div className="heading-section mb-3">
                  <h2 className="text-uppercase mb-50">Related Products</h2>
                  <p>People also search for this items</p>
                </div>
                <Swiper {...swiperParams}>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Beats by Dr. Dre - Powerbeats2 Wireless Earbud
                        Headphones - Black/Red
                      </p>
                      <small>By Dr. Dre</small>
                    </div>
                    <div className="img-container">
                      <img src={watch} alt="watch" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $129
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Apple - Apple Watch Nike+ 42mm Silver Aluminum Case
                        Silver/Volt Nike Sport Band - Silver Aluminum
                      </p>
                      <small>By Apple</small>
                    </div>
                    <div className="img-container">
                      <img src={earphones} alt="earphones" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $399
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Google - Google Home - White/Slate fabric
                      </p>
                      <small>By Google</small>
                    </div>
                    <div className="img-container">
                      <img src={laptop} alt="laptop" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $1999.99
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Amazon - Fire TV Stick with Alexa Voice Remote - Black
                      </p>
                      <small>By Amazon</small>
                    </div>
                    <div className="img-container">
                      <img src={homepod} alt="homepod" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $39.99
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Google - Chromecast Ultra - Black
                      </p>
                      <small>By Google</small>
                    </div>
                    <div className="img-container">
                      <img src={iphoneX} alt="homepod" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $69.99
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Beats by Dr. Dre - Beats EP Headphones - White
                      </p>
                      <small>Beats by Dr. Dre</small>
                    </div>
                    <div className="img-container">
                      <img src={headphones} alt="homepod" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $129.99
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        LG - 40" Class (39.5" Diag.) - LED - 1080p - HDTV -
                        Black
                      </p>
                      <small>by LG</small>
                    </div>
                    <div className="img-container">
                      <img src={mouse} alt="homepod" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $279.99
                    </p>
                  </div>
                </Swiper>
              </Col>
            </Row>
          </CardBody> */}
        </div>
      </React.Fragment>
    );
  }
}
export default FacebookPage;
