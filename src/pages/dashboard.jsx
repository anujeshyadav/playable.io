import React from "react";
import "./dashboard.css";
import { Card, CardBody, UncontrolledTooltip, Input, Label } from "reactstrap";
import { AiOutlineStar } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { BiBarChart } from "react-icons/bi";
import { BiListMinus } from "react-icons/bi";
import { AiOutlineSetting, AiFillDelete } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { CgRename } from "react-icons/cg";
// import person1 from "../../../assets/img/portrait/small/avatar-s-1.jpg";
import person1 from "../assets/img/portrait/small/avatar-s-1.jpg";
import person2 from "../assets/img/portrait/small/avatar-s-2.jpg";
import person3 from "../assets/img/portrait/small/avatar-s-3.jpg";
import person4 from "../assets/img/portrait/small/avatar-s-4.jpg";
import person5 from "../assets/img/portrait/small/avatar-s-5.jpg";
import avatar from "../views/images/avatar.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import dummylogo from "./../planable.io/dummylogo.png";
import { Link } from "react-router-dom";

function dashboard() {
  return (
    <>
      <div className="maincolor">
        <div className="section-header container mainbody">
          <div className="row">
            {/* <div className="col-lg-1 col-md-4 col-sm-4"></div> */}
            <div className="col-lg-4 col-md-4 col-sm-4">
              <img
                src={avatar}
                width="50px"
                className="comapnyimng"
                alt="image"
              />
              <span className="mx-1 testingheading">Testing 1</span>
            </div>
            {/* <div className="col-lg-2 col-md-4 col-sm-4">aaa</div> */}
          </div>
          {/* <div className="mainheadernew">
            <div className="margin">
              <div className="row st-01">
                <div className="col-lg-2">
                  <div className="dt1">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        className="combtn dropdown-basic"

                      >
                        <img
                          src={podcast}
                          width="40px"
                          className="comapnyimng"
                          alt="image"
                        />{" "}
                        Sveltose
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropmenitms">
                        <Dropdown.Item
                          className="dropmenuitemss"
                          href="#/action-2"
                        >
                          <BsFillArrowUpCircleFill /> Upgrade
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropmenuitemss"
                          href="#/action-3"
                        >
                          <BiBarChart size={20} /> highlights
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropmenuitemss"
                          href="#/action-3"
                        >
                          <BiListMinus size={20} /> Billing
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropmenuitemss"
                          href="#/action-3"
                        >
                          <AiOutlineSetting size={20} /> Setting
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropmenuitemss"
                          href="#/action-3"
                        >
                          <CgRename size={20} /> Rename Company
                        </Dropdown.Item>
                        <hr />
                        <div className="people">
                          <h6 className="peopletext">PEOPLE</h6>
                        </div>
                        <Dropdown.Item
                          className="dropmenuitemss"
                          href="#/action-3"
                        >
                          <BsPeople size={20} /> Members
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropmenuitemss"
                          href="#/action-3"
                        >
                          <FaRegHandshake className="redfah" size={20} />
                          Invite Collaborations
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="col-lg-2">
                  <Button className="upgradebutton" variant="secondary">
                    <BsFillArrowUpCircleFill /> Upgrade
                  </Button>
                </div>
                <div className="col-lg-2 comtt">
                  <span className="50percentage">
                    <img
                      src={podcast}
                      width="30px"
                      className="comapnyimngsts"
                      alt="image"
                    />
                  </span>
                  <Button className="upgradebuttosnww" variant="secondary">
                    <AiOutlinePlus size={12} />
                    invite
                  </Button>
                </div>
                <div className="col-lg-6 NEWSPACE">
                  <span className="workspacenew">
                    New Workspace{" "}
                    <AiFillPlusSquare size={25} className="plussign" />
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="container mainbody">
          <div className="dashboard-section dashboard-main">
            <hr />
            <section className="tophe">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <div className="card main">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-3 ">
                          <img
                            src={avatar}
                            width="50px"
                            className="comapnyimng"
                            alt="image"
                          />
                        </div>
                        <div className="col-lg-7 ">
                          <div className="row companytitle">
                            <h6 className="comapanyname">Testing 1</h6>
                          </div>
                          <div className="row companytitle">
                            <h6 className="totalpage">1 page</h6>
                          </div>
                        </div>
                        <div className="col-lg-2 ">
                          <AiOutlineStar size={20} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="componlogo">
                          <img
                            className="complogonew"
                            src={dummylogo}
                            style={{ borderRadius: "10px", width: "50px" }}
                          />
                        </div>
                      </div>
                      <div className="bottomhover myDIV">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-4 ">
                            <p className="totalhour "> 2 hr</p>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-8 clickmenu ">
                            <span>
                              <div className="dt12">
                                <Dropdown className="dropdownbtn">
                                  <Dropdown.Toggle
                                    variant="success"
                                    className="combtn dropdown-basic"
                                  >
                                    ...
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="dropmenitms">
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-2"
                                    >
                                      <BsFillArrowUpCircleFill /> Configure
                                      Timeable
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      <BiBarChart size={20} /> Manage Label
                                    </Dropdown.Item>
                                    {/* <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      <BiListMinus size={20} /> Billing
                                    </Dropdown.Item> */}
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      {/* <AiOutlineSetting size={20} /> */}
                                      <BsPeople size={20} />
                                      Manage People
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      <AiOutlineSetting size={20} />
                                      {/* <CgRename size={20} /> */}
                                      Setting
                                    </Dropdown.Item>
                                    <hr />
                                    {/* <div className="people">
                                      <h6 className="peopletext">PEOPLE</h6>
                                    </div> */}
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      {/* <BsPeople size={20} /> */}
                                      <FcApproval size={20} />
                                      Approval setting
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      {/* <FaRegHandshake
                                        className="redfah"
                                        size={20}
                                      /> */}
                                      <AiFillDelete
                                        fill="red"
                                        className="redfah"
                                        size={20}
                                      />
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <div className="card main">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-3 ">
                          <img
                            src={avatar}
                            width="50px"
                            className="comapnyimng"
                            alt="image"
                          />
                        </div>
                        <div className="col-lg-7 ">
                          <div className="row companytitle">
                            <h6 className="comapanyname">testing 2</h6>
                          </div>
                          <div className="row companytitle">
                            <h6 className="totalpage">1 page</h6>
                          </div>
                        </div>
                        <div className="col-lg-2 ">
                          <AiOutlineStar size={20} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="componlogo">
                          <img
                            className="complogonew"
                            src={dummylogo}
                            style={{ borderRadius: "10px", width: "50px" }}
                          />
                        </div>
                      </div>
                      <div className="bottomhover myDIV">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-4 ">
                            <p className="totalhour "> 2 hr</p>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-8 clickmenu ">
                            <span>
                              <div className="dt12">
                                <Dropdown className="dropdownbtn">
                                  <Dropdown.Toggle
                                    variant="success"
                                    className="combtn dropdown-basic"
                                  >
                                    ...
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="dropmenitms">
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-2"
                                    >
                                      <BsFillArrowUpCircleFill /> Configure
                                      Timeable
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      <BiBarChart size={20} /> Manage Label
                                    </Dropdown.Item>
                                    {/* <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      <BiListMinus size={20} /> Billing
                                    </Dropdown.Item> */}
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      {/* <AiOutlineSetting size={20} /> */}
                                      <BsPeople size={20} />
                                      Manage People
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      <AiOutlineSetting size={20} />
                                      {/* <CgRename size={20} /> */}
                                      Setting
                                    </Dropdown.Item>
                                    <hr />
                                    {/* <div className="people">
                                      <h6 className="peopletext">PEOPLE</h6>
                                    </div> */}
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      {/* <BsPeople size={20} /> */}
                                      <FcApproval size={20} />
                                      Approval setting
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropmenuitemss"
                                      href="#/action-3"
                                    >
                                      {/* <FaRegHandshake
                                        className="redfah"
                                        size={20}
                                      /> */}
                                      <AiFillDelete
                                        fill="red"
                                        className="redfah"
                                        size={20}
                                      />
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <Link to="/Workspace">
                    <div className="card main workspace">
                      <div className="card-body">
                        <div className="row justify-content-center plusfign stttt ">
                          <BsPlusCircle size={25} className="plussign" />
                        </div>
                        <div className="row justify-content-center workspace ">
                          Create a workspace
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>

            <div className="bottomspace">
              <div className="bottom">
                <h6>Other workspaces</h6>
                <hr />
                <Link to="/app/usermanage/usersociallist">
                  <div className="row workddd">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div className="card main">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-3 ">
                              <img
                                src={avatar}
                                width="50px"
                                className="comapnyimng"
                                alt="image"
                              />
                            </div>
                            <div className="col-lg-7 ">
                              <div className="row companytitle">
                                <p className="comapanynames">
                                  Sample workspace
                                </p>
                              </div>
                              <div className="row companytitle">
                                <h6 className="totalpage">7 page</h6>
                              </div>
                            </div>
                            <div className="col-lg-2 ">
                              <AiOutlineStar size={20} />
                            </div>
                          </div>
                          <div className="ml-2 uncontrolledimages">
                            <ul className="list-unstyled users-list m-0 d-flex">
                              <li className="avatar pull-up">
                                <img
                                  src={person1}
                                  alt="avatar"
                                  height="30"
                                  width="30"
                                  id="avatar13"
                                />
                                <UncontrolledTooltip
                                  placement="bottom"
                                  target="avatar13"
                                >
                                  Lai Lewandowski
                                </UncontrolledTooltip>
                              </li>
                              <li className="avatar pull-up">
                                <img
                                  src={person2}
                                  alt="avatar"
                                  height="30"
                                  width="30"
                                  id="avatar14"
                                />
                                <UncontrolledTooltip
                                  placement="bottom"
                                  target="avatar14"
                                >
                                  Elicia Rieske
                                </UncontrolledTooltip>
                              </li>
                              <li className="avatar pull-up">
                                <img
                                  src={person3}
                                  alt="avatar"
                                  height="30"
                                  width="30"
                                  id="avatar15"
                                />
                                <UncontrolledTooltip
                                  placement="bottom"
                                  target="avatar15"
                                >
                                  Alberto Glotzbach
                                </UncontrolledTooltip>
                              </li>
                              <li className="avatar pull-up">
                                <img
                                  src={person4}
                                  alt="avatar"
                                  height="30"
                                  width="30"
                                  id="avatar16"
                                />
                                <UncontrolledTooltip
                                  placement="bottom"
                                  target="avatar16"
                                >
                                  George Nordic
                                </UncontrolledTooltip>
                              </li>
                              <li className="avatar pull-up">
                                <img
                                  src={person5}
                                  alt="avatar"
                                  height="30"
                                  width="30"
                                  id="avatar17"
                                />
                                <UncontrolledTooltip
                                  placement="bottom"
                                  target="avatar17"
                                >
                                  Vinnie Mostowy
                                </UncontrolledTooltip>
                              </li>
                              <li className="d-flex align-items-center pl-50">
                                <span className="align-middle">+140 more</span>
                              </li>
                            </ul>
                          </div>
                          <div className="row">
                            <div className="componlogo">
                              {/* <img
                              className="complogonew"
                              src={dummylogo}
                              style={{ borderRadius: "50%", width: "40px" }}
                            />
                            <img
                              className="complogonew"
                              src={dummylogo}
                              style={{ borderRadius: "50%", width: "40px" }}
                            /> */}
                            </div>
                          </div>

                          <p className="totalhour"> 2 hr</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
