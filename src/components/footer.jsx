import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="page-footer font-small indigo">
      <div className="container footer">
        <div className="row text-center d-flex justify-content-center pt-5 mb-3">
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/AboutUs">About us</Link>
            </h6>
          </div>

          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/products"> products </Link>
            </h6>
          </div>

          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/AboutUs">Contact Us</Link>
            </h6>
          </div>
        </div>

        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />

        <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
          <div className="col-md-9 col-12 mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              We are software programmer and web developer. We are also an
              ice-cream lover that is why created this webpage. It is made
              completely with react. We tried our best to make it aesthetically
              pleasing and mobile friendly. Any constructive criticism would be
              highly appreciated.
            </p>
          </div>
        </div>

        <hr
          className="clearfix d-md-none rgba-white-light"
          style={{ margin: "10% 15% 5%" }}
        />

        <div className="row pb-3">
          <div className="col-md-12">
            <div
              className="mb-5 flex-center icons"
              style={{ textAlign: "center", fontSize: "135%" }}
            >
              <a href="https://www.facebook.com/Xheikh.Noor" className="fb-ic">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href="https://twitter.com/NoOrAfTaB12" className="tw-ic">
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a className="gplus-ic">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>

              <a href="https://www.instagram.com/n00raftab/" className="ins-ic">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
