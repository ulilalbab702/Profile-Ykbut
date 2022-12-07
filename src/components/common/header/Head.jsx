import React from "react";
import Logo from "../../../assets/image/logo.png";

const Head = () => {
  return (
    <>
      <section className="head">
        <div
          className="container_header flexSB"
          style={{
            marginTop: "30px",
            width: "100%",
            height: "auto",
            paddingRight: "30px",
            paddingLeft: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="logo">
            <a href="/" className="homeLink">
              <img
                src={Logo}
                alt="LOGO YKBUT"
                className="image"
                style={{ left: "150px" }}
              />
            </a>
          </div>

          <div className="social" style={{ display: "flex" }}>
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
      </section>
    </>
  );
};

export default Head;
