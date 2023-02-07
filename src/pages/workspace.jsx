import React from "react";
import { Button, Label } from "reactstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

import "./workshpace.css";
import { Link } from "react-router-dom";

function workspace() {
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
              type="text"
              id="fname"
              placeholder="Nutella"
              className="form-control"
            />
          </div>
          <div className="inputcoc">
            <Label className="labelnew">Workspace timezone (optional)</Label>
            <p>
              <select className="wide form-control">
                <option className="valuesofsle" value="india">
                  India
                </option>
                <option className="valuesofsle" value="italy">
                  Italy
                </option>
                <option className="valuesofsle" value="spain">
                  Spain
                </option>
                <option className="valuesofsle" value="france">
                  France
                </option>
                <option className="valuesofsle" value="brazil">
                  Brazil
                </option>
                <option className="valuesofsle" value="india">
                  India
                </option>
                <option className="valuesofsle" value="italy">
                  Italy
                </option>
                <option className="valuesofsle" value="spain">
                  Spain
                </option>
              </select>
            </p>
          </div>
          <div className="inputcoc intutbtn">
            <Link to="/workspaceone">
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

export default workspace;
