import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import { teams, hero, culture } from "../../assets";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row" style={{padding: "100px 0 0"}}>
            <img src={hero} alt="" />
          </div>
          <div className="right row">
            <div style={{fontSize: "30px"}}>
            <Heading subtitle="All About YKBUT" />
            </div>
            
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
      <div>
        <Heading subtitle="CULTURE" title="Caracter & Culture" />
        <img src={culture} alt="culture-ykbut" className="culture" style={{display: 'block', width: '85%', height: 'auto', marginLeft: 'auto', marginRight: 'auto'}}/> 
        
        <img src={teams} alt="struktur-organisasi" className="teams" />
      </div>
    </>
  );
};

export default AboutCard;
