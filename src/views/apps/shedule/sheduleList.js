import React from "react";
import {
  Row,
  Col,
  CardBody,
  Card,
  Button,
  Spinner,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

import "../../../assets/scss/pages/faq.scss";
// import "../../../assets/scss/pages/schedule.scss";
import Calendar from "../calendar/Calendar";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Delete,
  Facebook,
  Filter,
  Instagram,
  Linkedin,
  Search,
  StopCircle,
  Twitter,
  Youtube,
} from "react-feather";
import Select from "../../forms/form-elements/select/Select";

class SheduleList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Shedule"
          breadCrumbParent="Home"
          breadCrumbActive="Shedule"
        />
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col md="4">
                    <Card>
                      <CardBody className="gh">
                        <FormGroup className="position-relative">
                          <Input
                            className="search-product"
                            placeholder="Search Here..."
                          />
                          <div className="form-control-position">
                            <Search size={22} />
                          </div>
                        </FormGroup>
                        <ListGroup className="mt-1">
                          <ListGroupItem>
                            <Link>
                              <p className="float-left mb-0 mr-1">
                                <Spinner style={{ width: 14, height: 14 }} />
                              </p>
                              <span>Queue</span>
                            </Link>
                          </ListGroupItem>
                          <ListGroupItem>
                            <Link>
                              <p className="float-left mb-0 mr-1">
                                <CheckCircle size={16} />
                              </p>
                              <span>Published</span>
                            </Link>
                          </ListGroupItem>
                          <ListGroupItem>
                            <Link>
                              <p className="float-left mb-0 mr-1">
                                <StopCircle size={16} />
                              </p>
                              <span>Unpublished</span>
                            </Link>
                          </ListGroupItem>
                          <div className="brd">
                            <h5 className="pl-2">
                              {" "}
                              <Filter size={16} className="mr-1" />
                              SCHEDULES OF
                            </h5>
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
                          </div>
                          <div className="brd">
                            <h5 className="pl-2">
                              {" "}
                              <Delete size={16} className="mr-1" />
                              DELETE SCHEDULES
                            </h5>
                            <ListGroupItem>
                              <Form>
                                <FormGroup check inline>
                                  <Label check>
                                    <Input
                                      type="radio"
                                      name="basicRadio"
                                      defaultChecked
                                    />{" "}
                                    Queue
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Input type="radio" name="basicRadio" />{" "}
                                    Published
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Input type="radio" name="basicRadio" />{" "}
                                    Unpublished
                                  </Label>
                                </FormGroup>
                                <FormGroup>
                                  <Label>Category</Label>
                                  <Input
                                    type="select"
                                    className="mt-1"
                                    name="select"
                                    id="exampleSelect"
                                  >
                                    <option>--Select All--</option>
                                    <option>Nightcrawler</option>
                                    <option>Donnie Darko</option>
                                  </Input>
                                </FormGroup>
                                <Button className="btn btn-warning">
                                  Delete
                                </Button>
                              </Form>
                            </ListGroupItem>
                          </div>
                        </ListGroup>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="8">
                    {/* <div className="text-right">
                      <Button className="btn btn-success">Add Post</Button>
                    </div> */}
                    <Calendar />
                  </Col>
                  <Col md="3"></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SheduleList;
