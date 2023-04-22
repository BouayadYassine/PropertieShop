import React, { useState, useEffect } from "react";
import classes from "./Features.module.css";
import "./flaticon/font/flaticon.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Features() {
  const [Load, setLoad] = useState();

  return (
    <div className={["container", classes.container].join(" ")}>
      <div className={["row"].join(" ")}>
        <div className={["col-6", "col-lg-3", classes.wrapper].join(" ")}>
          <span className={["flaticon-house", classes.icons].join(" ")}></span>
          <h3 className={[classes.h3].join(" ")}>Our Properties</h3>
          <p className={[classes.p].join(" ")}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, accusamus.
          </p>
          <p>
            <a href='' className={[classes.a, classes.un].join(" ")}>
              Learn more
            </a>
          </p>
        </div>
        <div className={["col-6", "col-lg-3", classes.wrapper].join(" ")}>
          <span
            className={["flaticon-building", classes.icons].join(" ")}
          ></span>
          <h3 className={[classes.h3].join(" ")}>Property for Sale</h3>
          <p className={[classes.p].join(" ")}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, accusamus.
          </p>
          <p>
            <a href='' className={[classes.a, classes.un].join(" ")}>
              Learn more
            </a>
          </p>
        </div>
        <div className={["col-6", "col-lg-3", classes.wrapper].join(" ")}>
          <span
            className={["flaticon-house-3", classes.icons].join(" ")}
          ></span>
          <h3 className={[classes.h3].join(" ")}>Real Estate Agent</h3>
          <p className={[classes.p].join(" ")}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, accusamus.
          </p>
          <p>
            <a href='' className={[classes.a, classes.un].join(" ")}>
              Learn more
            </a>
          </p>
        </div>
        <div className={["col-6", "col-lg-3", classes.wrapper].join(" ")}>
          <span
            className={["flaticon-house-1", classes.icons].join(" ")}
          ></span>
          <h3 className={[classes.h3].join(" ")}>House for Sale </h3>
          <p className={[classes.p].join(" ")}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, accusamus.
          </p>

          <p>
            <a href='' className={[classes.a, classes.un].join(" ")}>
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
