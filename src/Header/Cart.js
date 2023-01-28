import React from "react";
import classes from "./Cart.module.css";
import "./styles.css";
import Header from "./Header";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import "react-multi-carousel/lib/styles.css";
import { deletePropertie } from "../redux/PropertieSlice";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const propertieList = useSelector((state) => state.Properties.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <Header />

      <div className={[classes.container, "container"].join(" ")}>
        {propertieList.map((e) => {
          return (
            <div className={[classes.PropertyItem, classes.flex]} key={e.id}>
              <img src={e.Image} alt='' />
              <div className={classes.PropertyContent}>
                <span className={classes.price}>{e.price}</span>
                <div>
                  <p className={classes.adress}>{e.adress}</p>
                  <span className={classes.city}>{e.city}</span>
                </div>

                <button
                  className={classes.detailsBtn}
                  onClick={() => {
                    dispatch(deletePropertie({ id: e.id }));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
