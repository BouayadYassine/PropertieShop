import React, { useState, useRef } from "react";
import classes from "./testimonials.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import data from "./data";

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

function Testimonials() {
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
      <div className={[classes.div_button].join(" ")}>
        <span
          className={[classes.button, classes.primary].join(" ")}
          onClick={handlePreviousClick}
        >
          prev
        </span>
        <span
          className={[classes.button, classes.primary].join(" ")}
          onClick={handleNextClick}
        >
          next
        </span>
      </div>
    );
  };
  return (
    <section className={["container", classes.testimonials_sec].join(" ")}>
      <div className={["row", "my-4", ""].join(" ")}>
        <div className={["col-md-6", ""].join(" ")}>
          <h2
            className={[classes.primary, "font-weight-bold", "mb-4"].join(" ")}
          >
            Customer says
          </h2>
        </div>
        <div
          className={["col-md-6", "text-md-end", classes.div_button].join(" ")}
        >
          <CustomButtonGroup />
        </div>
      </div>

      <div className={["row", classes.container_card].join(" ")}>
        <Carousel
          responsive={responsive}
          customButtonGroup={<CustomButtonGroup />}
          beforeChange={(nextSlide) => setActiveSlide(nextSlide)}
          ref={carouselRef}
          infinite={true}
          autoPlay={true}
          customTransition='all .6s ease'
          autoPlaySpeed={3000}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {data.map((e) => {
            return (
              <div className={classes.ctn}>
                <img src={e.Image} alt='' className={classes.imgs} />
                <div>
                  <FaStar className={classes.icons} />
                  <FaStar className={classes.icons} />
                  <FaStar className={classes.icons} />
                  <FaStar className={classes.icons} />
                  <FaStar className={classes.icons} />
                </div>
                <h3 className={["mb-4", "mt-2", classes.name].join(" ")}>
                  {e.name}
                </h3>
                <blockquote>
                  <p>{e.review}</p>
                </blockquote>

                <p className={classes.speciality}>{e.speciality}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
