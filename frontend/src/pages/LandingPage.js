import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
} from "@fortawesome/free-solid-svg-icons";

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
                {/* <Nav.Link as={HashLink} to="#getting-started">Getting Started</Nav.Link>
                <Nav.Link as={HashLink} to="#download">Upgrade to Pro</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
            <Button
              as={HashLink}
              to="#download"
              variant="outline-white"
              className="ms-3"
            >
              <FontAwesomeIcon icon={faUser} className="me-1" /> Login
            </Button>
          </div>
        </Container>
      </Navbar>
      <section className="d-flex bg-white pl-4 pr-4 ">
        <div className="col-md-6 my-auto">
          <h2 className="text-center">
            Enhance Your Interview Skills With Oasis
          </h2>
        </div>
        <div className="col-md-6">
          <Image src={landing} />
        </div>
      </section>
      <section className="text-center mt-5 p-5" id="about">
        <h3>About Us</h3>
        <div className="m-4 p-3 bg-success text-white rounded">
          <p style={{ fontSize: "20px" }}>
            Are you looking to improve your interview skills and stand out to
            potential employers? Oasis offers mock interviews and personalized
            feedback to help you succeed. Our platform connects you with
            experienced professionals who will simulate a real job interview and
            provide constructive feedback on your performance. With Oasis,
            you'll gain the confidence and skills you need to ace your next
            interview. Sign up today and start boosting your career prospects!
          </p>
        </div>
      </section>
      <section className="col-12 text-center mt-3 bg-white pt-3 w-98" id="about">
        <h3>Onboard As</h3>
        <div
          className=" m-4 p-5 d-flex justify-content-between"
          style={{ display: "flex", height: "400px", width: "100%" }}
        >
          <div className="col-md-4 rounded p-5">
            <Image
              style={{ objectFit: "cover", height: "100%", width: "auto" }}
              src={candidate_image}
            />
            <Button>Candidate</Button>
          </div>
          <div className="col-md-4 rounded p-5">
            <Image
              style={{ objectFit: "cover", height: "102.8%", width: "auto" }}
              src={interviewer_image}
            />
            <Button>Interviewer</Button>
          </div>
          <div className="col-md-4 rounded p-5 ">
            <Image
              style={{ objectFit: "cover", height: "100%", width: "auto" }}
              src={recruiter_image}
            />
            <Button>Recruiter</Button>
          </div>
        </div>
      </section>

      <section className="section section-sm pt-0" id="pages">
        <Container></Container>
      </section>
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand
                as={HashLink}
                to="#home"
                className="me-lg-3 mb-3 d-flex align-items-center"
              >
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Volt React</span>
              </Navbar.Brand>
              <p>
                Volt React is a free and open source admin dashboard template
                powered by React.js and Bootstrap 5.
              </p>
            </Col>

            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link
                    as={Link}
                    to={Routes.DocsQuickStart.path}
                    target="_blank"
                  >
                    Getting started
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    as={Link}
                    to={Routes.DocsChangelog.path}
                    target="_blank"
                  >
                    Changelog
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/licensing"
                  >
                    License
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="example@company.com"
                      name="email"
                      aria-label="Subscribe form"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-secondary text-dark shadow-soft btn-block"
                      data-loading-text="Sending"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
