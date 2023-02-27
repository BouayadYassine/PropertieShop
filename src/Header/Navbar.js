import React, { useEffect, useRef, useState } from "react";
import classes from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaCartPlus, FaChevronDown, FaChevronRight } from "react-icons/fa";
import "./styles.css";

const navbar = () => {
  return (
    <nav className={classes.sitenav}>
      <div className='container'>
        <div className={classes.menubgwrap}>
          <div className={classes.sitenavigation}>
            <a href='/' className={["float-start", classes.logo].join(" ")}>
              Property
            </a>
            <ul className={classes.sitemenu}>
              <li className='active'>
                <Link to='/'>Home</Link>
              </li>
              <li className={classes.haschildren}>
                <a href='/'>
                  Properties <FaChevronDown className={classes.icona} />
                </a>
                <ul className={classes.dropdown}>
                  <li>
                    <a href='/'>Buy Property</a>
                  </li>
                  <li>
                    <a href='/'>Sell Property</a>
                  </li>
                  <li className={classes.haschildren}>
                    <a href='/'>
                      Dropdown <FaChevronRight className={classes.arrowright} />
                    </a>
                    <ul className=''>
                      <li>
                        <a href='/'>Sub Menu One</a>
                      </li>
                      <li>
                        <a href='/'>Sub Menu Two</a>
                      </li>
                      <li>
                        <a href='/'>Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href='/'>Services</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Contact Us</a>
              </li>
              <li className={classes.cart}>
                <Link to='Cart'>
                  Cart
                  <FaCartPlus className={classes.icon} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
