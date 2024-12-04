

import React from "react";
import Slider from "react-slick";
import './About.css';

const AboutUs = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="offset-2 col-8 text-center about_data " style={{marginTop: '5rem', }}>
          <h4 className="mt-2">We understand the student journey, because we’ve lived it.</h4>
          <p style={{lineHeight:'32px'}}>Student.com is the world’s leading marketplace for international student housing, helping students find their perfect home abroad. Since it was founded in 2011, our international team has already helped thousands of students find their home.</p>

<p style={{lineHeight:'32px'}}>We have the widest and most carefully selected range of rooms that were built and are managed specifically for students. This gives you the power to explore and compare a variety of rooms across different neighbourhoods so that you can make the right choice. Choosing the right home provides a safe and inspiring foundation. It helps you to grow and make the most of your journey.

</p>
        </div>
      </div>

    </div>
    <div className="container">
    <div className="row">
        <div className="slider">
        
 
      <Slider {...settings}>
        <div className="six" >
          <h3>
          Passion
          </h3>
        </div>
        <div className="one" >
          <h3>
         Integrity
          </h3>
        </div>
        <div className="two" >
          <h3>
        Excellence
          </h3>
        </div>
        <div className="three" >
          <h3>
         Positive Attitute
          </h3>
        </div>
        <div className="four" > 
          <h3>
          experts
          </h3>
        </div> 
        <div className="five" >
          <h3>
          Reasonable Person
          </h3>
        </div>
      </Slider>
        </div>
      </div>
    </div>
<div className="container-fluid" style={{backgroundColor:' #F1E5D1'}}>
<div className="row text-center">
<div className="col-12 my-5">
<h4>Talk to our friendly team of experts</h4>
    <button className="btn p-3 about_btn">Global Access Number</button>
</div>

</div>
    
</div>
    
      </>
  )
}

export default AboutUs
