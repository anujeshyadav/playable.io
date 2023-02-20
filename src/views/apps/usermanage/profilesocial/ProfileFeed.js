import React from "react";
import { Row, Col, Button, Spinner } from "reactstrap";

import Posts from "./PostsFeed";
import "../../../../assets/scss/pages/users-profile.scss";
import ProfileHeaderFeed from "./ProfileHeaderFeed";
import AboutCardFeed from "./AboutCardFeed";

import axiosConfig from "../../../../configs/axiosConfig";
// import PollsFeed from "./PollsFeed"

class ProfileFeed extends React.Component {
  state = {
    isLoading: false,
    post: [],
  };

  toggleLoading = () => {
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  };
  componentDidMount() {
    axiosConfig
      .get(`/user/get_compose`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({ post: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div id="user-profile">
          <Row>
            <Col sm="12">
              <ProfileHeaderFeed className="mb-3" />
            </Col>
          </Row>
          <div id="profile-info" className="mt-3">
            <Row>
              <Col lg="3" md="12">
                <AboutCardFeed className="mt-2" />
              </Col>
              <Col lg="6" md="12">
                <Posts />
              </Col>
              <Col lg="3" md="12"></Col>
            </Row>
            <Row>
              <Col sm="12" className="text-center">
                <Button.Ripple
                  color="primary"
                  onClick={this.toggleLoading}
                  className={`${
                    this.state.isLoading ? "btn-loading" : ""
                  } btn-load`}
                >
                  <Spinner color="primary" />
                  Load More
                </Button.Ripple>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileFeed;
