import React from "react";
import Back from "../common/back/Back";
import Heading from "../common/heading/Heading";
import { poliklinikweb } from "../../dummydata";
import ImageCarousel from "./ImageCarousel"

const Poliklinik = () => {
  return (
    <>
      <Back subtitle="WBS" title="POLIKLINIK UT" />
      <section className="wbs">
        <div className="container flex">
          {poliklinikweb.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About Us" />
                <ImageCarousel />
                <p>{val.desc}</p>
                <p style={{ marginBottom: "50px" }}> {val.desc1}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Poliklinik;
