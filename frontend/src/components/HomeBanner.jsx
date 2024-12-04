import { React } from "react";
import "./Home.css";

const HomeBanner = () => {
 
  return (
    <div>
      <section>
        <div className="container-fluid px-0 position-relative">
          <img
            src="/Images/IIT Banner.png"
            alt="College Data"
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
        <marquee width="100%" direction="left" height="20px" className="mt-1">
          The IKS Calender of 2024 (India of Ages), purported to be published by
          the Indian Institute of Technology Kharagpur, presently under
          circulation in Social Media is NOT an officially published calender of
          IIT Kharagpur. Accordingly, the Institute, or any of its authorities,
          owe no responsibility whatsoever for the veracity of its contents or
          any other issues arising therefrom. The Institute bears No Knowledge
          of the content that is represented in individual capacity.
        </marquee>
      </section>

      <section className="About_wrapper py-4">
        <div className="container About_page ">
          <div className="row my-4">
            <div className="col-12 col-md-8">
              <h3>About IITKGP</h3>
              <div className="row my-4">
                <div className="col-12 col-sm-4 p-0">
                  <video
                    className="about_video"
                    autoPlay
                    muted
                    loop
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "0.45rem",
                    }}
                  >
                    <source
                      src="/Videos/12241671_1080_1920_25fps.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="col-12 col-sm-8 px-3">
                  <h6 style={{ color: "darkblue", fontWeight: "bold" }}>
                    Dedicated to the service of the Nation
                  </h6>
                  <p style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                    The motto of IIT Kharagpur is "योगः कर्मसु कौशलम्". This
                    literally translates to "Excellence in action is Yoga",
                    essentially implying that doing your work well is (true)
                    yoga. This can be traced to Sri Krishna's discourse with
                    Arjuna in the Bhagavad Gita. The quote, in the larger
                    context of the Gita, urges man to acquire equanimity because
                    a mind of equanimity allows a man to shed distracting
                    thoughts of the effects of his deeds and concentrate on the
                    task before him. Equanimity is the source of perfection in
                    Karmic endeavours that leads to Salvation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <video
                className="about_video"
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "0.45rem",
                }}
              >
                <source
                  src="/Videos/12515406_1440_2560_60fps.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section  */}
      <section className="Conclave_wrapper py-4">
        <div className="container ">
          <div className="row my-4">
            <div className="col-12 col-md-6 p-0">
              <h3>VP Conclave 2024</h3>
              {/* <div data-aos="fade-right"></div> */}

              <div className="row my-4">
                <div className="col-12 col-sm-6 p-0 " >
                  <video
                    className="about_video"
                    autoPlay
                    muted
                    loop
                    style={{
                      width: "90%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <source
                      src="/Videos/12241671_1080_1920_25fps.mp4"
                      type="video/mp4"
                    />
                  </video>
                
                </div>
                <div className="col-12 col-sm-6 p-0" >
                  <video
                    className="about_video"
                    autoPlay
                    muted
                    loop
                    style={{
                      width: "90%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <source
                      src="/Videos/12241671_1080_1920_25fps.mp4"
                      type="video/mp4"
                    />
                  </video>
               
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="d-flex justify-content-lg-between">
                <h3>Highlights</h3>

                <button className="btn btn-primary">View All</button>
              </div>
              <div className="row my-5">
                <div className="col-12 col-sm-6 p-0 " >
                  <video
                    className="about_video"
                    autoPlay
                    muted
                    loop
                    style={{
                      width: "90%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <source
                      src="/Videos/12241671_1080_1920_25fps.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <h6 className="mt-4">Academy-Industry Collaboration</h6>
                </div>
                <div className="col-12 col-sm-6 p-0" >
                  <video
                    className="about_video"
                    autoPlay
                    muted
                    loop
                    style={{
                      width: "90%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <source
                      src="/Videos/12241671_1080_1920_25fps.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <h6 className="mt-4">Recognition</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achivement  */}
      <section className="Achievement_wrapper">
        <div className="container ">
          <div className="row my-4">
            <div className="col-12 col-md-6 p-0">
              <h3>Recent Achivements</h3>
              <div className="row my-5">
                <div className="col-12 col-md-6 p-0 ">
                  <img
                    src="/Images/recent-achvement-img2_thumb.jpg"
                    alt=""
                    style={{ border: "3px solid red" }}
                  />
                </div>
                <div className="col-12 col-md-6 ">
                  <p style={{ color: "blue" }} className="achiv_para fs-5">
                    The Institue has also been ranked among the Top 5
                    Engineering Institute in India by all the Ranking Agencies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-0">
              <h3>Study @ IITKGP</h3>
             

              <ul className="nav nav-tabs d-flex my-3" id="myTab" role="tablist">
  <li className="nav-item col-6 col-lg-4" role="presentation">
    <button
      className="nav-link active"
      id="home-tab"
      data-bs-toggle="tab"
      data-bs-target="#home"
      type="button"
      role="tab"
      aria-controls="home"
      aria-selected="true"
    >
      <h6>UnderGraduate</h6>
    </button>
  </li>
  <li className="nav-item col-6 col-lg-4" role="presentation">
    <button
      className="nav-link"
      id="profile-tab"
      data-bs-toggle="tab"
      data-bs-target="#profile"
      type="button"
      role="tab"
      aria-controls="profile"
      aria-selected="false"
    >
      <h6>Post Graduate</h6>
    </button>
  </li>
  <li className="nav-item col-6 col-lg-4" role="presentation">
    <button
      className="nav-link"
      id="contact-tab"
      data-bs-toggle="tab"
      data-bs-target="#contact"
      type="button"
      role="tab"
      aria-controls="contact"
      aria-selected="false"
    >
      <h6>Research</h6>
    </button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div
    className="tab-pane fade show active"
    id="home"
    role="tabpanel"
    aria-labelledby="home-tab"
  >
  <div className="row">
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>B.Tech / B.Arch</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>Dual Degree</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>Joint Msc-P.hD</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>Integrated MSC</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4">
    <div className="tab_box">
    <h6>Bsc - B.Ed</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4">
    <div className="tab_box">
    <h6>Bs + Ms</h6>
    </div>
    
    </div>
  </div>
   
  </div>
  <div
    className="tab-pane fade"
    id="profile"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <div className="row">
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>LLB / LLM</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>M.Tech </h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>MBA</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>MHRM</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4">
    <div className="tab_box">
    <h6>MMST</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4">
    <div className="tab_box">
    <h6>PGDBA</h6>
    </div>
    
    </div>
  </div>
  </div>
  <div
    className="tab-pane fade"
    id="contact"
    role="tabpanel"
    aria-labelledby="contact-tab"
  >
    <div className="row">
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>Ph.D</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>MS</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>PDF</h6>
    </div>
    
    </div>
    <div className="col-6 col-md-4 ">
    <div className="tab_box">
    <h6>MIPA</h6>
    </div>
    
    </div>
   
  </div>
  </div>
</div>
              </div>
            </div>
          </div>
    
      </section>
    </div>
  );
};

export default HomeBanner;
