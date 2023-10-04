import React from "react";
import { Link } from "react-router-dom";
import footer2 from "../../Styles/Footer.css";
import { Row, Col } from "react-bootstrap";
import Milaya_logo from "../../Assets/images/Milaya_logo.png";
// import footerLogo from "../../Assets/images/footerLogo.png";
import location from "../../Assets/icons/location.svg";
import call from "../../Assets/icons/call.svg";
import mail from "../../Assets/icons/mail.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import bg_image from '../../Assets/images/bg-image.png'

const Footer = () => {
  return (
    <>
      <div className="footer-container pt-3">
        <img src={bg_image} alt="#" className="bg_image"/>
        <div className="footer-handler mt-3">
        <div class="container">
          <div class="row row-container">
            <div class="col-xs-6 col-sm-6 col-md-3">
              <Col className="footer-logo">
                <img src={Milaya_logo} alt="footer logo image" />
              </Col>

              <Col className="footer-logo-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur{" "}
                  <br className="footer-text-break" /> adipiscing elit. Ut elit
                  tellus.
                </p>
              </Col>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-3">
              <Col className="footer-heading">
                <h3>Navigation</h3>
              </Col>

              <Col className="footer-menu">
                <ul>
                  <li>
                    <a href="/contact">Home</a>
                  </li>
                  <li>
                    <a href="#">Page</a>
                  </li>
                  <li>
                    <a href="#">About US</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
              </Col>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-3">
              <Col className="footer-heading">
                <h3>Quick Link</h3>
              </Col>

              <Col className="footer-menu">
                <ul>
                  <li>
                    <a href="/contact">Contact US</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Booking</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                </ul>
              </Col>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-3">
              <Col className="footer-heading">
                <h3>Services</h3>
              </Col>

              <Col className="footer-menu">
                <ul>
                  <li>
                    <a href="/contact">Home</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">404</a>
                  </li>
                </ul>
              </Col>
            </div>
          </div>

          <div class="row row-container">
            <div class="col-xs-6 col-sm-6 col-md-3">
              <div className="footer-icon">
                <img src={location} alt=" location icon" />
                <div className="footer-icon-text">
                  <h4>London Eye, London</h4>
                </div>
              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-3">
              <div className="footer-icon">
                <img src={call} alt=" location icon" />
                <div className="footer-icon-text">
                  <h4>(+543) 5543 543</h4>
                </div>
              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-3">
              <div className="footer-icon">
                <img src={mail} alt=" location icon" />
                <div className="footer-icon-text">
                  <h4>admin@gmail.com</h4>
                </div>
              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-3">
              <div className="footer-icon">
                <div className="social-icon">
                  <div className="social-icon-position">
                    <a href="#">
                      <FacebookOutlinedIcon />
                    </a>
                  </div>
                  <div className="social-icon-position">
                    <a href="#">
                      <TwitterIcon />
                    </a>
                  </div>
                  <div className="social-icon-position">
                    <a href="#">
                      <YouTubeIcon />
                    </a>
                  </div>
                  <div className="social-icon-position">
                    <a href="#">
                      <WhatsAppIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-rights">
                <span >© 2023 Oilee Template • All Rights Reserved</span>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
