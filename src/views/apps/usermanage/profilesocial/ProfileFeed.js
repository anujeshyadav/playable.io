import React from "react";
import { Row, Col, Button, Spinner } from "reactstrap";
import TwitterFeed from "./TwitterFeeds";
import Posts from "./PostsFeed";
import "../../../../assets/scss/pages/users-profile.scss";
import ProfileHeaderFeed from "./ProfileHeaderFeed";
import AboutCardFeed from "./AboutCardFeed";
import SuggestedPagesFeed from "./SuggestedPagesFeed";
import LatestPhotosFeed from "./LatestPhotosFeed";
import SuggestionsFeed from "./SuggestionsFeed";
// import PollsFeed from "./PollsFeed"

class ProfileFeed extends React.Component {
  state = {
    isLoading: false,
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
                <TwitterFeed className="mt-2" />
                <SuggestedPagesFeed className="mt-2" />
              </Col>
              <Col lg="6" md="12">
                <Posts />
              </Col>
              <Col lg="3" md="12">
                <LatestPhotosFeed />
                <SuggestionsFeed />
                {/* <PollsFeed /> */}
              </Col>
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
