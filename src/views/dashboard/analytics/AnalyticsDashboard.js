import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import SalesCard from "./SalesCard";
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained";
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived";
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions";
import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker";
import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders";
import SalesStat from "../../ui-elements/cards/analytics/Sales";
import ActivityTimeline from "./ActivityTimeline";
import DispatchedOrders from "./DispatchedOrders";
import "../../../assets/scss/pages/dashboard-analytics.scss";
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";

import { ListGroup, ListGroupItem } from "reactstrap";
import {
  Activity,
  BarChart,
  Cpu,
  Facebook,
  Instagram,
  Linkedin,
  Server,
  Twitter,
  Youtube,
} from "react-feather";
//import { history } from "../../../history";
//import { logoutWithJWT } from "../../../redux/actions/auth/loginActions";
import { connect } from "react-redux";
import { Award } from "react-feather";
import { Link } from "react-router-dom";
let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff";

class AnalyticsDashboard extends React.Component {
  componentDidMount() {
    // history.push("/pages/login");
    console.log(this.props.dispatch);
    // const { dispatch } = this.props;
    // dispatch(logoutWithJWT());
  }
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col md="3">
            <Card>
              <CardBody>
                <ListGroup className="mt-1">
                  <ListGroupItem>
                    <Link>
                      <p className="float-left mb-0 mr-1">
                        <Facebook size={16} />
                      </p>
                      <span>
                        Facebook
                        <small className="">(Report)</small>
                      </span>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link>
                      <p className="float-left mb-0 mr-1">
                        <Twitter size={16} />
                      </p>
                      <span>
                        Twitter
                        <small className="">(Report)</small>
                      </span>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link>
                      <p className="float-left mb-0 mr-1">
                        <Instagram size={16} />
                      </p>
                      <span>
                        Instagram
                        <small className="">(Report)</small>
                      </span>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link>
                      <p className="float-left mb-0 mr-1">
                        <Linkedin size={16} />
                      </p>
                      <span>
                        Linkedin
                        <small className="">(Report)</small>
                      </span>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link>
                      <p className="float-left mb-0 mr-1">
                        <Youtube size={16} />
                      </p>
                      <span>
                        Youtube
                        <small className="">(Report)</small>
                      </span>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link>
                      <p className="float-left mb-0 mr-1">
                        <Instagram size={16} />
                      </p>
                      <span>
                        Instagram
                        <small className="">(Report)</small>
                      </span>
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="9">
            <Row>
              <Col md="12">
                <h4>
                  <BarChart size={16} />
                  All report
                </h4>
                <SuberscribersGained />
              </Col>

              <Col lg="4" sm="6" className="mt-2">
                <StatisticsCard
                  hideChart
                  iconRight
                  iconBg="success"
                  icon={<Cpu className="success" size={22} />}
                  stat="8"
                  statTitle="Successed"
                />
              </Col>
              <Col lg="4" sm="6" className="mt-2">
                <StatisticsCard
                  hideChart
                  iconRight
                  iconBg="warning"
                  icon={<Server className="warning" size={22} />}
                  stat="12"
                  statTitle="Failed"
                />
              </Col>
              <Col lg="4" sm="6" className="mt-2">
                <StatisticsCard
                  hideChart
                  iconRight
                  iconBg="primary"
                  icon={<Activity className="primary" size={22} />}
                  stat="40"
                  statTitle="Total"
                />
              </Col>
              {/* <Col md="4">
                <div className="stats mt-2 bg-a">
                  <h2>0</h2>
                  <h5>Successed</h5>
                </div>
              </Col>
              <Col md="4">
                <div className="stats mt-2 bg-b">
                  <h2>0</h2>
                  <h5>Failed</h5>
                </div>
              </Col>
              <Col md="4">
                <div className="stats mt-2 bg-c">
                  <h2>0</h2>
                  <h5>Total</h5>
                </div>
              </Col> */}
            </Row>
          </Col>
        </Row>
        {/* <Row className="match-height">
          <Col lg="6" md="12">
            <SalesCard />
          </Col>
          <Col lg="3" md="6" sm="12">
            <SuberscribersGained />
          </Col>
          <Col lg="3" md="6" sm="12">
            <OrdersReceived />
          </Col>
        </Row>
        <Row className="match-height">
          <Col md="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col md="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row> */}
      </React.Fragment>
    );
  }
}

export default connect(null)(AnalyticsDashboard);
