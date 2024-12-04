import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Home.css";
import HomeBanner from "./HomeBanner";

const Home = () => {
  const location = useLocation(); // Get the current location

  return (
    <>
      <header className="homePage">
        {/* */}
        <nav
          className="navbar navbar-expand-lg p-0 fixed-top "
          style={{ backgroundColor:'rgba(255,0,0,0.8)' }}
        >
          <div className="container">
            <Link
              to={"/"}
              className="nav-link active"
              aria-current="page"
            ></Link>
			<div className="social-links order-lg-last ">
              <ul className="d-flex justify-content-center align-items-center mb-0">
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    {" "}
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="bi bi-list"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/gallery"}
                    className={`nav-link ${
                      location.pathname === "/gallery" ? "active" : ""
                    }`}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/aboutus"}
                    className={`nav-link ${
                      location.pathname === "/aboutus" ? "active" : ""
                    }`}
                  >
                  About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/admin"}
                    className={`nav-link ${
                      location.pathname === "/admin" ? "active" : ""
                    }`}
                  >
                    Login Page
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
        {location.pathname === "/" && <HomeBanner />}
        <Outlet />
      </header>

      <footer className="footer ">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3" style={{cursor:'pointer'}}>
            <img src="/Images/footer-logo.png" alt="" />
            <div className="mt-4">
            <p >Indian Institute of Technology
              Kharagpur, Kharagpur, India - 721302</p>
              <p className="m-0">Phone: +91-3222-255221</p>
              <p className="m-0">Fax: +91-3222-255303</p>
            </div>
             
            </div>
            <div className="col-12 col-md-6 col-lg-3">
            <ul>
            <li>Acedmic Calander</li>
              <li>Anouncement</li>
              <li>Acedmic Units</li>
              <li>Apna IIT KG</li>
              <li>Central Library</li>
              <li>Right to information</li>
              <li>Tendors</li>
              <li>Vendor Registration</li>
              <li>Communication Drectory</li>
            </ul>
             
            </div>
            <div className="col-12 col-md-6 col-lg-3">
            <ul>
            <li>ERP</li>
              <li>Holidays</li>
              <li>Internal Complaints Commitee</li>
              <li>Web Mail</li>
              <li>Former Employee</li>
              <li>BIS Corner</li>
              <li>Tendors</li>
              <li>Covid 19 Notifications</li>
            </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
             
              <ul style={{backgroundColor:'rgb(46, 16, 181)'}} className="py-3">
              <h4>NMICET</h4>
                <li>Prime Minister Research</li>
                <li>Vidya Lakshmi Portal</li>
                <li>National Commission of Women</li>
                <li>Delhi Declaration</li>
              </ul>
            </div>
          </div>
        </div>
                      <hr/>
        <div className="copyright py-1">
        <p className="text-center"> &copy; 2023 Indian Institute of Technology Khadagpur</p> 
        </div>
      </footer>
    </>
  );
};

export default Home;
