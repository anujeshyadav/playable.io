import React from "react";
import { Col, Row } from "reactstrap";
import "./login.css";
import logo from "./logo.svg";

function login() {
  return (
    <div>
      <Row>
        <Col className="loginleftbar text-center" lg="4">
          <Row className="imageleft">
            <img className="imagelogo" src={logo} alt="image" />
          </Row>
          {/* <img src={logo} alt="image" /> */}
          <Row className=" justify-content-center">
            <h2 class="sidebar-title">We’ve just added TikTok!</h2>
          </Row>
          <Row className="loginlefttext">
            <span>
              You can now create, plan, and collaborate on your TikTok content
              with Planable. And with 1 billion monthly active users, you
              should. Connect your accounts to get started.
            </span>
          </Row>
          <Row className="learnmore">
            <h6 className="learnmoretext">Learn More</h6>
          </Row>
        </Col>
        <Col className="loginRightbar" lg="8">
          <Row>
            <div>
              <span className="accountnot">Don't have an account?</span>
              <span className="accontnot">
                <button type="button" class="btn btn-light">
                  Sign up
                </button>
              </span>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default login;
