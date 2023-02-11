import React, { useState } from "react";
import { Button, Label } from "reactstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

import { AiFillCloseCircle } from "react-icons/ai";
import TimezoneSelect from "react-timezone-select";
import "./workshpace.css";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { history } from "../history";

function Workspace() {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [workspace, setWorkspace] = useState("");
  // console.log(selectedTimezone);
  const handlelogin = (e) => {
    e.preventDefault();
    console.log(workspace, selectedTimezone?.label);
    if (workspace !== "" && selectedTimezone !== undefined) {
      axios
        .post(`http://13.127.168.84:3000/user/createWorkSpace`, {
          workspacename: workspace,
          timezone: selectedTimezone?.label,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message == "success") {
            history.push(`/workspaceone/${res.data.data._id}`);

            // this.props.history.push(`/workspaceone/${res.data.data._id}`);
          }
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.data.message == "already exists") {
            swal("Workspace already exist with This Name");
          }
        });
    } else swal("Enter Details First");

    // to="/workspaceone"
  };
  return (
    <div>
      <div className="row cancelbtn">
        <span>
          <Link to="/dashboard">
            <AiFillCloseCircle size={35} />
          </Link>
        </span>
      </div>
      <div className="dashboard-sectionss dashboard-main">
        <div className="container">
          <div className="workspace">
            <h3>Create a workspace</h3>
          </div>

          <p className="parawork">
            A workspace is a group of social media channels and collaborators, a
            place where you can organize your campaigns, workflows and assets.
          </p>
        </div>
        <div className="centrr">
          <div className="inputcoc">
            <Label className="labelnew">Workspace name</Label>
            <input
              required
              type="text"
              id="fname"
              placeholder="Nutella"
              className="form-control"
              value={workspace}
              onChange={(e) => setWorkspace(e.target.value)}
            />
          </div>
          <div className="inputcoc">
            <Label className="labelnew">Workspace timezone (optional)</Label>
            <p>
              <TimezoneSelect
                required
                // defaultInputValue="(GMT-7:00) Mountain Time"
                value={selectedTimezone}
                onChange={setSelectedTimezone}
              />
            </p>
          </div>
          <div onClick={handlelogin} className="inputcoc intutbtn">
            <Link
            // to="/workspaceone"
            >
              <div className="btnnextform">
                <Button className="btnnext">
                  <span className="nextvtn">
                    Next <AiOutlineArrowRight size={15} />
                  </span>
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
