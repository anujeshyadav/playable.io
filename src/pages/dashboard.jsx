import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { Card, CardBody, UncontrolledTooltip, Input, Label } from "reactstrap";
import { AiOutlineStar } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import Moment from "react-moment";
import "moment-timezone";
import { BiBarChart } from "react-icons/bi";
import { BiListMinus } from "react-icons/bi";
import { AiOutlineSetting, AiFillDelete } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { CgRename } from "react-icons/cg";
import * as moment from "moment";
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
import axios from "axios";

const Dashboard = () => {
  const handledelete = (id) => {
    axios
      .get(`http://13.127.168.84:3000/user/dlt_workspace/${id}`)
      .then((resp) => {
        if (resp.data.message == "deleted") {
          setDatadelete(true);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const [datadelete, setDatadelete] = useState(false);
  const [data, setData] = useState([]);

  const login = (response) => {
    console.log(response);
    if (response.status === "connected") {
      // Logged into your webpage and Facebook.
    } else {
      // The person is not logged into your webpage or we are unable to tell.
    }
  };

  useEffect(() => {
    axios
      .get("http://13.127.168.84:3000/user/workSpace_list")
      .then((resp) => {
        console.log(resp.data.data);
        setData(resp.data.data);
        setDatadelete(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [datadelete]);
  return (
    <>
      <div className="maincolor">
        <div className="section-header container mainbody">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <img
                src={avatar}
                width="50px"
                className="comapnyimng"
                alt="image"
              />
              <span className="mx-1 testingheading">Testing 1</span>
            </div>
          </div>
        </div>
        <div className="container mainbody">
          <div className="dashboard-section dashboard-main">
            <hr />
            <section className="tophe">
              <div className="row">
                {data?.map((value) => (
                  <div
                    key={value._id}
                    className="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                  >
                    <div className="card main">
                      <div className="card-body">
                        <Link
                          // onClick={()=> }
                          to={`/app/usermanage/usersociallist/${value?._id}`}
                          // to={`/app/usermanage/usersociallist/${value?._id}`}
                        >
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
                                <h6 className="comapanyname">
                                  {value.workspacename}
                                </h6>
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
                                style={{
                                  borderRadius: "10px",
                                  width: "50px",
                                }}
                              />
                            </div>
                          </div>
                        </Link>
                        <div className="bottomhover myDIV">
                          <div className="row">
                            <div className="col-lg-5 col-md-4 col-sm-4 ">
                              <p className="totalhour ">
                                {/* {value.createdAt.split("T")[1].slice(0, 5)} */}
                                <Moment format="ll">{value?.createdAt}</Moment>
                              </p>
                            </div>
                            <div className="col-lg-7 col-md-8 col-sm-8 clickmenu ">
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
                                      <Dropdown.Item
                                        className="dropmenuitemss"
                                        href="#/action-3"
                                      >
                                        <BsPeople size={20} />
                                        Manage People
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        className="dropmenuitemss"
                                        href="#/action-3"
                                      >
                                        <AiOutlineSetting size={20} />
                                        Setting
                                      </Dropdown.Item>
                                      <hr />
                                      <Dropdown.Item
                                        className="dropmenuitemss"
                                        href="#/action-3"
                                      >
                                        <FcApproval size={20} />
                                        Approval setting
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={() => {
                                          handledelete(value._id);
                                        }}
                                        className="dropmenuitemss"
                                        href="#/action-3"
                                      >
                                        <AiFillDelete
                                          key={value._id}
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
                ))}

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
              <div>
                {/* <div
                  onclick={login}
                  class="fb-login-button"
                  data-width="480px"
                  data-size=""
                  data-button-type=""
                  data-layout=""
                  data-auto-logout-link="false"
                  data-use-continue-as="false"
                ></div> */}
              </div>
              <div className="bottom">
                <h6>Other workspaces</h6>
                <hr />
                {/* this id is statice because no other workspace we have */}
                <Link
                  to={`/app/usermanage/usersociallist/63eca19d06c31e6403f218b7`}
                >
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
};

export default Dashboard;
