import React, { useState } from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.scss";

const Hero = () => {
  const [state] = useState({
    title: "YAYASAN KARYA BAKTI",
    titleTwo: "UNITED TRACTORS",
  });
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            {/* <h2>
              <div className="title">{state.title}</div>
              <div className="title">{state.titleTwo}</div>
            </h2> */}

            <Heading subtitle="" title="YAYASAN KARYA BAKTI" />
            <Heading style={{ color: "1eb2a6" }} title="UNITED TRACTORS" />
            <div className="line"></div>
            {/* <button onClick={() => (window.location.href = "/contact")} className="primary-btn">
              CONTACT US <i className="fa fa-long-arrow-alt-right"></i>
            </button> */}
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
