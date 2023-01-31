import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaDribbble,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.site_footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className={styles.widget}>
              <h3>Contact</h3>
              <address>43 Raymouth Rd. Baltemoer, London 3910</address>
              <ul className={["list-unstyled", styles.links].join(" ")}>
                <li>
                  <a href='tel://11234567890'>+1(123)-456-7890</a>
                </li>
                <li>
                  <a href='tel://11234567890'>+1(123)-456-7890</a>
                </li>
                <li>
                  <a href='mailto:bouayadyassine5@gmail.com'>
                    bouayadyassine5@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className={styles.widget}>
              <h3>Sources</h3>
              <ul
                className={["list-unstyled", "float-start", styles.links].join(
                  " "
                )}
              >
                <li>
                  <a href='#'>About us</a>
                </li>
                <li>
                  <a href='#'>Services</a>
                </li>
                <li>
                  <a href='#'>Vision</a>
                </li>
                <li>
                  <a href='#'>Mission</a>
                </li>
                <li>
                  <a href='#'>Terms</a>
                </li>
                <li>
                  <a href='#'>Privacy</a>
                </li>
              </ul>
              <ul
                className={["list-unstyled", "float-start", styles.links].join(
                  " "
                )}
              >
                <li>
                  <a href='#'>Partners</a>
                </li>
                <li>
                  <a href='#'>Business</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
                <li>
                  <a href='#'>FAQ</a>
                </li>
                <li>
                  <a href='#'>Creative</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className={styles.widget}>
              <h3>Links</h3>
              <ul className={["list-unstyled", styles.links].join(" ")}>
                <li>
                  <a href='#'>Our Vision</a>
                </li>
                <li>
                  <a href='#'>About us</a>
                </li>
                <li>
                  <a href='#'>Contact us</a>
                </li>
              </ul>

              <ul className={["list-unstyled", styles.social].join(" ")}>
                <li>
                  <a href='#'>
                    <span className='icon-instagram'>
                      <FaInstagram />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='icon-twitter'>
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='icon-facebook'>
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='icon-linkedin'>
                      <FaLinkedinIn />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='icon-pinterest'>
                      <FaPinterest />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='icon-dribbble'>
                      <FaDribbble />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
