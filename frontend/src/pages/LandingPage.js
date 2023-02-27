import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/timeline.css";
import {
  faInstagram,
  faLinkedinIn,
  faBootstrap,
  faGithub,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  Container,
  ListGroup,
  Tooltip,
  OverlayTrigger,
  Form,
  Navbar,
  Nav,
  Badge,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import GitHubButton from "react-github-btn";

import landing from "../assets/img/signin_image.jpg";
import candidate_image from "../assets/img/candidate.jpg";
import interviewer_image from "../assets/img/interviewer.jpg";
import recruiter_image from "../assets/img/reruiter.jpg";

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import {
  faBook,
  faExternalLinkAlt,
  faTimesCircle,
  faCheckCircle,
  faCalendarAlt,
  faCodeBranch,
  faShoppingCart,
  faFolder,
  faMapMarkedAlt,
  faPager,
  faFileCode,
  faDownload,
  faUser,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import { isMobile } from "react-device-detect";

import pages from "../data/pages";

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link
          as={Link}
          to={link}
          className="page-preview page-preview-lg scale-up-hover-2"
        >
          <Image
            src={image}
            className="shadow-lg rounded scale"
            alt="Dashboard page preview"
          />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name}{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li
          data-toggle="tooltip"
          data-placement="left"
          title="Main folder that you will be working with"
        >
          <FontAwesomeIcon
            icon={icon ? icon : faFolder}
            className={`${color} me-2`}
          />{" "}
          {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        className="navbar-transparent navbar-theme-tertiary sticky-top"
      >
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand
            as={HashLink}
            to="#home"
            className="me-lg-3 d-flex align-items-center"
          >
            <span className="ms-2  d-none d-md-inline">Oasis</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#home">
                  Home
                </Nav.Link>
                <Nav.Link as={HashLink} to="#about">
                  About Us
                </Nav.Link>
                <Nav.Link as={HashLink} to="#steps">
                  Steps Involved
                </Nav.Link>

                <Nav.Link
                  as={HashLink}
                  to="#contact"
                  className="d-sm-none d-xl-inline"
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button
              as={HashLink}
              to={Routes.Signin.path}
              variant="outline-white"
              className="ms-3"
            >
            <FontAwesomeIcon icon={faUser} className="me-1" /> Login
            </Button>
          </div>
        </Container>
      </Navbar>
      <section className="d-flex bg-white pl-4 pr-4 " id="home">
        <div className="col-4 col-md-6 my-auto">
          {isMobile ? (
            <h6 className="text-center">
            Enhance Your Interview Skills With Oasis
          </h6>
            
          ) : (
            <h4 className="text-center">
              Enhance Your Interview Skills With Oasis
            </h4>
          )}
        </div>
        <div className="col-md-6">
          <Image src={landing} />
        </div>
      </section>
      <section className="text-center mt-5 p-5" id="about">
        <h3>About Us</h3>
        {isMobile ?
        (
          <div className="col-sm-12 p-2 bg-success text-white rounded">
          <p style={{ fontSize: "16px" }}>
            Are you looking to improve your interview skills and stand out to
            potential employers? Oasis offers mock interviews and personalized
            feedback to help you succeed. Our platform connects you with
            experienced professionals who will simulate a real job interview and
            provide constructive feedback on your performance. With Oasis,
            you'll gain the confidence and skills you need to ace your next
            interview. Sign up today and start boosting your career prospects!
          </p>
        </div>
        ):
      (<div className="col-sm-12 m-4 p-3 bg-success text-white rounded">
      <p style={{ fontSize: "20px" }}>
        Are you looking to improve your interview skills and stand out to
        potential employers? Oasis offers mock interviews and personalized
        feedback to help you succeed. Our platform connects you with
        experienced professionals who will simulate a real job interview and
        provide constructive feedback on your performance. With Oasis,
        you'll gain the confidence and skills you need to ace your next
        interview. Sign up today and start boosting your career prospects!
      </p>
    </div>)}
      </section>
      <section className=" text-center mt-3 bg-white pt-3" id="register">
        <h3>Onboard As</h3>
        <div className="d-flex flex-wrap justify-content-between p-4">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="rounded p-5">
              <Image
                style={{ objectFit: "cover", height: "16rem", width: "16rem" }}
                src={candidate_image}
              />
              <Button as={HashLink}
                  to={Routes.CandidateSignup.path} variant="light" size="sm" className="m-2">
                Candidate{" "}
                <FontAwesomeIcon icon={faShareSquare} className="ms-2" />
              </Button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="rounded p-5">
              <Image
                style={{ objectFit: "cover", height: "16rem", width: "16rem" }}
                src={interviewer_image}
              />
              <Button as={HashLink}
                  to={Routes.InterviewerSignup.path} variant="light" size="sm" className="m-2">
                Interviewer{" "}
                <FontAwesomeIcon icon={faShareSquare} className="ms-2" />
              </Button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="rounded p-5 ">
              <Image
                style={{ objectFit: "cover", height: "16rem", width: "16rem" }}
                src={recruiter_image}
              />
              <OverlayTrigger
                trigger={["hover", "focus"]}
                overlay={<Tooltip>Coming Soon..</Tooltip>}
              >
                <Button variant="light" size="sm" className="m-2">
                  Recruiter{" "}
                  <FontAwesomeIcon icon={faShareSquare} className="ms-2" />
                </Button>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </section>
      <section className="section text-center mt-3  pt-5" id="steps">
        <h3>Steps Involved</h3>
        <MDBContainer
          fluid
          className="py-5 pt-3"
          style={{ backgroundColor: "#F0F2F5" }}
        >
          <div className="main-timeline">
            <div className="timeline left">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h4>Create an account</h4>
                  <p className="mb-0">
                    Sign up with your email; verify it & you’re ready to get
                    started on a life-changing journey.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline right">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h4>Complete profile</h4>
                  <p className="mb-0">
                    Complete your profile before scheduling an interview so your
                    interviewer can thoroughly analyse your profile
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline left">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h4>Schedule interview</h4>
                  <p className="mb-0">
                    Choose an available slot that fits your schedule & get a
                    confirmation via e-mail .
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline right">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h4>Performance feedback</h4>
                  <p className="mb-0">
                    Get comprehensive feedback on your performance, tips on
                    improving weaker areas & a link to the recording of your
                    interview.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </MDBContainer>
      </section>

      <footer className="footer py-6 bg-tertiary text-white" id="contact">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand
                as={HashLink}
                to="#home"
                className="me-lg-3 mb-3 d-flex align-items-center"
              >
                <span className="ms-2 brand-text text-white">Oasis</span>
              </Navbar.Brand>
              <p>
                This is a portfolio project of haseeb. Thank You for visiting :)
              </p>
            </Col>

            <Col xs={6} md={2} className="mb-5 mb-lg-0"></Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0"></Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Get in touch</span>
              <div className="d-flex">
                <div className="m-3 ">
                  <a
                    href="https://www.instagram.com/haseeb_k_p"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="m-3">
                  <a
                    href="https://www.linkedin.com/in/haseebkph/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
                <div className="m-3">
                  <a href="https://github.com/haseeb-kp" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
