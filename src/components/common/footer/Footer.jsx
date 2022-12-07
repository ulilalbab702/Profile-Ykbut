import React from "react";
import { blog } from "../../../dummydata";
import Logo from "../../../assets/image/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1 style={{fontSize: "35px"}}>Newsletter -</h1>
            <span style={{fontSize: "20px"}}> Stay tune and get the latest update</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <a href="/">
              <i className="fa fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </section> */}
      <footer>
        <div className="padding" style={{textAlign: 'center', padding: '0px 0', backgroundColor: 'white', display:'grid'}}>
          <div className="box logo">
            <div className="logo">
              <a href="/" className="homeLink">
                <img src={Logo} alt="LOGO YKBUT" className="footer" style={{width: 'auto', height:'90px'}}/>
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/ykbutofficial/"
                className="nav-link p-0 text-muted mx-2"
              >
                <i className="fab fa-instagram icon"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCOsZmiEPqgyOwOPDRJYUJzg"
                className="nav-link p-0 text-muted mx-2"
              >
                <i className="fab fa-youtube icon"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/"
                className="nav-link p-0 text-muted mx-2"
              >
                <i className="fab fa-linkedin icon"></i>
              </a>
            </div>
          </div>
          {/* <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <a href="/">
                <li>Home Page</li>
              </a>
              <a href="/gallery">
                <li>Our Gallery</li>
              </a>
              <a href="/whistleblowing">
                <li>Whisle Blowing</li>
              </a>
              <a href="/career">
                <li>Career Info</li>
              </a>
              <a href="/contact">
                <li>Location</li>
              </a>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map-marker-alt"></i>
                Yayasan Karya Bakti UT. Jl. Raya Bekasi Km 22, Cakung. Jakarta
                Timur 13910
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +62 000-0000-0000
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                email@ykbut.co.id
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | YAYASAN KARYA BAKTI UT{" "}
          <i className="fa fa-heart"></i>
        </p>
      </div>
    </>
  );
};

export default Footer;
