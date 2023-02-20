import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import GitHubButton from 'react-github-btn';

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";


import pages from "../data/pages";

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
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
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">Volt React</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">Features</Nav.Link>
                <Nav.Link as={HashLink} to="#pages">Pages</Nav.Link>
                <Nav.Link as={HashLink} to="#folder" className="d-sm-none d-xl-inline">Folder Structure</Nav.Link>
                <Nav.Link as={HashLink} to="#getting-started">Getting Started</Nav.Link>
                <Nav.Link as={HashLink} to="#download">Upgrade to Pro</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button as={HashLink} to="#download" variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">Volt React Dashboard</h1>
              <p className="text-muted fw-light mb-5 h5">Open source powered by React.js and Bootstrap 5</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
                  Explore dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
                <GitHubButton className="mt-lg-2" href="https://github.com/themesberg/volt-react-dashboard" data-size="large" data-show-count="true" aria-label="Star themesberg/volt-react-dashboard on GitHub">Star</GitHubButton>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                  <a href="https://themesberg.com" target="_blank">
                    <Image src={ThemesbergLogoIcon} height={25} width={25} className="mb-3" alt="Themesberg Logo" />
                    <p className="text-muted font-small m-0">A Themesberg production</p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
        <div className="section pt-0">
          <Container className="mt-n10 mt-lg-n12 z-2">
            <Row className="justify-content-center">
              <Col xs={12}>
                <Image src={MockupPresentation} alt="Mockup presentation" />
              </Col>
            </Row>
            <Row className="justify-content-center mt-5 mt-lg-6">
              <Col xs={6} md={3} className="text-center mb-4">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                  <FontAwesomeIcon icon={faPager} className="text-secondary" />
                </div>
                <h3 className="fw-bolder">10</h3>
                <p className="text-gray">Example Pages</p>
              </Col>
              <Col xs={6} md={3} className="text-center mb-4">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                  <FontAwesomeIcon icon={faReact} className="text-secondary" />
                </div>
                <h3 className="fw-bolder">100+</h3>
                <p className="text-gray">React Components</p>
              </Col>
              <Col xs={6} md={3} className="text-center">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                  <FontAwesomeIcon icon={faSass} className="text-secondary" />
                </div>
                <h3 className="fw-bolder">Workflow</h3>
                <p className="text-gray">Sass & react-app</p>
              </Col>
              <Col xs={6} md={3} className="text-center">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                  <FontAwesomeIcon color="secondary" icon={faBootstrap} className="text-secondary" />
                </div>
                <h3 className="fw-bolder">Bootstrap 5</h3>
                <p className="text-gray">CSS Framework</p>
              </Col>
            </Row>
          </Container>
        </div>
      
      <section className="section section-sm pt-0" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">
                10 hand-crafted pages
              </h2>
              <p className="lead px-lg-10">
                Every page from Volt has been carefully built to provide all the necessary pages your startup will require
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            {pages.map(page => <PagePreview key={`page-${page.id}`} {...page} />)}
          </Row>
        </Container>
      </section>
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Volt React</span>
              </Navbar.Brand>
              <p>Volt React is a free and open source admin dashboard template powered by React.js and Bootstrap 5.</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Themesberg</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="https://themesberg.com/blog">Blog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/products">Products</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/about">About Us</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/contact">Contact Us</Card.Link></li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} to={Routes.DocsQuickStart.path} target="_blank">Getting started</Card.Link>
                </li>
                <li><Card.Link as={Link} to={Routes.DocsChangelog.path} target="_blank">Changelog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/licensing">License</Card.Link></li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
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
