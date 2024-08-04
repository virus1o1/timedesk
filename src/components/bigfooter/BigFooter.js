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
    <div children="d-flex justify-content-center align-items-center">
      <footer className="footer py-5 px-5 text-light">
        <div className="mx-4 p-2">
          <Row>
            <Col md={2}>
              <h5 className="fs-6 mb-4">Software</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Features overview</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Free time tracking app</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
                <li>
                  <a href="#">Download app</a>
                </li>
                <li>
                  <a href="#">Demo</a>
                </li>
                <li>
                  <a href="#">Time tracking API</a>
                </li>
                <li>
                  <a href="#">Request a feature</a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="fs-6 mb-4">Learning center</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Time tracking resources</a>
                </li>
                <li>
                  <a href="#">Workforce management resources</a>
                </li>
                <li>
                  <a href="#">Business resources</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h5 className="fs-6 mb-4">More</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h5 className="fs-6 mb-4">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="#">Customer stories</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
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
            <div className="d-flex w-75">
              <img src={Capture2} alt="Logo" className="footer-logo me-5 " />
              <div className="text-white">
                <p className="mt-2 text-copy">Copyright © 2024 Netsoft Holdings, LLC</p>
                <p className="text-copy">11650 Olio Road, Suite #1000 - 193 Fishers, IN 46037</p>
              </div>
            </div>

            <div className="footer-links w-25 ps-3">
              <a href="#" className="me-3">
                Terms
              </a>
              <a href="#" className="me-3">
                Privacy
              </a>
              <a href="#">GDPR compliance</a>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
}

export default BigFooter;
