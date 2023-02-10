import React, { Component } from "react";
import { FaComment, FaCross, FaDochub } from "react-icons/fa";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { Button, NavLink } from "reactstrap";
import "../../../../assets/scss/pages/usersocial.scss";
import { AiOutlineClose } from "react-icons/ai";
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
// import Button from "react-bootstrap/Button";

const mediaOptions = [
  { value: "First scheduled date", label: "First scheduled date" },
  { value: "Last scheduled date", label: "Last scheduled date" },
  { value: "Recent comments", label: "Recent comments" },
];

export default class SideEventSidebar extends Component {
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false,
    });
  }

  render() {
    return (
      <OffCanvas
        width={350}
        transitionDuration={350}
        effect={"parallax"}
        isMenuOpened={this.state.isMenuOpened}
        position={"right"}
      >
        {/* <Button> Click here</Button> */}
        <div className="kt">
          <Button className="ft-media" onClick={this.handleClick.bind(this)}>
            <Filter size={18} /> Filter
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
            <p>Filter & sort</p>
            <hr></hr>
            <div>
              <p className="mb-1">SORT BY:</p>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={mediaOptions[0]}
                name="color"
                options={mediaOptions}
              />
            </div>
            <hr></hr>
            <div>
              <p>FILTER BY:</p>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="ass-1">
                    <span>
                      <Check size={16} className="mr-1" />
                    </span>
                    Approval Status
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="fil-list">
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <CheckCircle size={14} className="mr" />
                        Approved
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <CheckCircle size={14} className="mr" />
                        Not Approved
                        <span className="ml-1">8</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <CheckCircle size={14} className="mr" />
                        Partially approved
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <CheckCircle size={14} className="mr" />
                        Pending my approval <span className="ml-1">0</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="ass-1">
                    <span>
                      <Clock size={16} className="mr-1" />
                    </span>
                    Post Status
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="fil-list">
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Clock size={14} className="mr" />
                        Scheduled <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Clock size={14} className="mr" />
                        Not scheduled
                        <span className="ml-1">8</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Clock size={14} className="mr" />
                        Published
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Clock size={14} className="mr" />
                        Not published <span className="ml-1">0</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="ass-1">
                    <span>
                      <FaComment size={16} className="mr-1" />
                    </span>
                    Feedback & Activity
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="fil-list">
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <FaComment size={14} className="mr" />
                        Comments <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <FaComment size={14} className="mr" />
                        Internal notes
                        <span className="ml-1">8</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <FaComment size={14} className="mr" />
                        Resolved comments
                        <span className="ml-1">6</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="ass-1">
                    <span>
                      <Bookmark size={16} className="mr-1" />
                    </span>
                    Labels
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="fil-list">
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Bookmark size={14} className="mr" />
                        No label <span className="ml-1">6</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="ass-1">
                    <span>
                      <Calendar size={16} className="mr-1" />
                    </span>
                    Period
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="fil-list">
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Calendar size={14} className="mr" />
                        Today
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Calendar size={14} className="mr" />
                        This wee
                        <span className="ml-1">6</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className="ass-1">
                    <span>
                      <Image size={16} className="mr-1" />
                    </span>
                    Period
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="fil-list">
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Image size={14} className="mr" />
                        Posts
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Image size={14} className="mr" />
                        Stories
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <Image size={14} className="mr" />
                        Reels
                        <span className="ml-1">6</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className="ass-1">
                    <span>
                      <File size={16} className="mr-1" />
                    </span>
                    Content
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="fil-list">
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <File size={14} className="mr" />
                        Images
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <File size={14} className="mr" />
                        Video
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <File size={14} className="mr" />
                        GIF
                        <span className="ml-1">6</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header className="ass-1">
                    <span>
                      <User size={16} className="mr-1" />
                    </span>
                    Author
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="fil-list">
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <User size={14} className="mr" />
                        Madem Madem
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <User size={14} className="mr" />
                        Bryn
                        <span className="ml-1">6</span>
                      </li>
                      <li className="mt-1">
                        <span>
                          <input type="checkbox"></input>
                        </span>
                        <User size={14} className="mr" />
                        Stacey
                        <span className="ml-1">6</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="mt-2">
                <input
                  type="search"
                  placeholder="Search in posts"
                  className="form-control"
                />
              </div>
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
