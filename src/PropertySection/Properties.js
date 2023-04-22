import React, { useState, useRef } from "react";
import classes from "./Properties.module.css";
import { FaBed, FaBath } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { addPropertie } from "../redux/PropertieSlice";
import { nanoid } from "@reduxjs/toolkit";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Properties() {
  const dispatch = useDispatch();
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const handlePreviousClick = () => {
    carouselRef.current.previous();
    setActiveSlide(activeSlide - 1);
  };

  const handleNextClick = () => {
    carouselRef.current.next();
    setActiveSlide(activeSlide + 1);
  };

  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className={[classes.btn_details, "row"].join(" ")}>
        <div className={["col-md-6", "text-left"].join(" ")}>
          <button
            className={[classes.btn, classes.primary, classes.prev].join(" ")}
            onClick={handlePreviousClick}
          >
            prev
          </button>
        </div>

        <div className={["col-md-6", " text-lg-end"].join(" ")}>
          <button
            className={[classes.btn, classes.primary, classes.next].join(" ")}
            onClick={handleNextClick}
          >
            next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div id='properties' className={classes.Section}>
      <div
        className={[classes.container, "container", "align-items-center"].join(
          " "
        )}
      >
        <div className={[classes.c1, "row"].join(" ")}>
          <div className='col-lg-6'>
            <h2>Popular Properties</h2>
          </div>
          <div className='col-lg-6 text-lg-end'>
            <button className={classes.PropertiesBtn}>
              <a href=''>View all properties</a>
            </button>
          </div>
        </div>

        <div className={classes.center}>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            customTransition='all .6s ease'
            autoPlaySpeed={3000}
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            customButtonGroup={<CustomButtonGroup />}
            ref={carouselRef}
          >
            {data.map((e) => {
              return (
                <div
                  className={[
                    classes.PropertyItem,
                    classes.slideshowSlider,
                  ].join(" ")}
                  key={e.id}
                >
                  <img src={e.Image} alt='' />
                  <div className={classes.PropertyContent}>
                    <span className={classes.price}>{e.price}</span>
                    <div>
                      <p className={classes.adress}>{e.adress}</p>
                      <span className={classes.city}>{e.city}</span>
                      <div className={classes.flex}>
                        <span>
                          <FaBed />
                        </span>
                        <span className={classes.size}>2 beds</span>

                        <span>
                          <FaBath />
                        </span>
                        <span className={classes.size}>2 baths</span>
                      </div>
                    </div>

                    <button
                      className={classes.detailsBtn}
                      onClick={() => {
                        dispatch(
                          addPropertie({
                            id: nanoid(),
                            Image: e.Image,
                            price: e.price,
                            city: e.city,
                            adress: e.adress,
                          })
                        );
                      }}
                    >
                      <a>Buy Now</a>
                    </button>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <CustomButtonGroup />
      </div>
    </div>
  );
}

export default Properties;
