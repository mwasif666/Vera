import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer text-muted">
      <Container>
        <div className="row align-items-start">
          <div className="col-6 col-md-4 col-lg-3">
            <img className="footer-logo" src="assets/images/logo/2.png" />
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="footer-heading">Quick Menu</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/Services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <h6 className="footer-heading">Contact</h6>
            <ul className="list-unstyled">
              <li>+97143432353</li>
            </ul>
            <h6 className="footer-heading">Address</h6>
            <ul className="list-unstyled">
              <li>
                Villa no.3, 3620568, Al-Wasl Road, Umm-e-Suqaim 2nd, Dubai,
                U.A.E PO Box 567005
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-8 col-lg-3">
            <h6 className="footer-heading">Join & Stay Connected</h6>
            <p className="footer-newsletter-text mb-2">
              Stay updated with the latest wellness trends!
            </p>
            <Form className="d-flex mb-3">
              <Form.Control
                type="email"
                placeholder="Email Address"
                className="newsletter"
              />
              <Button className="Join-btn px-4">JOIN</Button>
            </Form>
            <div className="footer-contact d-flex align-items-center justify-content-between">
              <div className="d-flex gap-3">
                <FaInstagram className="footer-icon" />
                <FaFacebookF className="footer-icon" />
                <FaLinkedinIn className="footer-icon" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
