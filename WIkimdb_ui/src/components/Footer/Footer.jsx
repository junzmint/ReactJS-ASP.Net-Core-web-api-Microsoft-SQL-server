import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./styleFooter.css";

function Footers() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="ml-auto col-lg-4 col-md-5">
            <br />
            <br />
            <p style={{ fontSize: 18 }}>PROJECT PHILOSOPHY</p>
            <p style={{ fontSize: 22 }}>
              "Without films, a soul is not a soul."
            </p>
          </div>

          <div className="d-flex justify-content-center mx-auto col-lg-6 col-md-10 col-12">
            <p className="">
              <br />
              <i className="fa fa-envelope-o mr-2"></i>
              <a href="#">Thanh.DC205025@sis.hust.edu.vn</a>
              <p>
                <i className="fa fa-phone mr-1"></i> 086-920-1057
              </p>

              <i className="fa fa-envelope-o mr-1"></i>
              <a href="#">Dung.BM205070@sis.hust.edu.vn</a>
              <p>
                <i className="fa fa-phone mr-1"></i> 010-020-0840
              </p>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
