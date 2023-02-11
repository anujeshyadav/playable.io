import React from "react";

import { Button, Label, CustomInput, Row, Col } from "reactstrap";

import TimezoneSelect from "react-timezone-select";
import "./ComposeWorkspace.scss";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { history } from "../history";

class Composeworkclass extends React.Component {
  state = {
    SelectedTimezone: {},
  };

  render() {
    return (
      <>
        <div className="dashboard-sectionss dashboard-main">
          <div className="centrr">
            <div className="inputcoc">
              <Label className="labelnew">Workspace name</Label>
              <input
                required
                type="text"
                id="fname"
                placeholder="Nutella"
                className="form-control"
                //   value={workspace}
                //   onChange={(e) => setWorkspace(e.target.value)}
              />
            </div>
            <div className="inputcoc">
              <Label className="labelnew">Workspace timezone</Label>
              <p>
                <TimezoneSelect
                  value={this.state.SelectedTimezone}
                  //   onChange={setSelectedTimezone}
                  onChange={this.setState.SelectedTimezone}
                />
              </p>
            </div>
            <Row>
              <Col lg="6">
                {" "}
                <div className="create"> Create new posts as internal</div>
              </Col>
              <Col lg="6">
                <CustomInput
                  className="custom-switch-success mr-1 mb-2"
                  type="switch"
                  id="success"
                  name="success"
                  inline
                ></CustomInput>
              </Col>
            </Row>
            <Row>
              <div className="composetext">
                <p>
                  {" "}
                  Remove workspace Remove this workspace and erase all data
                  (posts, comments, pages etc.). This action is irreversible.
                </p>
              </div>
            </Row>
            {/* <div onClick={handlelogin} className="inputcoc intutbtn"></div> */}
          </div>
        </div>
      </>
    );
  }
}

export default Composeworkclass;
