import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./BigFooter.css";
import Capture2 from "../../images/Capture2.JPG";

function BigFooter() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <footer className="footer py-5 px-5 text-light w-100">
        <div className="mx-4 p-2">
          <Row>
            <Col md={2}>
              <h5 className="fs-6 mb-4">Software</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#features-overview">Features overview</a>
                </li>
                <li>
                  <a href="#solutions">Solutions</a>
                </li>
                <li>
                  <a href="#tracking">Free time tracking app</a>
                </li>
                <li>
                  <a href="#integrations">Integrations</a>
                </li>
                <li>
                  <a href="#download">Download app</a>
                </li>
                <li>
                  <a href="#demo">Demo</a>
                </li>
                <li>
                  <a href="#time">Time tracking API</a>
                </li>
                <li>
                  <a href="#request-feature">Request a feature</a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="fs-6 mb-4">Learning center</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#time">Time tracking resources</a>
                </li>
                <li>
                  <a href="#workforce">Workforce management resources</a>
                </li>
                <li>
                  <a href="#business">Business resources</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h5 className="fs-6 mb-4">More</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#help">Help Center</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#status">Status</a>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h5 className="fs-6 mb-4">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#reviews">Reviews</a>
                </li>
                <li>
                  <a href="#customer">Customer stories</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#press">Press</a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="fs-6 mb-4">Ready to get started?</h5>
              <Button className="btn btn-light px-4 py-3 mb-3">
                Sign me up
              </Button>
              <hr />
              <h5 className="fs-6 mb-4">Follow us</h5>
              <div className="social-icons">
                <FaFacebookF className="me-3" />
                <FaLinkedinIn className="me-3" />
                <FaTwitter className="me-3" />
                <FaYoutube className="me-3" />
                <FaInstagram className="me-3" />
              </div>
            </Col>
          </Row>
          <footer className="mt-4 d-flex justify-content-between">
            <div className="d-flex w-75 copyright">
              <img src={Capture2} alt="Logo" className="footer-logo me-5" />
              <div className="text-white">
                <p className="mt-2 text-copy">Copyright © 2024 Netsoft Holdings, LLC</p>
                <p className="text-copy">11650 Olio Road, Suite #1000 - 193 Fishers, IN 46037</p>
              </div>
            </div>

            <div className="footer-links ps-3">
              <a href="#terms" className="me-3">
                Terms
              </a>
              <a href="#privacy" className="me-3">
                Privacy
              </a>
              <a href="#compliance">GDPR compliance</a>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
}

export default BigFooter;
